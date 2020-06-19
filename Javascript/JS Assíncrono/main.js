//AJAX -> Requisita informações do servidor sem precisar atualizar a página
//Requisição assíncrona -> Não acontece no mesmo fluxo do script
//Promessas -> Funções executadas em paralelo ao fluxo do código.

var minhaPromise = () => {
    return new Promise( (resolve, reject) =>{ 
        //Resolve -> Função que vai ser utilizada dentro da promise quando o resultado obtido for de sucesso
        //Reject -> Função utilizada pela promise quando o resultado não for de sucesso
        var xhr = new XMLHttpRequest();//XMLHttpRequest -> Permite acesso ao AJAX      
        xhr.open('GET', 'https://api.github.com/users/diego3g');
        xhr.send(null);

        xhr.onreadystatechange = () =>{//Quando a variável estiver disponível
            if(xhr.readyState === 4) {//4 -> Valor que indica que hou ve um retorno
                if(xhr.status === 200){ //Se o status for de sucesso
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

minhaPromise()
    .then((response) => {  //Se a promise obter sucesso, é executado
        console.log(response);
    })
    .catch((error) =>{  //Se a promise não obter sucesso, é executado
        console.warn(error);
    });

    
axios.get('https://api.github.com/users/diego3g') //Utilizando a biblioteca axios para o mesmo processo
    .then((response) => {
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    });
