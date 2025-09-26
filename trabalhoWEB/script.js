// Espera todo o conteúdo do HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA DO MENU HAMBÚRGUER ---
  const menuHamburguer = document.querySelector(".menu-hamburguer");
  const menuNav = document.querySelector(".menu");

  if (menuHamburguer && menuNav) {
    menuHamburguer.addEventListener("click", () => {
      menuNav.classList.toggle("aberto");
    });
  }

  // --- LÓGICA DA PÁGINA DE LOGIN ---
  const formLogin = document.getElementById("form-login");

  // Verifica se o formulário de login existe nesta página
  if (formLogin) {
    const inputUsuario = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");

    formLogin.addEventListener("submit", (event) => {
      // Impede o recarregamento da página
      event.preventDefault();
      console.log("Formulário enviado, recarregamento prevenido!"); // Mensagem de teste

      const usuario = inputUsuario.value;
      const senha = inputSenha.value;

      if (usuario.trim() !== "" && senha.trim() !== "") {
        alert("Login bem-sucedido! Redirecionando...");

        // MUITO IMPORTANTE: Verifique se o nome do arquivo aqui está correto!
        // Se sua página principal agora se chama 'home.html', mantenha assim.
        window.location.href = "incial.html";
      } else {
        alert("Por favor, preencha o usuário e a senha.");
      }
    });
  }
});
