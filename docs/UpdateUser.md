**UPDATE USER**
----
  Updates an existing user. If updating username, username provided must be unique.

* **URL**

  /api/v1/users/:userid

* **Method:**

  `PUT`

*  **URL Params**

  **Required:**

  `userid=[objectID]`


* **Data Params**

  **Required:**

```{
  username=[string],
  password=[string]
  }
```  


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'User Updated' }`

* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
  **Content:** `{apiResponse:'User Not Found'}`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{apiResponse:'Username already exists'}`
