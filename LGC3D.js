const contato=document.querySelector(".contato-container");

window.addEventListener("scroll", () =>{
    const posicao = contato.getBoundingClientRect().top;
    const tela = window.innerHeight;

    if (posicao < tela - 100){
        contato.classList.add("show");
    }
})

const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensagem = form.querySelector('textarea').value;

    if (nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    emailjs.send("service_1ogzp13", "template_624yhfr", {
        nome: nome,
        email: email,
        mensagem: mensagem
    })
    .then(function() {
        alert("Mensagem enviada com sucesso!");
        form.reset();
    }, function(error) {
        alert("Erro ao enviar. Tente novamente.");
        console.log(error);
    });
});

document.addEventListener("DOMContentLoaded", () => {

const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagem-modal");
const imagens = document.querySelectorAll(".galeria img");
const fechar = document.getElementById("fechar");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

fechar.onclick = () => {
    modal.style.display = "none";
};

});