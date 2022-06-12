# Cities API
An api for gathering data on Italian cities. The API offers a micro service for gathering data on italian cities.

## Current data on cities:

Here is an example of the data that is currently provided by the api.

```Json
name: "Abbadia Cerreto",
zip: "26834",
province: "LO",
altitude: 64
```

## Run with npm
* `npm init` to install packages and dependencies
* `npm start` to run the development server

## Run with docker
* `docker-compose up -d` to run the container

## How to query the api

* Visit `http://localhost:3000/...` in your browser when on local development
* As an alternative you can use a tool like `Postman` to send `GET` requests to the API.


## API endpoints

The following are the current available endpoints of the API, which at the moment accepts only `GET` requests:

* `/cities/name/{name}`: retrieve cities by name
* `/cities/nameincluded/{name}`: retrieve cities by name included (similar as above, but returns also partial results)
* `/cities/province/{province}`: retrieve cities by province
* `/cities/zip/{zip}`: retrieve cities by zip code
* `/cities/altitude/{comparison}{altitude}`: retrieve cities by altitude, the comparison symbol can be =, < or >.

# Author
Samuel Dalvai

