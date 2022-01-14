---
sidebar_position: 3
---

# Example

In this example, we'll take a look into how to add a new Query in the GraphQL endpoint with the usage of gRPC.

## 1. Import the proto

In this step, we need to import the proto globally in the project. Within the `proto.ts`. We'll add this code

```ts title="/app/proto.ts"
// add this to the import
import { ProtoGrpcType as ProtoCase } from './proto/case';
import { CaseServiceClient } from './proto/case/CaseService';

// add a new global variable (might be better to be an object but anyway)
export let caseClient: CaseServiceClient;

// Within the loadProtobuf method. Add this
export const loadProtobuf = async () => {
  ...
  const CASE_PROTO_PATH = `${__dirname}/${env.protoPath}/case.proto`;

  ...
  const caseProtoDescriptor = (loadPackageDefinition(packageDefinition) as unknown) as ProtoCase;

  ...
  caseClient = new caseProtoDescriptor.case.CaseService(env.pcrProtoAddr, sslCreds);
}
```

## 2. Define entity

In this step, we'll define an entity which will map the result of the GRPC service to the one in GraphQL. It's kind of like a data wrapper around the gRPC response.

As you can see, there's a method name `from`. This method is used to convert the Generated class to the actual entity class. (There might be better way to do that tho).

```ts title="/app/entities/SimpleCase.ts"
import { CaseResult__Output } from "../proto/case/CaseResult";
import { Field, ObjectType } from "type-graphql";
import { From } from ".";

@ObjectType({ description: "Data for cases in hospital" })
export class SimpleCase implements From<CaseResult__Output, SimpleCase> {
  @Field()
  day: string;

  @Field()
  cases: number;

  from(input: CaseResult__Output): SimpleCase {
    const self = new SimpleCase();
    self.day = input.day;
    self.cases = input.cases;

    return self;
  }
}
```

## 3. Define the input

To query the endpoint. Users need to provide some data. In this case, the input will contain a single date.

```ts title="/app/resolvers/type/simplecase-input.ts"
import { InputType, Field } from "type-graphql";

@InputType()
export class SimpleCaseInput {
  @Field()
  // format: 2022-01-06
  date: string;
}
```

## 4. Define the resolver

Now we have all elements in order to create the resolver. The resolver will basically execute our GraphQL query, which will call the gRPC service that we have defined earlier

```ts title="/app/resolvers/SimpleCase.ts"
import { SimpleCaseInput } from './types/simplecase-input';
import { SimpleCase } from '../entities/SimpleCase';
import { CaseInput } from '../proto/case/CaseInput';
import { CaseResult__Output } from '../proto/case/CaseResult';
import { Resolver, Query, Arg } from 'type-graphql';
import { grpcCallback } from '../utils';

@Resolver()
export class SimpleCaseResolver {
  @Query((_returns) => SimpleCase, { nullable: true })
  async getCaseByDay(
    @Arg('data') arg: SimpleCaseInput
  ): Promise<SimpleCase> {
    // convert the input from the GraphQL input
    const payload: CaseInput = {...arg};

    // Call the gRPC endpoint
    const res: CaseResult__Output = await new Promise((resolve, reject) =>
      caseClient.getCasesByDay(
        payload,
        (err, res) => grpcCallback<CaseResult__Output>(err, res, resolve, reject)
      )
    );

    // Return the data
    const case = new SimpleCase().from(res);
    return case;
  }
}
```

## 5. Add the resolver to the list of resolver

The last final piece of code, is to add the resolver to the list of resolver

```ts title="/app/server.ts"
import { SimpleCaseResolver } from './resolvers/SimpleCase' 

resolvers = [
  // previous resolver
  ...,
  SimpleCaseResolver
]
```

Use the command ```npm run watch``` and go to the ```localhost:3000/graphql```. You should be able to query the GraphQL endpoint which should return a valid value
