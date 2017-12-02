import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import PersonList from "./PersonList";

const ReactDOM = require('react-dom');

const client = new ApolloClient({
    link: new HttpLink({uri: "http://localhost:8080/graphql/index"}),
    cache: new InMemoryCache()
});


const personListQuery = gql`query {
  personList(max: 3) {
    id
    name,
    contacts {
      id
      email {
        emailAddress
      }
    }
  }
}`;


const PersonListFromGraph = graphql(personListQuery)(({data: {personList}}) => {
    return (
        <PersonList list={personList}/>
    )
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <ApolloProvider client={client}>
            <PersonListFromGraph/>
        </ApolloProvider>
    </MuiThemeProvider>
    , document.getElementById('app')
);