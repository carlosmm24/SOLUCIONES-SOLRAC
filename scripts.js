document.getElementById('formContacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí podrías agregar código para enviar los datos a un servidor, pero por ahora solo mostramos un mensaje.
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    
    // Limpiar el formulario
    document.getElementById('formContacto').reset();
});
