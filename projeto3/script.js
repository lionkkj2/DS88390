// quando o documento HTML for completamente carregado, executa a função anônima
document.addEventListener('DOMContentLoaded', function(){

    // carrega os itens do estoque quando a pagina é carregada
    loadItems();

    //Adiciona um ouvinte de evento para o formulario de adicionar item
    // quando o formulario for enviado, executa a função para adicionar o item
    document.getElementById('add-form').addEventListener('submit', function(event){

        // previne o comportamento padrão do formulario (recarregar a pagina)
        event.preventDefault();

        // chama a função para adicionar um item ao estoque
        addItem();
    });
});
// função para carregar os itens do estoque do servidor
function loadItems() {

    // faz uma requisição GET ao servidor para obter a lista de itens
    fetch('server.php?action=get_items')

        // converte a resposta recebida em formato JSON
        .then(response => response.json())

        // Executa esta função quando os dados sao carregados com sucesso
        .then(data =>{

            // obtem o elemento HTML que contem a lista de itens
            const itemList = document.getElementById('item-list');

            // limpa qualquer conteudo anterior na lista de itens
            itemList.innerHTML = '';

            // Itera sobre cada item recebido do servidor
            data.forEach(item =>{

                //cria um novo elemento de lista (<li) para cada item
                const li = document.createElement('li')
                //define o conteudo de texto do item com o nome, quantidade e preço
                li.textContent = '$(item.nome} - Quantidade: $(item.quantidade} - preço: R$ $(item.preço}';
                itemList.appendChild(li);



            });
        });

}

function addItem(){
    const nome = document.getElementById('nome').value;

    const quantidade = document.getElementById('quantidade').value;

    const preco = document.getElementById('preco').value;

    fetch('server.php?action=add_item',{

        method: 'post' ,

        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({nome , quantidade, preco}),
    })

    .then(response => response.json())

    .then(data => {

        if(data.sucess) {
            loadItems();

            document.getElementById('add-form').onreset();
        }
    });
}