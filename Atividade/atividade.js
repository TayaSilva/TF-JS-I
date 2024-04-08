/*Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar. O programa deve analisar 3 dados: nome do usuário, seu nível de acesso (visitante, funcionário, gerente ou administrador) e o horário de acesso como entrada. O programa deve:
Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
Conceder acesso ao usuário se todas as condições forem atendidas.
Negar acesso ao usuário se alguma das condições não for atendida.
Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro o porquê.*/



let nome = "Léa"
let horario = "29"
let Acesso = "visitante"

const funcionamento = (horario < 8 || horario > 22)
const permissãoAcesso = (Acesso === "visitante" && horario < 9 || horario> 18)
const nivelAcesso = ("visitante")

if (horario < 0 ||  horario > 24) {
    console.log("Numero de horario invalido, faça novamente")

}
else{
     if(funcionamento){
        console.log("Horario fora de funcionamento do prédio, volte entre 8h e 22h")
    }



    else if (permissãoAcesso){
        console.log("Lamento, mas o horario de visita é apenas das 9h as 22h")
    }

    else if (Acesso != nivelAcesso ){
        console.log("Nivel de acesso negado")
    }



    else{
        console.log("Seja bem vindo(a) " + nome + "," +" volte sempre")
    }
}


