#Black & Red Inc. Backend-Candidate-lab
### Anthony Chavez
=====================

## TOC
<!-- MarkdownTOC -->

- [Stack](#stack)
- [Running the Environment](#running-the-environment)
- [Testing](#testing)
- [API Spec](#api-spec)
- [TODO](#todo)

<!-- /MarkdownTOC -->


## Stack

- [NodeJS](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [MongoDB](https://www.mongodb.org/downloads#production)
- [mongoose](http://mongoosejs.com/)
- [mocha](https://mochajs.org/)

## Running the Environment

**Spinup MongoDB**

``` mongod ```


**Open a Mongo shell and switch to the DB** (in new terminal)

``` mongo ```
``` use blackRedBeLab ```


**Install Node Deps** (in new terminal)

``` npm install ```

**Start Server**

``` npm start ```

OR if you have PM2 installed

```pm2 start server.js```




## Testing

```mocha```



## API Spec

```/```

GET, POST
```/users```

GET, PUT, DELETE
```/users/:id``` example : ```localhost:3000/users/56ccd18fdaaa556655c78100```




## TODO

- Test coverage for PUT & DELETE operations on users/:id
- Create authentication route, tokenize, lock down API calls
- Abstract Server into router module and providers for each aspect of API
- Create routes/logic for note lookup
- Document API