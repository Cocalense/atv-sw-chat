document.addEventListener('DOMContentLoaded', function(){

    document.getElementById("botaoEnviar").addEventListener("click",function(event){
        event.preventDefault(); enviandoMensagens();});
    document.getElementById("caixaTextoEntrada").addEventListener(function(event){
        if (event.key === "Enter"){
            enviandoMensagens();
        }
    });


}, false);

function stopDefAction(botaoEnviar) {
    botaoEnviar.preventDefault();
}

function enviandoMensagens(){
    var mensagem = document.getElementById("caixaTextoEntrada").value;
    if(mensagem.trim() !== ''){
        document.getElementById("caixaTextoEntrada").value = '';
        var container = document.createElement("div");
        container.classList.add("mensagemRight");
        var direitotext = document.createElement("div");
        direitotext.classList.add("direitotext");
        var from = document.createElement("p");
        var italico = document.createElement("i");
        from.innerHTML = "Você diz: ";
        var mensagemContainer = document.createElement("div");
        mensagemContainer.classList.add("mensagemTexto");
        var msg = document.createElement("p");
        
        msg.innerHTML = mensagem;
        //a partir daqui mostramos p o javascript quem é filho de quem
        container.appendChild(direitotext);
        italico.appendChild(from);
        direitotext.appendChild(italico);
        container.appendChild(mensagemContainer);
        mensagemContainer.appendChild(msg);
        document.getElementById("chatBox").appendChild(container);
        var objDiv = document.getElementById("chatBox")
        objDiv.scrollTop = objDiv.scrollHeight;  //esse cria o scroll bar automatico sem necessidade do usuario ficar puxando p baixo
    }
    else{
        window.alert(" [Error] Impossível enviar mensagem em branco!");
    }
    
}