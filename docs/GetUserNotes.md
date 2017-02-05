**GET USER NOTES**
----
  Gets all notes for the logged in user.  Basic browser authentication with a valid username and password required.

* **URL**

  /api/v1/notes

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id:[objectID] title : [title], description: [description], createdate: [createdate], updatedate: [updatedate] }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
