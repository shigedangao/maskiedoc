import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const query = `query GetNewCaseByDepartment($data: GraphPcrInputReg!) {
  getPcrTestMadeByRegion(data: $data) {
    data {
      day
      age
      region
      totalPositivePcrTest
    }
  }
}`;

const data = `
{
  "data": {
    "day": 1,
    "month": 1,
    "year": 2022,
    "region": '11'
  }
}
`

export default function Content(): JSX.Element {
  const [result, setResult] = useState("");
  const {siteConfig} = useDocusaurusContext();

  const triggerQuery = () => {
    const client = new ApolloClient({
      uri: process.env.GRAPHQL_ENDPOINT,
      cache: new InMemoryCache()
    });

    client.query({
      query: gql`${query}`,
      variables: {
        data: {
          day: 1,
          month: 1,
          year: 2022,
          region: 11
        }
      }
    })
    .then((res) => {
      const json = JSON.stringify(res.data.getPcrTestMadeByRegion, null, '\t');
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
