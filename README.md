# CrystalGamer - E-commerce Store

Este proyecto es una aplicación desarrollada en React que consiste en una tienda online (e-commerce).

## **<ins>Tecnologías y herramientas usadas:</ins>** 

- Planificación: Excalidraw → https://excalidraw.com  
- Front-end: React + Vite, CSS modular (SASS), MUI (códigos base adaptados al proyecto)  
- Backend básico: Node.js, json-server  
- Lenguajes: HTML, JavaScript, CSS  
- Herramientas de desarrollo: Git y Node Package Manager (npm)


## **<ins>Sistemas implementados:</ins>**

- Ver productos por categorías y subcategorías  
- Buscar productos por palabras clave:
  - Puede ser por el nombre del producto
  - Palabras de la descripcion
  - Las almacenadas en la base de datos, ver campo (tags)
- El carrito:  
  - Añadir/Quitar ítems  
  - Aumentar o disminuir la cantidad de ítems  
  - Cálculo del subtotal y total de la compra  
  - Confirmación de la compra o seguir comprando  
- Formulario para crear cuenta e iniciar sesión  
- Cambio de tema claro/oscuro  
- Navegación con react-router-dom  

## **<ins>Assets utilizados:</ins>**  
- Imágenes de cada producto generadas por IA:  
  - Copilot Microsoft  
  - Ketchup → https://ketchup-ai.com/es  
  - Íconos descargados de la página → https://icons8.com/icon/4F6jtrjo4gVC/crystal  
  - Íconos y códigos base de MUI → https://mui.com  

## **<ins>Control de versiones:</ins>**  
- Git y GitHub


## **<ins>Estructura de carpetas:</ins>**

```
mi-proyecto/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Íconos para favicon y logo
│   ├── components/  # Componentes reutilizables
│   ├── context/     # Contextos: carrito, productos y tema claro/oscuro
│   ├── hooks/       # Custom hooks  
│   ├── pages/       # Vistas
│   ├── routes/      # Todas las rutas
│   ├── sass/        # CSS modular
│   ├── utils/       # Funciones auxiliares
│   └── App.js       # Contextos y providers
├── db.json          # Base de datos con json-server
├── package.json
└── README.md
```


## **<ins>Cómo usarlo:<ins>**

1. Clonar el repositorio:  
```bash
git clone https://github.com/JulioPerone/CrystalGamer-Ecommerce-Portfolio.git
```
2. Entrar a la carpeta del proyecto
```bash
cd CrystalGamer-Ecommerce-Portfolio
```
3. Intalar dependencias: 
```bash
npm install
```
4. Ejecutar en modo desarrollo con Vite: 
```bash
npm run dev
```
5. Ejecutar también el servidor de la base de datos con json-server: 
```bash
npm run server
```
6. Abrir en el navegador:
```bash
http://localhost:5173/
```


## **<ins>Licencia:<ins>**

Este proyecto fue creado con fines de **portfolio personal**, no está permitido su uso comercial.  
Puedes utilizarlo para estudiarlo y compartirlo. 

**Copyright © Julio Perone — Todos los derechos reservados**
