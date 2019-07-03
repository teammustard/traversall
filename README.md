# TraversAll

![Main Page](documentation/logos.png)

![Interface](documentation/interface.gif)


> TraversAll is a replication of Contiki Travel Tour's tour page. It aims to provide the identical seamless, single-page-app framework build using React and GraphQL
> - 🎣 Built entirely using React Hooks with cutting-edge experimental GraphQL hooks support
> - ☀️ GraphQL served through Apollo Client and Server
> - 💗 Everything tests - unit tests, integration tests, and end-to-end tests using the delightful Jest
> - 📦 Built using Parcel

## Related Projects

  - [Integration and End-to-End Tests (Zack)](https://github.com/teammustard/traversall_integration_tests_zackzeyu)
    - Exmaple integration/end-to-end tests using Jest/Puppeteer are established in a separate repository

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Notes](#Notes)
5. [Notes - API](#Notes-API)

## Usage

> Install dependencies with `npm install`
> - Server: `server/index.js`

## Requirements

Beyond the npm modules required in package.json, you should have the following installed and working on the server:

- Node v10.13.0 (LTS as of May 2019) or higher
- SQLite

## Notes

> **GraphQL**
> - This component makes use of GraphQL to manage API calls, implemented using the `Apollo Server` and `Apollo Client` 
> -- Refer to [Apollo's documentation](https://www.apollographql.com/docs/apollo-server/essentials/server/) for additional details

> **GraphQL + React Hooks**
> - GraphQL is implemented on the client-side using `Apollo Client` ([introduction](https://www.howtographql.com/react-apollo/0-introduction/))
> - All React components are functional components
>   - State management: Hooks + context
>   - `Apollo Client` does not natively provide React hooks, hooks supported via experimental module ([React Apollo Hooks](https://github.com/trojanowski/react-apollo-hooks))

> **Components Overview**
> - Please refer to the [README in the documentation folder](documentation/README.md) extensive details on the structure of the component

> **URL Routing**
> - Client-side routing via [React Router](https://github.com/ReactTraining/react-router)

## Notes-API

> **GraphQL API**
> Additional information for the server's API can be found in the [API documentation](documentation/API_Documentation.md)