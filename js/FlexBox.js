 document.addEventListener('DOMContentLoaded', () => {
      const boton = document.getElementById('btnMenu');
      const enlaces = document.getElementById('enlaces');

      boton.addEventListener('click', () => {
        enlaces.classList.toggle('mostrar');
      });
    });
