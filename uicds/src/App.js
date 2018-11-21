import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import gql from 'graphql-tag'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { AUTH_TOKEN } from './constants'

import IssueTable from './components/IssuesTable';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${AUTH_TOKEN}`,
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

let itemsList = [
  {status:"opened", title:"The keyboard shows and hide when clicking on input in android/chrome", activity:"#14063 opened 36 minutes ago by Aykelith", nbComments:"10"},
  {status:"closed", title:"The keyboard shows and hide when clicking on input in android/chrome", activity:"#14063 opened 36 minutes ago by Aykelith", nbComments:"44"},
  {status:"opened", title:"The keyboard shows and hide when clicking on input in android/chrome", activity:"#14063 opened 36 minutes ago by Aykelith", nbComments:"45"},
  {status:"closed", title:"The keyboard shows and hide when clicking on input in android/chrome", activity:"#14063 opened 36 minutes ago by Aykelith", nbComments:"0"},
  {status:"closed", title:"The keyboard shows and hide when clicking on input in android/chrome", activity:"#14063 opened 36 minutes ago by Aykelith", nbComments:"62"}
];

const graphQLResquest = gql`
  query {
    repository(owner: "facebook", name: "react") {
      issues(first: 10) {
        edges {
          cursor
          node {
            title
            state
            author { login }
            body
            createdAt
            comments { totalCount }
          }
        }
      }
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssueTable items={itemsList}></IssueTable>
      </div>
    );
  }
}
ReactDOM.render( <ApolloProvider client={client}>
  
  <App />

</ApolloProvider>, 
document.getElementById('root'));

export default App;
