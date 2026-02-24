CrystalGamer - E-commerce Store

Este proyecto es una aplicacion desarrollada en React que consiste en una tienda online (e-commerce).

## Tecnologias y herramientas usadas:


**Planificacion:** Excalidraw: https://excalidraw.com
**Front-end:** React + Vite, CSS Modular (SASS), MUI (códigos base adaptados al proyecto)
**Backend básico:** Node.js, json-server
**Lenguajes:** HTML, JavaScript, CSS
**Herramientas de desarrollo:** Git y Node Package Manager (npm).
**Sistemas implementados:**
    - Ver productos por categorias y subcategorias.
    - Buscar productos por palabras clave.
    - El Carrito:
        - Añadir/Quitar items
        - Aumentar o disminuir la cantidad de items.
        - Calculo del subtotal y total de la combra.
        - Confirmacion de la compra o seguir comprando.
    - Formulario de crear cuenta e iniciar sesión.
    - Cambio de tema claro/oscuro
    - Navegacion con react-router-dom
**Assets utilizados:** 
    - Imagen de cada producto generadas por IA:
        - Copilot Microsoft
        - Ketchup: https://ketchup-ai.com/es
    - Iconos descargados de la pagina: https://icons8.com/icon/4F6jtrjo4gVC/crystal
    - iconos y codigos base de MUI. https://mui.com
**Control de versiones:** Git y GitHub


## Estructura de carpetas:

mi-proyecto/
├── public/          # Archivos estáticos
├── src/
|   ├── assets/      # Iconos para favicon y Logo
│   ├── components/  # Componentes reutilizables
│   ├── context/     # Contexto: carrito, productos y tema claro/oscuro
|   ├── hooks/       # Custom hooks  
│   ├── pages/       # Vistas principales
│   ├── routes/      # Todas las rutas
|   ├── sass/        # CSS modular
|   ├── utils        # Funciones auxiliares
│   └── App.js       # Para contextos y providers.
|   └──db.json       # Base de datos con json-server
├── package.json
└── README.md


## Como usarlo
1. Clonar el repositorio:

2. Intalar dependencias: 
npm install
3. Ejecutar en modo desarrollo: 
npm run dev
4. Ejecutar también el servidor de la base de datos: 
npm run server
5. Abrir en el navegador http://localhost:5173/