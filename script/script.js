function fahrenheit(){
    let celsius = document.getElementById('celsius');
    let temp = Number(celsius.value);
    let resultado = temp * 1.8 + 32;
    

    document.getElementById('resultado').value = resultado;
};