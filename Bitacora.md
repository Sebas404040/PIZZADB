# Bitacora de desarrollo | PizzaDB 🍕

En esta documentación se detalla todo el desarrollo del proyecto PizzaDB, incluyendo:

✅ El progreso por secciones del sistema

🧠 Las decisiones técnicas y de diseño tomadas durante el desarrollo

📊 Las métricas y prácticas utilizadas bajo la metodología SCRUM

Este documento busca ofrecer una visión clara, ordenada y comprensible del proceso completo, desde la concepción inicial hasta la entrega final del proyecto.

## Planeación 📋

Durante la etapa de planeación, el equipo se reunió en una sesión inicial con el objetivo de alinear ideas, presentar el contexto general del proyecto y definir una visión compartida. Se realizó una lluvia de ideas entre los integrantes para establecer una ruta preliminar de desarrollo y acordar las primeras decisiones clave.

En la reunión de backlog, el Product Owner presentó los requerimientos del sistema junto con las historias de usuario, clasificadas en dos categorías:

- Requerimientos funcionales

- Requerimientos no funcionales

Se abrió un espacio de discusión para escuchar la perspectiva de cada integrante del equipo y resolver dudas sobre los entregables esperados.

Posteriormente, el SCRUM Master lideró la asignación de tareas, validando que cada desarrollador comprendiera su responsabilidad y asegurándose de identificar posibles bloqueos o dificultades antes de iniciar el sprint.



### Metodologia a implementar:

**Metodologia XP:**

<p align="center"> <img src="./Docs_Images/xp.png" alt="Tablero Kanban utilizado en el proyecto" width="300"> </p>

La razón por la que se eligió la metodología XP fue su enfoque en un desarrollo iterativo e incremental, orientado a entregar valor de forma constante. Esto permite una retroalimentación continua por parte del cliente y facilita los ajustes necesarios en cada iteración del proyecto.

## Maquetacion y diseño 📃

En esta etapa, junto con el Scrum Master y el equipo de desarrollo, se diseñaron las vistas que se planean implementar. Para ello, se dedicó una Daily Scrum a discutir estos aspectos, con el objetivo de alinear ideas y asegurar una mejor experiencia de usuario al momento de traducir el diseño en código.

### 🏠 Vista de inicio

<p align="center"> <img src="./Docs_Images/vistaHome.png" alt="Tablero Kanban utilizado en el proyecto" width="500"> </p>

Se diseñó una interfaz cuya paleta de colores evoca el mundo de las pizzas. Para lograrlo, se utilizaron tonos cálidos y apetitosos: naranja en el encabezado, un fondo amarillo suave en todas las vistas y detalles en rojo para generar contraste y resaltar elementos clave. Además, se incorporó un mensaje de bienvenida para brindar una experiencia más amigable al usuario.




### 🧺 Vista de despensa virtual

<p align="center"> <img src="./Docs_Images/vistaDespensa.png" alt="Tablero Kanban utilizado en el proyecto" width="500"> </p>

En esta sección se diseñó un espacio interactivo compuesto por tarjetas visuales, donde el usuario puede explorar y seleccionar diferentes elementos disponibles en la despensa.

Cada tarjeta presenta información específica sobre un producto, acompañada de una descripción breve que facilita su comprensión y permite una navegación intuitiva por el contenido.

### 🧾 Vista de pedidos

<p align="center"> <img src="./Docs_Images/vistaPedidos.png" alt="Tablero Kanban utilizado en el proyecto" width="500"> </p>

En esta sección se maquetó una interfaz intuitiva compuesta por contenedores (cajas) que permiten al usuario arrastrar y soltar los elementos correspondientes a las distintas entidades necesarias para generar un pedido.

La acción de completar un pedido desencadena una breve retroalimentación visual o textual, que informa al usuario si la operación se realizó correctamente y resume los datos del pedido creado.

