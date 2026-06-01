## How to setup Tailwind CSS

Step 1 : Run the following commands

```
npm init -y
```


Step 2 : Install Tailwind CSS

```
npm install tailwindcss @tailwindcss/cli
```


step 3 : Create Input CSS File

```
src/input.css
```
inside it : 
```
@import "tailwindcss";
```

Step 4 : Build Tailwind CSS
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```


Step 5 : Link generated CSS
In your HTML 
```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="src/output.css">
</head>
<body>

    <h1 class="text-4xl font-bold text-blue-500">
        Hello Tailwind
    </h1>

</body>
</html>
```