function encriptar() {
    const texto = document.getElementById('inputText').value;
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = textoEncriptado;
}

function desencriptar() {
    const texto = document.getElementById('inputText').value;
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = textoDesencriptado;
}

function copiar() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');

    // Mostrar mensaje de confirmación
    const message = document.getElementById('message');
    message.textContent = '¡Texto copiado al portapapeles!';
    
    // Ocultar mensaje después de 2 segundos
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}
