import { useEffect, useState } from 'react';

// Rutas de página usan el prefijo "#/" (ej: "#/banco-sangre").
// Los anclas internas de la home ("#servicios", "#novedades"…) no lo llevan,
// así que siguen funcionando como scroll dentro de la página principal.
export function getRoute() {
  const { hash } = window.location;
  return hash.startsWith('#/') ? hash.slice(1) : '/';
}

// Vuelve a la home: si estamos en otra página limpia la ruta (App se encarga
// de subir el scroll); si ya estamos en la home, sube suave hasta arriba.
export function navigateHome() {
  if (window.location.hash.startsWith('#/')) {
    window.location.hash = '';
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
