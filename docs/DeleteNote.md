**DELETE NOTE**
----
  Deletes an existing note if the authorized user matches the creator of the note.. Basic browser authentication with a valid username and password required.

* **URL**

  /api/v1/notes/:noteid

* **Method:**

  `DELETE`

*  **URL Params**

  **Required:**

  `noteid=[objectID]`


* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'Note Deleted', id: [noteid], createdate: [createdate], updatedate: [updatedate] }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ apiResponse : 'User Is Not Authorized' }`
