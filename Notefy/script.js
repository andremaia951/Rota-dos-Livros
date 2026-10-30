const titulo = document.getElementById("titulo");
const conteudo = document.getElementById("conteudo");
const tag = document.getElementById("tag");
const adicionar = document.getElementById("adicionar");
const notas = document.getElementById("notas");

adicionar.addEventListener("click", adicionarNota);

function adicionarNota() {
    const textoTitulo = titulo.value.trim();
    const textoConteudo = conteudo.value.trim();
    const textoTag = tag.value.trim();

    if (textoTitulo === "" || textoConteudo === "") {
        alert("Preencha o título e o conteúdo!");
        return;
    }

    const nota = document.createElement("article");
    nota.classList.add("nota");

    const novoTitulo = document.createElement("h2");
    novoTitulo.textContent = textoTitulo;

    const novoConteudo = document.createElement("p");
    novoConteudo.textContent = textoConteudo;

    nota.appendChild(novoTitulo);
    nota.appendChild(novoConteudo);

    if (textoTag !== "") {
        const novaTag = document.createElement("span");
        novaTag.classList.add("tag-nota");
        novaTag.textContent = "#" + textoTag;

        nota.appendChild(novaTag);
    }

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir";
    excluir.classList.add("excluir");

    excluir.addEventListener("click", function() {
        nota.remove();
    });

    nota.appendChild(excluir);
    notas.prepend(nota);

    titulo.value = "";
    conteudo.value = "";
    tag.value = "";

    titulo.focus();
}