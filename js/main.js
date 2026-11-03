$(function() {
    $("#botao").click(inserirTarefa);
});

function inserirTarefa() {
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campoOBS = $(".campoOBS").val();

    var linha = funLinha(campoTitulo, campoOBS);
    linha.find(".botaoDeletar").click(deletarLinha);
    tabela.append(linha);
}

function deletarLinha() {
    event.preventDefault(); //tira o padrão
    $(this).parent().parent().remove();
}

function funLinha(campoTitulo, campoOBS) { // função com parâmetro
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaOBS = $("<td>").text(campoOBS);
    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa); //anexa mais codigo
    linha.append(colunaOBS);
    linha.append(colunaDelete);
    return linha;
}