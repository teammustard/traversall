# Kontiki

> Kontiki is a replication of Contiki Travel Tour's tour details page. It aims to provide the identical seamless, single-page-app based presentation of Contiki's website.

## Related Projects

  - [Booking Component (Zack)](https://github.com/teammustard/kontiki_component_zackzeyu)
  - [Proxy Server (Zack)](https://github.com/teammustard/kontiki_proxy_zackzeyu)
  - [Integration and End-to-End Tests (Zack)](https://github.com/teammustard/kontiki_integration_tests_zackzeyu)
  -- The integration/end-to-end tests are established in a separate repository because it has puppeteer as a required dependency, which has a large installation size (~170mb)
  - [Reviews Component (Brian)](https://github.com/teammustard/kontiki_component_ohbrian19)
  - [Proxy Server (Brian)](https://github.com/teammustard/kontiki_proxy_ohbrian19)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Notes - Server Side](#Notes-Server-Side)
4. [Notes - Client Side](#Notes-Server-Side)

## Usage

> Ensure that sqlite3 is installed and functional

> Install dependencies with `npm install`

> Seed database with files in `db/seed_data`
>> First run `createTables.sql`, then all the remaining `.sql` fles

> I did not include a start server script, however you may use any method you'd like such as nodemon or PM2
>> The main server file is `server/index.js`
>
>> The server uses port 3003 by default, but you may set it using an environment variable `process.env.PORT`
>

> The client side is built using parcel. I have included two npm scripts to build the necessary files:
>> `npm run dev`: Builds the client-side files in development mode and does not do full bundling. This also activates watch mode by default so it rebuilds whenever you make and save changes
>
>> `npm run build`: Builds the client-side files in production mode, with full bundling. This reduces file size, but is less useful in debugging (some errors do not provide as much detail as in development mode)

## Requirements

Beyond the npm modules required in package.json, you should have the following installed and working on the server:

- Node v10.13.0 (LTS as of May 2019) or higher
- Sqlite
- *Optional*: PM2 for keep the server alive and setting the environment variables

## Notes-Server-Side

> **GraphQL**
> - This component makes use of GraphQL to manage API calls, implemented using the `Apollo Server` and `Apollo Client` modules
> -- GraphQL is not a database, but it uses a query language that somewhat resembles SQL queries (`gql`)
> -- Refer to [Apollo's documentation](https://www.apollographql.com/docs/apollo-server/essentials/server/) for additional details
> -- Note that GraphQL does not have anything to do with the database, and all database calls are made using the standard sqlite queries (i.e., GraphQL is not an ORM in any way)
>
> **SQLite**
> - Note that there are two npm modules installed relating to sqlite: `sqlite` and `sqlite3`
> -- They are both required. `sqlite` is an *addon* to `sqlite3` that promisifies all the sqlite methods ([more info](https://www.npmjs.com/package/sqlite)). `sqlite` is *not* an old/outdated version of `sqlite3`

## Notes-Client-Side
> **IMPORTANT:  Components Overview**
> - Please refer to the [README in the documentation folder](documentation/README.md) extensive details on the structure of the component

> **GraphQL + React Hooks**
> - GraphQL is implemented on the client-side using `Apollo Client` ([comprehensive tutorial](https://www.howtographql.com/react-apollo/0-introduction/))
> - All React components are created using functional components + hooks. There is no class component, and all states are managed using hooks
> -- Certain states are stored using React Context
> -- `Apollo Client` does not natively provide React hooks, but I used a third-party npm module to provide the necessary hooks ([npm link](https://github.com/trojanowski/react-apollo-hooks))

> **URL Routing**
> - URL routing is entirely handled in the front-end (i.e., the Express server does not have any routes beyond serving index.html)
> -- Routing is done via the `React Router` module ([npm link](https://github.com/ReactTraining/react-router))