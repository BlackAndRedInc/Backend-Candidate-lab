# B&R Backend Candidate Lab

## Documentation

Place any related documentation in this folder.

## Author
### [Jason Suss] (https://github.com/koofka)

## Notes

* Applied a horizontal folder structure and file naming convention and breakdown for readability and maintainability.
* Accepting any data from user posts as an easy means to creating, updating, and deleting user accounts. Schema requires username and password.
* Removed development list read operation for the user api as an example of enforcing security options.
* Standardized output to implement an apiResponse message on either success or failures of requested actions.
* Implemented passport basic http authentication and used the authenticated userid for authorization of note CRUD operations.
* Utilized Advanced Rest Client Chrome extension for development testing of the same.
* Implemented a MongoDB design principle of not removing records but rather setting a delete boolean to true.  Prefer to maintain data and flag as deleted versus removal for historical and database integrity.

# Technology Stack
*[NodeJS - Javascript runtime](https://nodejs.org/)<br/>
*[Express - Application framework](http://expressjs.com/)<br/>
*[MongoDB - NoSQL data store](https://www.mongodb.org)<br/>
*[Mongoose - mongodb middleware and object modeler](http://mongoosejs.com/)<br/>
*[Passport - authentication middleware](http://passportjs.org/)<br/>

# Requirements
###MongoDB running and accessible via localhost without user authentication.
###NodeJS installed.
###NODE_ENV variable set to development
* linux & mac ```export NODE_ENV=development ```

* windows ```set NODE_ENV=development ```

##Install Node Modules via terminal

``` cd {project folder}
    npm install
```

##Startup Project (requires port 3000 to be available)

```
 npm start
```

###Shutdown project with Ctrl-C

##Create a user to test with
This can be accomplished via a REST client and posting to the CreateUser entry point or via curl on linux/mac

```
$ curl -X POST -H "Content-Type: application/json" -d '{"username":"username","password":"password"}' localhost:3000/api/v1/users
```

Notes CRUD operations require browser authentication with the appropriate Authorization header set via input of an existing username and password.
This would be best tested via a REST client but the following curl command should work on linux/mac to create a note if the simple user above has been created.

```
$ curl -X POST -H "Content-Type: application/json" -H "Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=" -d '{"title":"test note title","description":"test note description"}' localhost:3000/api/v1/notes
```

# Next Steps
*Add and strengthen Passport authentication strategies.
*Consider requiring user authentication for user object get / update / delete.  Business logic interpretation my dictate choice.
*Add additional input validation and consider less flexible input object saves.
*Implement unit testing
*Improve documentation
