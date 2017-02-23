**CREATE NOTE**
----
  Creates a new note.  Basic browser authentication with a valid username and password required.

* **URL**

  /api/v1/notes

* **Method:**

  `POST`

*  **URL Params**

  None

* **Data Params**

```javascript
  {
  title=[string],
  description=[string]
  }
```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'Note Created', id: [noteid], title: [title], description: [description], createdate: [createdate], updatedate: [updatedate] }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
