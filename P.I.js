//Definindo os Bancos de Dados
var banco = [];

//Criando função com o laço de repetição
function mostrar() {
    var alterar = [];
    for (var i = 0; i < banco.length; i++) {
        alterar += "Gasto " + (i + 1) + ": " + banco[i].gasto + "<br> Custo " + (i + 1) + ": " + banco[i].custo 
         + "    <button onclick=\"deletar(" + i + ")\">Remover</button><br>";
    }
    document.getElementById("resposta").innerHTML = alterar;
    //Função exibir total para automatizar a tela
    exibirTotal();
    
}
    //Criando a Função para Adicionar na Array
    function enviar() {
     //Enviando os conteúdo para o Banco de Dados
        let gasto = document.getElementById('gasto').value;
        let custo = document.getElementById('custo').value;
        console.log(gasto);
        console.log(custo);
        banco.push({ gasto: gasto , custo: parseFloat(custo) });
        mostrar();
        document.getElementById('gasto').value = ''; // Limpa os campos
        document.getElementById('custo').value = '';

        
    }

    //Remover tarefa a array
    function deletar(i) {
        // Usando splice para remover a tarefa
        banco.splice(i, 1);
        mostrar();
    }

    //Função para fazer a entrada de dados mais simples com a tecla 'ENTER'
    function enter(event) {
        const tecla = event.key;

        if (tecla === 'Enter') {
            enviar();
        }
    }
     function sobra () {
        let sal = document.getElementById('sal').value;
            console.log(sal)
          const totalDespesas = banco.reduce((total, gasto) => total + gasto.custo, 0);
            let sobra = "<hr> O total de suas despesas é "+ totalDespesas +" e calculando com sua renda " + sal + " sua receita é " + "R$ " + (sal - totalDespesas);
            document.getElementById('sobra').innerHTML = sobra 
            + "<br><input type=\"number\" placeholder=\"Salário\" id=\"sal\" onkeypress=\"enter(event)\">" + "<br><br> <button onclick=\"sobra()\">Atualizar</button><br>";
     }
     function calcularTotalDespesas() {
        const totalDespesas = banco.reduce((total, gasto) => total + gasto.custo, 0);
        return totalDespesas;
    }
    
    // Exibir o total na tela das despesas na tela
    function exibirTotal() {
        const total = calcularTotalDespesas();
        document.getElementById('total').innerHTML = `Total de despesas: R$ ${total.toFixed(2)}`;
    }
      
