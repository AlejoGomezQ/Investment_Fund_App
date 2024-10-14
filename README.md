# App para inscribirse a fondos de inversión

## Descripción

Fondos Inversión es una aplicación web diseñada para subscribirse a fondos de inversión utilizando una arquitectura MVC. El proyecto utiliza MongoDB como base de datos Mongoose como ODM, Node.js y Express.js como backend, y Angular junto con TailwindCSS para el frontend. La aplicación es para un único cliente final, donde cuenta con un monto de $500.000 COP para subscribirse a los fondos, retorno de la inversión al cancelar un fondo, ver fondos activos y ver historial de transacciones(subscripciones y cancelaciones).

## Tecnologías utilizadas

 _Backend:_
- Node.js
- Express.js
- MongoDB (ODM: Mongoose)

 _Frontend:_
- Angular
- TailwindCSS

## Instalación

Verificar si se tiene Git, Node.js y MongoDB instalado y seguir los siguientes pasos:

1. Clona el repositorio:

   ````bash
   git clone https://github.com/AlejoGomezQ/Investment_Fund_App.git

   ````

2. Acceder a la carpeta raíz del proyecto

   ````bash
   cd Investment-Fund-App

   ````

3. Instalar las dependencias:

   ````bash
   npm install

   ````

4. Acceder a la carpeta del backend

   ````bash
   cd backend

   ````

5. Instalar las dependencias del backend:

   ````bash
   npm install

   ````
6. Subir datos a la base de datos:

   ````bash
   npm run seeds

   ````

8. Regresar a la carpeta raíz e ingresar a la carpeta del frontend:

   ````bash
   cd ../frontend

   ````

9. Instalar las dependencias del frontend:

   ````bash
   npm install
   ````

## Ejecución en producción

1. Acceder a la carpeta del backend:

   ````bash
   cd ../backend

   ````

2. Ejecutar el backend:

   ````bash
   npm run dev

   ````

3. Abrir un nuevo terminal y acceder a la carpeta del frontend:

   ````bash
   cd frontend

   ````

4. Ejecutar el frontend:

   ````bash
   npm run dev
   ````
