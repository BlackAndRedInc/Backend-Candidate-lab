**CREATE USER**
----
  Creates a new user.  Username provided must be unique, username and password are required.

* **URL**

  /api/v1/users

* **Method:**

  `POST`

*  **URL Params**

  None

* **Data Params**

**Required:**
```javascript
{
  username=[string],
  password=[string]
}
```  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'User Created', id:[userid], username: [username], createdate: [createdate], updatedate: [updatedate]} }`

* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{apiResponse:'User validation error'}`

    OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{apiResponse:'Username already exists'}`
