nome1 = window.prompt("Qual o seu nome?");
        if (nome1 != null && nome1 != "") {
            document.write("<h1>Olá " + nome1 + ", seja bem-vindo(a)!</h1>");
        } else {
            document.write("<h1>Olá, visitante!</h1>");
        }
        function validar(){
            if(document.cadastro.Nome.value ==""){
                window.alert("O campo Nome é obrigatório!");
                document.cadastro.Nome.focus();
                return false;
            }
            if(document.cadastro.observacoes.value ==""){
                window.alert("Você deve preencher o campo Observações!");
                document.cadastro.Email.focus();
                return false;
            if(document.cadastro.Email.value ==""){
                window.alert("O campo E-mail é obrigatório!");
                document.cadastro.Email.focus();
                return false;
            }
            if(document.cadastro.Sexo.value ==""){
                window.alert("Você deve selecionar uma opção no campo Sexo!");
                return false;
            }
            if(document.cadastro.EstadoCivil.value ==""){
                window.alert("Você deve selecionar uma opção no campo Estado Civil!");
                return false;
            }
            if(document.cadastro.FaixaEtaria.value ==""){
                window.alert("Você deve selecionar uma opção no campo Faixa Etária!");
                document.cadastro.FaixaEtaria.focus();
                return false;
            }
            if(document.cadastro.Hobby.value ==""){
                window.alert("Você deve selecionar uma opção no campo Hobby!");
                document.cadastro.Hobby.focus();
                return false;
            if(document.cadastro.Bens.value ==""){
                window.alert("Você deve selecionar uma opção no campo Bens!");
                return false;
            }
            else{
                document.cadastro.submit()
                window.alert("Formulário enviado com sucesso!");
            }}
        }}