**GET USER**
----
  Fetches an existing user.

* **URL**

  /api/v1/users/:userid

* **Method:**

  `GET`

*  **URL Params**

  **Required:**

  `userid=[objectID]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ username : [username], createdate: [createdate], updatedate: [updatedate] }`

* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
  **Content:** `{apiResponse:'User Not Found'}`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{apiResponse:'Username already exists'}`
