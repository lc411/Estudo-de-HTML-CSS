const botaoTema = document.getElementById("btn-tema");
const elementoRaiz = document.documentElement;
const chaveTema = "testeOP_tema";

function atualizarBotaoTema(tema) {
    const temaEscuroAtivo = tema === "dark";
    botaoTema.setAttribute("aria-pressed", String(temaEscuroAtivo));
    botaoTema.innerHTML = temaEscuroAtivo
        ? '<span aria-hidden="true">☀️</span><span>Modo claro</span>'
        : '<span aria-hidden="true">🌙</span><span>Modo escuro</span>';
}

const temaSalvo = localStorage.getItem(chaveTema) || "light";
elementoRaiz.setAttribute("data-theme", temaSalvo);
atualizarBotaoTema(temaSalvo);

botaoTema.addEventListener("click", () => {
    const novoTema = elementoRaiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
    elementoRaiz.setAttribute("data-theme", novoTema);
    localStorage.setItem(chaveTema, novoTema);
    atualizarBotaoTema(novoTema);
});
