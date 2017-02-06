**GET NOTE**
----
  Fetches an existing note.

* **URL**

  /api/v1/notes/:noteid

* **Method:**

  `GET`

*  **URL Params**

  **Required:**

  `noteid=[objectID]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse:'Note Retrieved', id: [noteid], title : [title], description: [description], createdate: [createdate], updatedate: [updatedate] }`

* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
  **Content:** `{apiResponse:'Note Not Found'}`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ apiResponse : 'User Is Not Authorized' }`
