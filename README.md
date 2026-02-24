# CrystalGamer - E-commerce Store

Este proyecto es una aplicación desarrollada en React que consiste en una tienda online (e-commerce).

# Tecnologías y herramientas usadas:

- Planificación: Excalidraw → https://excalidraw.com  
- Front-end: React + Vite, CSS modular (SASS), MUI (códigos base adaptados al proyecto)  
- Backend básico: Node.js, json-server  
- Lenguajes: HTML, JavaScript, CSS  
- Herramientas de desarrollo: Git y Node Package Manager (npm)


# Sistemas implementados:

- Ver productos por categorías y subcategorías  
- Buscar productos por palabras clave  
- El carrito:  
  - Añadir/Quitar ítems  
  - Aumentar o disminuir la cantidad de ítems  
  - Cálculo del subtotal y total de la compra  
  - Confirmación de la compra o seguir comprando  
- Formulario para crear cuenta e iniciar sesión  
- Cambio de tema claro/oscuro  
- Navegación con react-router-dom  

# Assets utilizados:  
- Imágenes de cada producto generadas por IA:  
  - Copilot Microsoft  
  - Ketchup → https://ketchup-ai.com/es  
  - Íconos descargados de la página → https://icons8.com/icon/4F6jtrjo4gVC/crystal  
  - Íconos y códigos base de MUI → https://mui.com  

# Control de versiones:  
- Git y GitHub


# Estructura de carpetas:

```
mi-proyecto/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Íconos para favicon y logo
│   ├── components/  # Componentes reutilizables
│   ├── context/     # Contextos: carrito, productos y tema claro/oscuro
│   ├── hooks/       # Custom hooks  
│   ├── pages/       # Vistas principales
│   ├── routes/      # Todas las rutas
│   ├── sass/        # CSS modular
│   ├── utils/       # Funciones auxiliares
│   └── App.js       # Contextos y providers
├── db.json          # Base de datos con json-server
├── package.json
└── README.md
```


# Como usarlo

1. Clonar el repositorio:
```bash
git clone https://github.com/JulioPerone/CrystalGamer-Ecommerce-Portfolio.git
```
3. Intalar dependencias: 
```npm install```
4. Ejecutar en modo desarrollo: 
```npm run dev```
5. Ejecutar también el servidor de la base de datos: 
```npm run server```
6. Abrir en el navegador
```http://localhost:5173/```
