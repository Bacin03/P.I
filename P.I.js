
//Criando os Bancos de Dados
var gasto_db = [];
var custo_db = [];

//Criando função com o laço de repetição
function mostrar() {
    var alterar = [];
    for (var i = 0; i < gasto_db.length; i++) {
        alterar += "Gasto " + (i + 1) + ": " + gasto_db[i].gasto + " <button onclick=\"deletar(" + i + ")\">Remover</button><br>";
    }
    document.getElementById("resposta").innerHTML = alterar;
}
   //Enviando os conteúdo para o Banco de Dados
    function enviar() {
        var gasto = document.getElementById('gasto').value;
        var custo = document.getElementById('custo').value;
        gasto_db.push({ gasto: gasto });
        mostrar();
    }

    //Função para Deletar
    function deletar(i) {
        gasto_db.splice(i, 1);
        mostrar();
    }




