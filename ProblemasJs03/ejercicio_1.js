const positionDisplay = document.getElementById('position');

document.addEventListener('mousemove', (event) => {
    const xInWindow = event.clientX;
    const yInWindow = event.clientY;

    const xInPage = event.pageX;
    const yInPage = event.pageY;

    positionDisplay.textContent = `Ratón: \n (Ventana: ${xInWindow}, ${yInWindow}) (Página: ${xInPage}, ${yInPage})`;
});


document.addEventListener('keydown', function(event) {
    const infoDiv = document.getElementById('info');
    
    const key = event.key;  

    infoDiv.textContent = `Caracter [${key}]`;
});
