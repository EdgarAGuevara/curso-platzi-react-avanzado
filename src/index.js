import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthProvider'

const token = window.sessionStorage.getItem('token')

const client = new ApolloClient({
  uri: 'https://petgram-server-edgar-thecrash.vercel.app/graphql',
  headers: {
    authorization: token ? `Bearer ${token}` : ''
  },
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </ApolloProvider>
  </AuthProvider>
  , document.getElementById('app'))
