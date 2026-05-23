### **Revision Notes: Introduction to Express.js**

---

#### **1. Overview of Express.js**
*   **Definition:** Express.js is a **framework** designed for Node.js to facilitate web development and build **production-level web applications**.
*   **Why use Express over the built-in `http` module?**:
    *   The standard `http` package has **limited capabilities**.
    *   Serving **static files** (like HTML, CSS, images) is difficult with pure Node.js.
    *   **Security** features must be manually implemented from scratch.
    *   Handling different request types (**GET, POST, PUT, DELETE**) requires significant custom code, whereas Express simplifies this logic.

#### **2. Environment Setup & Installation**
*   **Nodemon:** A tool that **automatically restarts the server** whenever code changes are saved, eliminating the need for manual restarts. Install it globally using `npm i -g nodemon`.
*   **Initialization:** Start a project by running `npm init -y` to create a `package.json` file with default values.
*   **Installing Express:** 
    *   Standard install: `npm i express`.
    *   Installing a specific version (e.g., Version 4): `npm i express@4`.
    *   **Note on Versions:** While Express 5 is entering the ecosystem with minor changes (like `res.sendFile` naming), the core concepts across versions 4 and 5 remain largely the same.

#### **3. Basic Application Structure**
To create a minimal "Hello World" application in Express:
1.  **Import Express:** `const express = require('express')`.
2.  **Initialize App:** `const app = express()`.
3.  **Define Port:** Choose a port (e.g., `3000`).
4.  **Create a Route:** Use `app.get(path, handler)`.
5.  **Start Server:** Use `app.listen(port)`.

**Example Snippet:**
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
*   **Handler Function:** This function takes **Request (`req`)** and **Response (`res`)** objects as arguments.

---

#### **4. Routing & HTTP Methods**
Express provides simple methods to handle different types of HTTP requests:
*   **`app.get()`**: Used to retrieve data (default browser behavior).
*   **`app.post()`**: Used to send data to the server (often via HTML forms).
*   **`app.put()`**: Used for updating existing data.
*   **`app.delete()`**: Used for removing data.

#### **5. Dynamic Routing: Params and Queries**
Instead of creating thousands of manual routes for things like blog posts, Express allows for **variable URLs**.

*   **Request Parameters (Params):**
    *   **Syntax:** Defined using a colon, e.g., `app.get('/blog/:slug', ...)`.
    *   **Access:** Values are retrieved via **`req.params`**.
    *   *Example:* If the URL is `/blog/intro-to-js`, `req.params.slug` will be `"intro-to-js"`.
*   **Query Parameters:**
    *   **Syntax:** Part of the URL following a question mark, e.g., `?mode=dark&region=in`.
    *   **Access:** Values are retrieved via **`req.query`**.
    *   *Example:* `req.query` would return an object like `{ mode: 'dark', region: 'in' }`.

#### **6. Serving Static Files**
To make files like images or text files accessible to users without writing custom routes for each, use the **`express.static` built-in middleware**:
*   **Command:** `app.use(express.static('public'))`.
*   **Functionality:** This makes every file inside the 'public' folder "publicly" accessible via the URL.
*   **Security Benefit:** It prevents the server from accidentally exposing sensitive **backend source code** (like `main.js`), as only files specifically placed in the designated static folder are served.

#### **7. Key Takeaways for Future Revision**
*   **`req.params`** is for data embedded in the **URL path** (e.g., IDs, Slugs).
*   **`req.query`** is for **optional filters or settings** in the URL (e.g., search terms, themes).
*   **Middleware:** The `app.use()` function is the gateway for using middleware like `express.static`.

--- 
*These notes are based on the Sigma Web Development Course, Tutorial #88.*