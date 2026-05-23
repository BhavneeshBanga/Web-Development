
# Node.js Modules: CommonJS vs. ECMAScript Modules (ESM)

In Node.js, modules are external code that can be imported and used within your own scripts. There are two primary ways to create and manage these modules: **CommonJS** and **ECMAScript (ES6) Modules**.

## 1. CommonJS (CJS)
CommonJS is the traditional module system used in Node.js. By default, Node.js treats files as CommonJS modules unless specified otherwise in `package.json`.

*   **Mechanism:** Modules are loaded **synchronously**, meaning they use blocking code during the import process.
*   **Automatic Wrapping:** Node.js wraps CommonJS code in a hidden function, which automatically provides variables like `require`, `module`, `exports`, `__filename`, and `__dirname`.

### Syntax & Examples
*   **Importing:** Uses the `require()` syntax.
*   **Exporting:** Uses `module.exports`.

**Example:**
```javascript
// myModule.js (Exporting)
const math = {
    add: (a, b) => a + b
};
module.exports = math;

// main.js (Importing)
const math = require("./myModule.js");
console.log(math.add(5, 5));
```

---

## 2. ECMAScript Modules (ESM)
ESM is the modern, official standard for JavaScript modules. To use this in Node.js, you must set `"type": "module"` in your `package.json` file.

*   **Mechanism:** ESM modules are loaded **asynchronously**, making them more efficient for modern development.
*   **Browser Compatibility:** This syntax is also supported directly in modern web browsers by using `<script type="module">`.

### Types of Exports
1.  **Named Exports:** You can export multiple values by their names. They must be imported using the exact same name inside curly braces `{}`.
2.  **Default Exports:** Each module can have one default export. This can be imported using any name without curly braces.

### Syntax & Examples
*   **Importing:** Uses the `import` keyword.
*   **Exporting:** Uses the `export` keyword.

**Example:**
```javascript
// myModule.js (Exporting)
export const a = 10; // Named export
const obj = { x: 5, y: 7 };
export default obj; // Default export

// main.js (Importing)
import { a } from "./myModule.js"; // Importing named export
import myObj from "./myModule.js"; // Importing default export with a custom name
```

---

## Key Differences Summary

| Feature | CommonJS (CJS) | ECMAScript Modules (ESM) |
| :--- | :--- | :--- |
| **Loading** | Synchronous (Blocking) | Asynchronous (Non-blocking) |
| **Syntax** | `require()` / `module.exports` | `import` / `export` |
| **Default in Node** | Yes (unless "type": "module") | No (requires "type": "module") |
| **Special Variables** | Has `__dirname`, `__filename` | Not available by default |
| **Standard** | Older, Node-specific legacy | Modern, JS official standard |