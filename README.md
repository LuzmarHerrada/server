# React + Vite

1- Abre una terminal
2- Clona el repositorio con git clone 'https://github.com/LuzmarHerrada/server.git'
3- Abre la carpeta 'server' con vscode y abre su terminal
4- Ingresa 'npm install' para que carguen las dependencias
5- Ingresa 'npm run dev' y vas a levantar el proyecto en 'localhost:3000/api/users'

6- Si quieres comprobar el crud del backend, ve a la extension thunder client en vscode
7 Infgresa un new request y agregale la ruta 'localhost:3000/api/users' 

Ahi ya podrás hacer las peticiones PUT, GET, POST, DELETE

GET: 'http://localhost:3000/api/users', para tener todos los users
GET: 'http://localhost:3000/api/users/:id' para tener un user en especifico
DELETE: 'http://localhost:3000/api/users/:id'
PUT: 'http://localhost:3000/api/users/:id' y en el body-json agregas lo que quieres actualizar
POST: http://localhost:3000/api/users' y en el body-json agregascon un json el nuevo usuario