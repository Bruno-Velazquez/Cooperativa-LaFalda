# PROMPT: PROTOTIPO FRONTEND HOME - COOPERATIVA LA FALDA

Proyecto:
Prototipo Frontend de la Página Principal (Home) para la Cooperativa de Agua Potable y Servicios Públicos de La Falda.

Rol del agente:
Diseñador y Desarrollador Frontend Senior enfocado en UX/UI accesible y minimalista.

Objetivo:
Crear una interfaz moderna, limpia y funcional únicamente de la Home (versión prototipo, con datos estáticos o simulados en frontend) para validar la estructura, diseño y navegación con la directiva.

Puntos Críticos de la Home (Jerarquía Visual):
1. Botón / Hero de Oficina Virtual (Prioridad Alta):
   - Llamada a la acción clara para el pago de facturas.
   - Debe simular o redirigir a https://www.cooponlineweb.com.ar/LAFALDA/Login
2. Módulo de Banco de Sangre (Prioridad Alta):
   - Tarjeta o sección destacada explicativa con botón para abrir un modal de "Pre-inscripción / Adhesión".
3. Avisos de Servicio / Cortes Programados:
   - Banner o sección de alertas con estados (Ej: "Corte programado en B° Villa Edelmira - En reparación").
4. Secciones Informativas Secundarias:
   - Resumen de Servicios (Agua Potable, Calidad, Redes).
   - Novedades / Noticias de la Cooperativa.
   - Contacto rápido, números de guardia 24/7, dirección y horarios.
   

Secciones a contemplar en la home
   - seccion de carrusel de presentacion con la informacion mas importante
   - seccion de items como guardia de agua, mesa de entrada y guardia de cloacas
   - seccion de analisis de agua 
   - medios de pago-
   - seccion de costos de servisios
   - seccion de novedades

Comportamiento Interactivo del Prototipo:
- El formulario de pre-inscripción del Banco de Sangre debe abrirse en un Modal visualmente atractivo y validar los campos (Nombre, DNI, Teléfono, Dirección) de forma local.
- Al enviar el formulario, mostrar un feedback visual (toast o mensaje de éxito dentro del DOM) de confirmación.
- Los avisos de servicio y noticias deben consumir un archivo JSON local de prueba (mock data).

Revisa la carpeta desing y segui el diseño cargado crea las secciones que no se hayan espesificado en el diseño 

Stack Tecnológico:
- React
- CSS: Tailwind CSS
- Iconos: Lucide-react

Preferencias de Diseño:
- Estilo minimalista, enfocado en el usuario (paleta de colores: azul institucional `#005596` o similar, tonos celestes, blanco y grises neutros).
- Tipografía clara, de alto contraste (pensada para fácil lectura por adultos mayores).
- Totalmente Responsive (Mobile First).

Preferencias de Código:
- HTML5 semántico.
- Uso estricto de `let` y `const`.
- Sin `alert`, `confirm` ni `prompt` nativos del navegador.
- Sin llamadas a backend/APIs externas por ahora (todo el estado se maneja localmente con React `useState`).
- Código modular y bien estructurado en componentes (ej: `Hero.jsx`, `OficinaVirtualCard.jsx`, `BancoSangreModal.jsx`, `AlertasService.jsx`, `Footer.jsx`).


infomacion: toma toda la informacion de esta url: https://www.cooperativalafalda.com/index.php