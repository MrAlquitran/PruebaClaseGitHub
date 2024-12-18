const img = document.querySelector("img");
img.onmousedown = function(event) {
    // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
    img.style.position = 'absolute';
    img.style.zIndex = 1000;

    // centrar la pelota en las coordenadas (pageX, pageY)
    function moveAt(pageX, pageY) {
      img.style.left = pageX - img.offsetWidth / 2 + 'px';
      img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }
  
    // mover nuestra pelota posicionada absolutamente bajo el puntero
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (2) mover la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) soltar la pelota, quitar cualquier manejador de eventos innecesario
    img.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      img.onmouseup = null;
    };
    img.    ondragstart = function() {
        return false;
      };
  
  };