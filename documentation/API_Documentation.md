# TraversAll API Documentation

> The Booking Component utilizes GraphQL to manage API requests, so the typical RESTful API endpoints do not apply. Instead, GraphQL queries are used to request for information from the server.

## Table of Contents

1. [GraphQL Endpoint](#GraphQL-Endpoint)
2. [Examples](#Examples)

## GraphQL-Endpoint
The endpoint that the client uses to connect to the GraphQL server (i.e., this is effectively the API endpoint for all API calls) is `/graphql` (example: `mywebsite.com/graphql`).
- The server's GraphQL schema is saved at `server/schema.graphql`
- As shown in the schema, the GraphQL server accepts three types of queries:
-- 	***getTours***: Get information for all tours (returned as an array)
--  ***getTour***: Get information for a single tour (need to provide an id)
--  ***getCountries***: Get information for all the countries (returned as an array)
- The GraphQL server (Apollo Server) provides its own testing page that allows you to query the GraphQL server manually using a web-based interface (accessed by going to the `mywebsite.com/graphql` URL in a browser). **However**, this playground/testing area is only accessible when the server is running in development mode.


## Examples

##### GraphQL uses its own query language. Similar to an SQL query, a GraphQL query can specify exactly what data need to be retrieved, instead of relying on the endpoint to determine what data is to be returned #####

Example Query 1
```graphql
{
getTours {
  name
  duration
 }
}
```
Expected Response 1
```javascript
{
  "data": {
    "getTours": [
      {
        "name": "id justo sit",
        "duration": 21
      },
      {
        "name": "ligula sit amet",
        "duration": 16
      },
      {
        "name": "interdum mauris",
        "duration": 12
      }
      ...
    ]
  }
}
```

Example Query 2
```graphql
{
  getTours {
    listed_price
    duration
    tagline
    trips {
      start_time
      discount
    }
  }
}
```
Expected Response 2
```javascript
{
  "data": {
    "getTours": [
      {
        "listed_price": 4407,
        "duration": 21,
        "tagline": "sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
        "trips": [
          {
            "start_time": "2019-06-25T18:00:30Z",
            "discount": 25
          },
          {
            "start_time": "2019-08-19T02:59:13Z",
            "discount": 2
          },
          ...
        ]
      },
      {
        "listed_price": 2041,
        "duration": 16,
        "tagline": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus",
        "trips": [
          {
            "start_time": "2019-07-09T20:12:08Z",
            "discount": 5
          },
          {
            "start_time": "2019-08-04T03:22:02Z",
            "discount": 14
          },
         ...
        ]
      },
      ...
    ]
  }
}
```

Example Query 3
```graphql
{
  getTour(id:5) {
    id
    experiences_detail
  }
}
```
Expected Response 3
```javascript
{
  "data": {
    "getTour": {
      "id": "5",
      "experiences_detail": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue."
    }
  }
}
```