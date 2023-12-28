<a name="readme-top"></a>

<img src="../media/images/rocketseat-logo.png?raw=true" width="256">

# ToDo List

<img src="../media/images/homepage.png?raw=true">

This application aims to store your tasks and assist you in your productivity.

This is a project developed in React using the Vite.js builder.

## Built with

- React
- TypeScript
- Vite.js

## Running

```
git clone https://github.com/glmchalita/lab-todo-list
npm install
npm run dev
```

In this way, the application will be running locally on the default port 5173 (http://localhost:5173).

Note: If you want to run the application on a different port, use the following command.

```
npm run dev -- --port 8000
```

Alternatively, if you prefer, configure the vite.config file for the desired port.

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
  },
})
```

## Roadmap

- Filtering tasks by alphabetical order or date.
- Sorting completed tasks.

## Conclusão

Project designed by [Rocketseat](https://github.com/rocketseat-education), the purpose of the project was to learn, in practice, the most commonly used concepts of React.

<p align="right">(<a href="#readme-top">back to top</a>)</p>