**DELETE NOTE**
----
  Deletes an existing note. Basic browser authentication with a valid username and password required.

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
    **Content:** `{ apiResponse : 'Note Deleted' }`

* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
  **Content:** `{ apiResponse : 'User Is Not Authorized' }`
