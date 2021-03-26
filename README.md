# ml-frontend-test

Proyecto del test de front-end de Mercado Libre

##  Tecnologías
- React (17.0.1)
- Sass
- Express
- Webpack
- Node
- Flexbox y CSS Grid

## Características
- Guía de estilo de javascript de Airbnb
- Server Side Rendering con Express
- Metodología BEM para nombramiento de clases de CSS

# Instalación

## Herramientas
- npm (7.6.3)
- node (v15.12.0)

### Instalar dependencias
```
npm install
```

### Ejecutar en entorno de producción
```
npm run build
npm run start
```

### Ejecutar en entorno de desarrollo
```
npm run start:dev
```
Ingresar a	[localhost:3000](http://localhost:3000)

En el archivo .env se definen las siguientes variables de entorno:

- PORT: Puerto por defecto 3000.
- MELI_API_URL: Url base del api de Mercado Libre.

# Resumen
El proyecto usa **server side rendering** para mejorar la experiencia del usuario al cargar la página, permitiéndole ver contenido pre-cargado desde el servidor. Además el server side rendering ayuda a mejorar el SEO quitando la tarea de renderizar el javascript  a los bots de busqueda.

También hace uso de code splitting separando el código en dos archivos principales, el código de la aplicación y el código de las dependencias. Esto permite que en la primera carga de la página se guarde en cache las dependencias, en las siguientes cargas si existe un cambio en el código principal de la aplicación se solicitara únicamente ese archivo, mejorando la velocidad de carga del sitio.

El proyecto se divide en dos partes:

## Client:
Separa cada pantalla de la aplicación en tres componentes principales encontrados en la carpeta */containers* los cuales agrupan la lógica de carga de datos del api de meli y los componentes que conforman cada vista:
- **App**: Pantalla principal que contiene la caja de busqueda, ubicada en **/**
- **ResultList**: Pantalla con el listado de items del resultado de la busqueda, ubicada en **/items?search=**
- **ProductDetail**: Pantalla del detalle de un producto en especifico, ubicada en  **/items/:id**

## Server:
Contiene la lógica para hacer server side rendering y expone los servicios que funcionan como "proxy" entre el cliente y el api de Mercado Libre.

Los endpoints del servidor son los siguientes:
- **/api/items?q=​:query**: Consulta el listado de productos.
- **/api/items/​ :id**: Consulta el detalle de un producto.
