
        function enviar() {
          // Obtener los valores de las cajas de texto
          var texto1 = document.getElementById('texto1').value;
          var texto2 = document.getElementById('texto2').value;
      
          // Ejemplo de acción: concatenar y mostrar en la etiqueta
          var resultado = texto1 + ' ' + texto2;
          document.getElementById('resultado').innerText = resultado;
        }
      
        function limpiar() {
          // Limpiar el contenido de las cajas de texto y la etiqueta
          document.getElementById('mensaje1').value = '';
          document.getElementById('mensaje2').value = '';
          document.getElementById('resultado').innerText = '';
        }
  