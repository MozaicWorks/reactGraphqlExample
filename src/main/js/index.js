import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

var ReactDOM = require('react-dom');

const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:8080/graphql/index"}),
    cache: new InMemoryCache()
});


const personListQuery = gql`query {
  personList(max: 3) {
    id
    name,
    contacts {
      email {
        emailAddress
      }
    }
  }
}`;


function MyComponentWithData({data: {personList}}) {
    console.log(personList);
    return (
        <div>
            {personList ?
                personList.map((person) => {
                    return <p key={person.id}>
                        {person.name}
                    </p>
                }) : ""
            }
        </div>
    )
}

const MyComponentWithDataGraph = graphql(personListQuery)(MyComponentWithData);

ReactDOM.render(
    <ApolloProvider client={client}>
        <MyComponentWithDataGraph/>
    </ApolloProvider>,
    document.getElementById('app')
);