Esta funcionalidad busca brindar una experiencia de uso dinámica e interactiva, facilitando la comprensión del flujo de trabajo dentro del sistema.


### 🔗 Vista de Entidad - Relacion

<p align="center"> <img src="./Docs_Images/vistaE-R.png" alt="Tablero Kanban utilizado en el proyecto" width="500"> </p>

En esta sección, el usuario vivirá una experiencia interactiva diseñada para comprender cómo se relacionan las entidades en una base de datos, específicamente en el contexto del sistema de una pizzería.

Manteniendo la paleta de colores y estilo visual coherente con el resto del proyecto, se desarrolló un espacio donde el usuario puede arrastrar y conectar entidades de forma visual, simulando un diagrama entidad-relación.

Una vez establecidas las conexiones, el sistema permite verificar la solución, ofreciendo una retroalimentación explicativa sobre la lógica relacional y el papel de cada entidad dentro del modelo de datos.

Esta actividad refuerza el aprendizaje práctico sobre modelado de bases de datos de forma didáctica y contextualizada.

## Construcción HTML 🧱

La construcción del proyecto se organizó utilizando dos archivos principales en HTML: index.html y content.html.

- index.html funciona como la página de bienvenida. Es la primera vista que el usuario encuentra al ingresar, y cumple el propósito de introducir brevemente el proyecto.

- content.html contiene el desarrollo principal, donde se disponen las actividades interactivas y las explicaciones relacionadas con los fundamentos de bases de datos.

Inicialmente se consideró integrar todas las vistas en un único archivo HTML. Sin embargo, por buenas prácticas de organización y escalabilidad, se optó por separar la estructura en distintos archivos, facilitando así el mantenimiento y la claridad del código.

### index.html

