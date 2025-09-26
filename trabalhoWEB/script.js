document.addEventListener("DOMContentLoaded", () => {
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const menuNav = document.querySelector(".menu");

  if (menuHamburguer && menuNav) {
    menuHamburguer.addEventListener("click", () => {
      menuNav.classList.toggle("aberto");
    });
  }

  const formLogin = document.getElementById("form-login");

  if (formLogin) {
    const inputUsuario = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");

    formLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Formulário enviado, recarregamento prevenido!");

      const usuario = inputUsuario.value;
      const senha = inputSenha.value;

      if (usuario.trim() !== "" && senha.trim() !== "") {
        alert("Login bem-sucedido! Redirecionando...");

        window.location.href = "inicial.html";
      } else {
        alert("Por favor, preencha o usuário e a senha.");
      }
    });
  }
});
