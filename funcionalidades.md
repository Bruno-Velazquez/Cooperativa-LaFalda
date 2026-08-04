# CLAUDE.md

Proyecto:
Sitio Web Institucional y Plataforma de Servicios - Cooperativa de Agua Potable y Servicios Públicos de La Falda.

Rol del agente:
Desarrollador Web Senior (12 años de experiencia) especialista en UX/UI para servicios públicos y accesibilidad web.

Objetivo:
Rediseñar el sitio web de la Cooperativa de La Falda (tomando la información de https://www.cooperativalafalda.com/index.php) con un diseño minimalista, moderno, limpio, accesible y fácil de navegar. El sitio debe priorizar dos ejes fundamentales:
1. Acceso directo y destacado a la Oficina Virtual para pago de facturas (https://www.cooponlineweb.com.ar/LAFALDA/Login).
2. Registro y gestión digital de adherentes/donantes para el Banco de Sangre.

Funcionalidades de la aplicación:

1. Zona Pública (Sin necesidad de estar autenticado):
   - Home Minimalista:
     * Botón / Hero destacado de alto impacto visual para la "Oficina Virtual" (redirección o integración clara a CoopOnline).
     * Sección destacada para "Banco de Sangre" con llamada a la acción clara para inscripción.
     * Módulo de "Avisos de Servicio / Cortes Programados" (alertas activas).
     * Resumen de servicios (Agua Potable, Obras, Calidad, etc.).
     * Sección de Noticias / Novedades institucionales.
     * Información de contacto, canales de guardia 24/7, horarios de atención y mapa.
   - Módulo Banco de Sangre (Público):
     * Formulario interactivo y claro de pre-inscripción / solicitud de adhesión para el usuario o su grupo familiar.
     * Requisitos para donantes y preguntas frecuentes.
   - Sección Institucional y Guía de Trámites:
     * Información institucional, requisitos para conexiones nuevas, cambio de titularidad y cuadro tarifario.

2. Autenticación y Perfiles (Supabase):
   - Login y registro para usuarios/asociados y administradores.
   - Rol "asociado": Acceso a su panel para ver el estado de su solicitud al Banco de Sangre y solicitar turnos o trámites.
   - Rol "admin": Asignado manualmente en base de datos para personal de la cooperativa.

3. Panel de Administración Privado (para personal de la Cooperativa):
   - Gestión de Solicitudes del Banco de Sangre (Listar, aprobar, rechazar, exportar inscritos).
   - CRUD de Avisos y Novedades (Crear, editar, publicar y dar de baja avisos de corte de agua o comunicados urgentes).
   - CRUD de Guía de Trámites y Preguntas Frecuentes.
   - Centro de Mensajes / Consultas recibidas desde el formulario de contacto.

General y Seguridad:
- Protección de rutas según el rol (asociado / admin).
- Validación estricta de formularios (DNI, N° de Cuenta/Socio, emails, teléfonos).
- Mensajes de confirmación y feedback visual accesible.

Stack Tecnológico:
- HTML5
- CSS3 (con Tailwind CSS)
- JavaScript / TypeScript
- React
- Backend y Base de Datos: Supabase

Preferencias Generales:
- Idioma: Todos los textos visibles en la web deben estar en español (Argentina).
- Tono: Formal, claro, empático e institucional.

Preferencias de Diseño y UX:
- Estilo: Minimalista, limpio, con paleta de colores inspirada en el agua y servicios públicos (azules, blancos, grises claros y tonos de acento legibles).
- Jerarquía visual clara: La Oficina Virtual y el Banco de Sangre deben ser los elementos más fáciles de encontrar en menos de 3 segundos.
- Accesibilidad (WCAG): Alto contraste, tipografías legibles y adaptado para adultos mayores.

Preferencias de Estilos y Maquetación:
- Responsive Design (Mobile-First obligatorio).
- Medidas en `rem` utilizando `font-size` base de `10px` (`1rem = 10px`).
- Uso de Flexbox y CSS Grid Layout.
- Componentes UI modernos (tarjetas limpias, sombras suaves, bordes redondeados sutiles).

Preferencias de Código:
- HTML semántico.
- Uso exclusivo de `let` o `const` (nunca `var`).
- Prohibido el uso de `alert`, `confirm` o `prompt` nativos del navegador. Todo el feedback debe ser modal o notificación flotante (toast) maquetada con el estilo del sitio.
- Manejo correcto de eventos (prevenir siempre el `preventDefault` en formularios/links según corresponda).
- Código modular, limpio, fácil de entender y mantener.
- Si el agente tiene dudas sobre la estructura de la información original, debe priorizar la simplificación de los textos existentes en la web actual.

Estructura de Archivos:
- /design (bocetos o HTML de referencia si existen)
- /src (componentes, páginas, contexto de Supabase, hooks, assets)
- CLAUDE.md