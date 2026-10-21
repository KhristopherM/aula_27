// 1. Dados
const listaDeEstudantes = [
  "Beatriz Oliveira",
  "Carlos Eduardo",
  "Daniela Santos",
  "Gabriel Ferreira",
  "Helena Rodrigues",
  "Lucas Vinícius"
];

// 2. Elementos da interface
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");
const campoNovoNome = document.getElementById("campoNovoNome");

// 3. Funções auxiliares (evitam repetir código)
function mostrarStatus(mensagem, cor) {
  elementoContador.innerText = mensagem;
  elementoContador.style.color = cor;
}

function criarItemLista(nome, posicao) {
  const itemLi = document.createElement("li");
  itemLi.className = "item-nome";

  const spanNome = document.createElement("span");
  spanNome.textContent = nome;

  const spanPosicao = document.createElement("span");
  spanPosicao.className = "posicao-tag";
  spanPosicao.textContent = `#${posicao}`;

  itemLi.appendChild(spanNome);
  itemLi.appendChild(spanPosicao);
  return itemLi;
}

// 4. Exibição normal (laço for)
function exibirListaAutomaticamente() {
  elementoLista.innerHTML = "";

  for (let i = 0; i < listaDeEstudantes.length; i++) {
    elementoLista.appendChild(criarItemLista(listaDeEstudantes[i], i + 1));
  }

  mostrarStatus(`Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`, "#16a34a");
  console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados.`);
}

// 5. Exibição invertida (laço while)
function exibirOrdemInvertida() {
  elementoLista.innerHTML = "";

  let contador = listaDeEstudantes.length - 1;

  while (contador >= 0) {
    elementoLista.appendChild(criarItemLista(listaDeEstudantes[contador], contador + 1));
    contador--;
  }

  mostrarStatus(`Visualizando ${listaDeEstudantes.length} registros em ordem inversa.`, "#2563eb");
  console.log("Lista exibida em ordem inversa.");
}

// 6. Cadastro com validação e checagem de duplicados
function adicionarNovoNome() {
  const nome = campoNovoNome.value.trim();

  if (nome === "") {
    mostrarStatus("Erro: digite um nome antes de adicionar.", "#dc2626");
    console.log("Tentativa de cadastro com campo vazio.");
    campoNovoNome.focus();
    return;
  }

  let jaExiste = false;
  for (let i = 0; i < listaDeEstudantes.length; i++) {
    if (listaDeEstudantes[i].toLowerCase() === nome.toLowerCase()) {
      jaExiste = true;
      break;
    }
  }

  if (jaExiste) {
    mostrarStatus(`Erro: "${nome}" já está cadastrado.`, "#dc2626");
    console.log(`Cadastro bloqueado (duplicado): ${nome}`);
    campoNovoNome.select();
    return;
  }

  listaDeEstudantes.push(nome);
  exibirListaAutomaticamente();
  mostrarStatus(`"${nome}" adicionado com sucesso! Total: ${listaDeEstudantes.length}.`, "#16a34a");
  console.log(`Novo nome cadastrado: ${nome}`);

  campoNovoNome.value = "";
  campoNovoNome.focus();
}

// 7. Limpar
function limparLista() {
  elementoLista.innerHTML = "";
  mostrarStatus("Lista limpa pelo usuário. Nenhum nome na tela.", "#475569");
  console.log("Tela limpa.");
}

// 8. Execução ao abrir a página
exibirListaAutomaticamente();