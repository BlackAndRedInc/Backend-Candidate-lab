**DELETE USER**
----
  Delete an existing user.

* **URL**

  /api/v1/users/:userid

* **Method:**

  `DELETE`

*  **URL Params**

  **Required:**

  `userid=[objectID]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'User Deleted', id:[userid], createdate: [createdate], updatedate: [updatedate]} }`

* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
  **Content:** `{apiResponse:'User Not Found'}`
