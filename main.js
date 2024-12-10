const form = document.getElementById('numeros');

form.addEventListener('submit', function(e){
    e.preventDefault();
    verificar();
});

function verificar(){
    let numA = document.getElementById('numA');
    let num1 = Number(numA.value);
    let numB = document.getElementById('numB');
    let num2 = Number(numB.value);
    let resp = document.getElementById('resp');

    resp.innerHTML = '';
    resp.classList.remove('success-message', 'invalid-message');  

    if (isNaN(num1) || isNaN(num2)) {
        resp.innerHTML = `Por favor, insira valores numéricos válidos.`;
        resp.classList.add('invalid-message'); 
    } else if (num1 > num2) {
        resp.innerHTML = `O valor é INVÁLIDO`;
        resp.classList.add('invalid-message');  
    } else {
        resp.innerHTML = `O valor é Válido`;
        resp.classList.add('success-message');  
    }
}
