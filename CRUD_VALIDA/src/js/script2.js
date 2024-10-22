document.querySelector('form').addEventListener('submit', function(event) {

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (nome === '' || telefone === '' || email === '' || senha === ''){
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else {
        FormData.reset();
    }
           

});