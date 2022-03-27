import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const query = `query GetNewCaseByDepartment($data: NewCaseInput!) {
  getNewCaseByDepartment(data: $data) {
    cases {
      new_entry_hospital
      new_entry_icu
    }
  }
}`;

const data = `
{
  "data": {
    "date": {
      "day": 10,
      "month": 3,
      "year": 2022,
    }
    "department": '75'
  }
}
`

export default function Content(): JSX.Element {
  const [result, setResult] = useState("");

  const triggerQuery = () => {
    const client = new ApolloClient({
      uri: process.env.GRAPHQL_ENDPOINT,
      cache: new InMemoryCache()
    });

    client.query({
      query: gql`${query}`,
      variables: {
        data: {
          date: {
            day: 10,
            month: 3,
            year: 2022,
          },
          department: '75'
        }
      }
    })
    .then((res) => {
      const json = JSON.stringify(res.data.getNewCaseByDepartment, null, '\t');
      setResult(json);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className='content'>
      <div className='content__inner'>
        <h2>Example</h2>
        <p>Below is an example which shows an example of a GraphQL query. No authentication is required</p>
        <div className='content__inner__graph'>
          <div className='block'>
            <Tabs>
              <TabItem value="query" label="query" default>
                <CodeBlock className="language-graphql">
                  {query}
                </CodeBlock>
              </TabItem>
              <TabItem value="data" label="data" default>
                <CodeBlock className="language-graphql">
                  {data}
                </CodeBlock>
              </TabItem>
            </Tabs>
            <button onClick={triggerQuery} className='button button--primary button--block'>Run query</button>
          </div>
          <div className='block'>
            <h3>Result</h3>
            <CodeBlock className="language-json code">
              {result}
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  )
}
