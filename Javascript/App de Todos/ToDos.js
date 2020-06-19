var listELement = document.querySelector('#app ul');
var inputELement = document.querySelector('#app input');
var buttonELement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || []; //Busca a lista no armazenamento interno e o converte em objeto
// || -> Se não conseguir retornar o primeiro valor, retorna o segundo
function renderTodos(){ //Cria a lista no html
    listELement.innerHTML = ''; //Remove todo o conteúdo do listElement
    for(todo of todos){
        var todoElement = document.createElement('li'); 
        var todoText = document.createTextNode(todo);  
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href',"#"); //# -> nenhum efeito

        var pos = todos.indexOf(todo); //Retorna o index do argumento na lista que o método foi aplicado
        linkElement.setAttribute('onclick', 'excluir(' + pos +')'); //Executa a função excluir com o argumento pos quando o elemento for clicado

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listELement.appendChild(todoElement);
    }
}

renderTodos();

function newTodo(){
    var todoText = inputELement.value;
    todos.push(todoText); //Adciona o texto à lista
    inputELement.value = ''; //Limpa o input
    storage();
    renderTodos();
}

buttonELement.onclick = newTodo;

function excluir(pos){
    todos.splice(pos, 1); //Remove x(segundo argumento) vezes um número da lista, a partir do primeiro argumento
    renderTodos(); 
    storage();
}

function storage(){
    localStorage.setItem('lista_todos', JSON.stringify(todos)); //Grava todos(um objeto transformada em uma string do tipo JSON) como lista_todos no armazenamento interno
}