```html
 <!-- ========== CUERPO PRINCIPAL ========== -->
<main class="overflow-x-hidden">

<!-- ======= Sección de Presentación ======= -->
<section id="inicio" class="container mx-auto px-6 py-16 lg:py-24">
<div class="grid lg:grid-cols-2 gap-12 items-center">

<!-- Texto principal -->
<div class="text-center lg:text-left">
<h1 class="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
Aprende Bases de Datos, <br>
<span class="text-red-600">una rebanada a la vez.</span>
</h1>
<p class="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 mb-8">
Una explicación introductoria sobre qué es una base de datos, con un lenguaje accesible.
</p>

<!-- Botón de llamada a la acción -->
<a href="./html/content.html"
class="inline-block bg-red-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
¡Comenzar Aventura!
</a>
</div>

<!-- Ilustración SVG de una pizza -->
<div class="flex items-center justify-center">
<svg width="300" height="300" viewBox="0 0 240 240" class="max-w-full h-auto">
<title>Ilustración de Pizza</title>
<g id="pizza-group">
<circle id="pizza-sauce" cx="120" cy="120" r="90" fill="#E53935"/> <!-- Salsa -->
<circle id="pizza-crust" cx="120" cy="120" r="100" fill="transparent" stroke="#FBC02D" stroke-width="20"/> <!-- Borde -->

<!-- Pepperonis animados -->
<circle class="pepperoni" cx="120" cy="80" r="18" fill="#C62828" style="animation-delay: 1.5s;" />
<circle class="pepperoni" cx="165" cy="110" r="18" fill="#C62828" style="animation-delay: 1.7s;" />
<circle class="pepperoni" cx="145" cy="165" r="18" fill="#C62828" style="animation-delay: 1.9s;" />
<circle class="pepperoni" cx="95" cy="165" r="18" fill="#C62828" style="animation-delay: 2.1s;" />
<circle class="pepperoni" cx="75" cy="110" r="18" fill="#C62828" style="animation-delay: 2.3s;" />
</g>
</svg>
</div>
</div>
</section>// Constante que contiene el API 
const API_URL = "https://fakestoreapi.com/products"
```

 Utiliza TailwindCSS para los estilos y una fuente moderna desde Google Fonts. La interfaz incluye un encabezado con navegación, una sección de bienvenida con una ilustración SVG de pizza, y una sección educativa donde se explican conceptos clave como "Datos", "Tablas" y "Relaciones", cada uno representado visualmente como ingredientes, menús y pedidos, respectivamente. También se incluye un pie de página con los créditos de los desarrolladores. Todo el diseño es responsivo, accesible y pensado para facilitar la comprensión de temas técnicos de forma lúdica y visual. Además, el documento carga estilos personalizados y un script JavaScript (index.js) que puede añadir interactividad adicional.

 ### Content.html 🪪

  La estructura del documento está organizada en secciones clave: un encabezado con navegación (nav), una introducción gráfica (section#hero) y un apartado educativo (section#info) que explica conceptos como datos, tablas y relaciones con analogías visuales. El diseño se basa en Tailwind CSS para estilos responsivos y modernos, y utiliza una fuente personalizada de Google Fonts. Además, se integran recursos visuales como imágenes SVG, íconos y una disposición en grid para mejorar la experiencia visual y pedagógica. El archivo incluye también un footer con créditos, y enlaza un archivo index.js que podría encargarse de comportamientos interactivos adicionales. Esta estructura facilita la comprensión progresiva de conceptos de bases de datos mediante una interfaz clara y atractiva.

## Diseño CSS 🎨

El archivo CSS de PizzaDB se diseñó con el objetivo de proporcionar una experiencia visual atractiva, coherente e interactiva. La estructura comienza con estilos base que definen una tipografía moderna (Inter) y un fondo principal en tono mostaza claro. Se aplican transiciones suaves para animaciones de interacción (.transition-all) y se asignan colores específicos a elementos clave como el encabezado y pie de página, los cuales utilizan un tono rojo quemado para mantener una identidad visual cálida y cercana al tema de las pizzas.

Se implementan animaciones para la aparición de modales (fadeIn) y se integran efectos de drag & drop, permitiendo que los elementos se arrastren con cambios de opacidad, escala y realce visual mediante bordes y fondos en tonalidades rojas. Para manejar errores o retroalimentación negativa, se definió una animación de sacudida (shake) que refuerza visualmente la acción fallida.

Las tarjetas de datos (.data-card) están diseñadas con bordes suaves, interacciones al pasar el mouse y estilos de selección visual para identificar estados como seleccionado, resaltado por relación o inactivo. En cuanto a las relaciones entre entidades, se destacan clases que permiten mostrar conexiones correctas, incorrectas o pendientes, con colores como verde, rojo o gris respectivamente.

El lienzo para el diagrama entidad-relación (#canvas) emplea una cuadrícula ligera como fondo, y las entidades son elementos móviles con sombra y bordes redondeados. Cada entidad cuenta con puntos de conexión (.connector-dot) en sus bordes, que permiten representar relaciones visuales usando líneas SVG que se trazan dinámicamente sobre el contenedor.

Adicionalmente, se incorporaron animaciones SVG específicas para representar la construcción de una pizza, desde la masa (build-pizza-crust), la salsa (fill-sauce) hasta la aparición de los pepperonis (place-pepperoni). Estas animaciones buscan hacer más amena e intuitiva la experiencia del usuario dentro del contexto temático.

Se añadió también un efecto de fade-in al hacer scroll, permitiendo que las secciones aparezcan suavemente cuando ingresan en el viewport. Finalmente, se incluyó un loader con una animación de spinner tipo pizza que se muestra al iniciar la aplicación, contribuyendo a una experiencia visual coherente y dinámica desde el primer momento.

```css
/* ---------- Estilos base ---------- */
body {
    font-family: 'Inter', sans-serif; /* Tipografía principal */
    background-color: #f5c262; /* Fondo general: tono mostaza claro */
}

.transition-all {
    transition: all 0.3s ease-in-out; /* Transición suave para interacciones */
}

#interactive-app {
    background-color: white; /* Contenedor principal en blanco */
}

/* Encabezado y pie de página con fondo rojo quemado */
header,
footer {
    background-color: #cd451d;
}

/* ---------- Animación de entrada para modales ---------- */
.modal-enter {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95); /* Ligeramente más pequeño al inicio */
    }
    to {
        opacity: 1;
        transform: scale(1); /* Escala normal */
    }
}

/* ---------- Estilos Drag & Drop ---------- */
.dragging {
    opacity: 0.5; /* Más transparente mientras se arrastra */
    transform: scale(0.95);
}

.drag-over-highlight {
    border-style: solid !important;
    border-color: #ef4444 !important; /* Rojo */
    background-color: #fee2e2 !important; /* Fondo rojo claro */
}

/* ---------- Animación de sacudida (cuando algo sale mal) ---------- */
.shake {
    animation: shake 0.5s cubic-bezier(.36, .07, .19, .97) both;
}

@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* ---------- Estilo de tarjetas de datos ---------- */
.data-card {
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: grab;
    transition: all 0.2s ease-in-out;
    border: 1px solid #e5e7eb; /* Gris claro */
}

/* ---------- Estados de relación ---------- */
.is-selected {
    cursor: default;
    opacity: 0.6;
    background-color: #d1d5db !important; /* Gris claro cuando ya está seleccionado */
}

.highlight-relation {
    background-color: #a7f3d0 !important; /* Verde suave */
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
}

/* Texto subrayado con estilo para claves foráneas */
.foreign-key-span {
    cursor: pointer;
    text-decoration: underline dotted;
}

/* ---------- Lienzo para el ERD (diagrama entidad-relación) ---------- */
#canvas {
    position: relative;
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px; /* Cuadrícula clara */
}

/* Estilo de cada entidad en el lienzo */
.entity {
    position: absolute;
    width: 220px;
    z-index: 20;
    cursor: move;
    touch-action: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 0.75rem;
    overflow: hidden;
}

/* Puntos de conexión entre entidades */
.connector-dot {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border: 2px solid #ef4444; /* rojo */
    border-radius: 50%;
    cursor: crosshair;
    z-index: 21;
}

.connector-dot:hover {
    background-color: #fecaca; /* Rojo claro */
}

/* Posiciones de los puntos */
.connector-dot.top {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
}
.connector-dot.bottom {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
}
.connector-dot.left {
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
}
.connector-dot.right {
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
}

/* SVG para dibujar las líneas entre relaciones */
#svg-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

/* Estilo de líneas de relación */
.relation-line {
    stroke-width: 3;
    stroke-linecap: round;
}

/* Colores para el estado de la relación */
.line-correct {
    stroke: #16a34a; /* Verde */
}
.line-incorrect {
    stroke: #dc2626; /* Rojo */
}
.line-pending {
    stroke: #6b7280; /* Gris */
}

/* ---------- Animaciones SVG de construcción de pizza ---------- */
@keyframes build-pizza-crust {
    from { stroke-dashoffset: 628; }
    to { stroke-dashoffset: 0; }
}

@keyframes fill-sauce {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes place-pepperoni {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicación de animaciones a elementos del SVG */
#pizza-crust {
    stroke-dasharray: 628;
    stroke-dashoffset: 628;
    animation: build-pizza-crust 1.5s ease-out forwards;
}

#pizza-sauce {
    opacity: 0;
    transform-origin: center;
    animation: fill-sauce 1s 0.8s ease-in-out forwards;
}

.pepperoni {
    opacity: 0;
    animation: place-pepperoni 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* ---------- Animaciones para scroll suave ---------- */
.fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* ---------- Animación de carga (loader tipo spinner) ---------- */
.loader-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(4px);
    transition: opacity 0.3s ease-in-out;
}

.pizza-spinner {
    width: 80px;
    height: 80px;
    border: 8px solid #fde8e8; /* Base clara */
    border-top-color: #ef4444; /* Rojo giratorio */
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

```

