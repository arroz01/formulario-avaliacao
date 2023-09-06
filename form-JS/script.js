//é ativado quando a página é completamente carregada
document.addEventListener("DOMContentLoaded", function () {
//armazena a variavel from com o ID contact-form
    const form = document.getElementById("contact-form");
//recebe o submit
    form.addEventListener("submit", function (e) {
//evita que a pagina seja recarregada
        e.preventDefault();

//guarda o valor de entrada do ID curso
        const curso = document.getElementById("curso").value;
//guarda o valor de entrada do ID disciplina
        const disciplina = document.getElementById("disciplina").value;
//guarda o valor de entrada do ID professor
        const professor = document.getElementById("professor").value;
//guarda o valor de entrada do ID mensagem
        const mensagem = document.getElementById("mensagem").value;
//verifica se algum dos input estão vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Aqui você pode adicionar código para enviar o formulário para o servidor, se desejar.
            alert("Formulário enviado com sucesso!");
//limpa todos os campos ao enviar formulario para que tenha novos dados
            form.reset();
        }
    });
});
//armazena todos os elementos da classe star-icon na variavel stars
var stars = document.querySelectorAll('.star-icon');
//recebera o clique nas estrelas                 
document.addEventListener('click', function(e){
//armazena a lista de classe que foi criada
  var classStar = e.target.classList;
//verifica se a classe ativo esta no elemento que foi criado
  if(!classStar.contains('ativo')){
//começa um loop forEach nos elementos armazenados em stars
    stars.forEach(function(star){
//desativa o elemento depois de clicado
      star.classList.remove('ativo');
    });
//torna a estrela clicada ativa
    classStar.add('ativo');
//registra o valor atribuido
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});
