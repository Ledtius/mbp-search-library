# 📖 Book Search - MVP (React.js)

Este proyecto es un buscador de libros que consume la API de Google Books.

## 🧠 Tecnologías y conceptos aplicados

- **React Router** (`BrowserRouter`, `Routes`, `Link`, `Outlet`)
- **Context API** (`useContext`)
- **Custom Hooks** (`useBooks`)
- **Variables de entorno** (`.env`)
- **Consumo de APIs** con `fetch` y `async/await`
- **Manejo de errores** con `try/catch` y `throw new Error()`
- **Modularización y delegación de responsabilidades** (`/hooks`, `/pages`, `/services`, `files.js`, etc.)
- **Refactorización del código**
- **Ciclo de vida de los componentes**: montaje, actualización (re-render), y desmontaje

## 🎯 Objetivo del proyecto

Este MVP me permitió practicar y consolidar los nuevos conceptos y tecnologías aprendidas en React. Gracias a ello tengo la oportunidad de aplicarlo en la versión definitiva del proyecto **Book Search**.

## 🛠️ Instalación y ejecución

#### 1. Clona el repositorio:

```bash
git clone https://github.com/tuUsuario/book-search-mvp.git

cd book-search-mvp
```

#### 2. Instala las dependencias:

```bash
npm install
```

#### 3. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y añade tu clave de la API de Google Books:

```bash
VITE_GOOGLE_BOOKS_API_KEY=tu_clave_aquí
```
Puedes obtener una clave gratuita desde: https://console.cloud.google.com/

#### 4. Ejecuta el proyecto

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:5173 (por defecto con Vite).