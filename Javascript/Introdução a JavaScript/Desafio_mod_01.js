var endereco = {
    rua: "Eurico Gaspar Dutra",
    numero: "67",
    bairro: "Jardim Alvorada",
    cidade: "Luiz Antônio",
    uf: "SP"
};

function texto(endereco){
    string = ("O usuário mora em " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + 
    endereco.rua + " com nº" + endereco.numero);
    return string;
}

texto(endereco);

function pares(x, y){
    for(i = x; i < y; i++){
        if(i % 2 == 0 ){
            console.log(i);
        }
    }
}

pares(32,321);


function temHabilidade(skills){
    var tem = false;
    for(i = 0; i < skills.length; i++){
        if(skills[i] == "Javascript"){
            tem = true;
            return tem;
        }
    }
    return tem;
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);


function experiencia(anos){
    if(anos < 1 && anos >= 0){
        return "Iniciante";
    }else if(anos < 3 && anos >= 1){
        return "intermediário";
    }else if(anos < 6 && anos >= 3){
        return "Avançado";
    }else{
        return "Jedi Master"
    }
}

experiencia(0.5);
experiencia(1.3);
experiencia(3.5);
experiencia(7.9);


var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

function habilidades_do_usuário(usuarios){
    for(usuario of usuarios){
        skills = "";
        for(i = 0; i < usuario.habilidades.length; i++){
            skills += usuario.habilidades[i] + ", ";
        } //Tentar utilizando o "join"
        console.log("O " + usuario.nome + " possui as habilidades: " + skills);
    }
}

habilidades_do_usuário(usuarios);
