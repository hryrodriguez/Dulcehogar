# Dulce Hogar — blog de recetas y repostería

Este proyecto está preparado para publicarse en GitHub Pages y conserva la línea visual del archivo de referencia: colores pastel, bordes redondeados, tipografías Quicksand y Playfair Display y navegación por secciones.

## Archivos
- `index.html`: estructura y contenido del blog.
- `css/style.css`: diseño adaptable a móviles y computadoras.
- `js/script.js`: navegación, buscador, filtros y ventanas con las recetas.
- `img/`: carpeta reservada para tus propias fotografías.

## Cómo publicarlo en tu repositorio
1. Descarga y descomprime `dulce-hogar-github.zip`.
2. Abre tu repositorio de GitHub.
3. Sube `index.html` y las carpetas `css`, `js` e `img` a la raíz del repositorio (no subas solamente el ZIP).
4. Si ya existe un `index.html`, guarda una copia antes de reemplazarlo.
5. En GitHub entra a **Settings → Pages** y comprueba que Pages publique desde la rama principal (`main`) y la carpeta raíz (`/root`).
6. Espera a que termine la publicación y abre la dirección de GitHub Pages de tu repositorio.

## Cómo personalizarlo
- Cambia el texto de presentación en `index.html`.
- Para agregar o editar recetas, abre `js/script.js` y modifica el arreglo `recipes`. Cada receta tiene nombre, categoría, emoji, tiempo, descripción, ingredientes y pasos.
- Puedes reemplazar los emojis por fotografías propias. Para ello, agrega imágenes dentro de `img/` y cambia el bloque `.recipe-art` en `recipeCard()` en `js/script.js` para mostrar una etiqueta `<img>`.
- Añade tus redes sociales o correo en la sección **Sobre mí** de `index.html`.

Las recetas incluidas son ejemplos iniciales; revisa y prueba las cantidades y tiempos en tu cocina antes de publicarlas como recetas propias.
