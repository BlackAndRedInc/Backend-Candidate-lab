**UPDATE NOTE**
----
  Updates an existing note. Basic browser authentication with a valid username and password required.

* **URL**

  /api/v1/notes/:noteid

* **Method:**

  `PUT`

*  **URL Params**

  **Required:**

  `noteid=[objectID]`


* **Data Params**

```{
  username=[string],
  password=[string]
  }
```  

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ apiResponse : 'Note Updated' }`

* **Error Response:**

      * **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{ apiResponse : 'User Is Not Authorized' }`
