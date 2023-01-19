# A API de histórico do JavaScript, também conhecida como History API, é uma API que permite manipular o histórico do navegador e alterar a URL exibida sem recarregar a página. Isso é útil para criar aplicativos web de uma página (SPA, Single-Page Application) que mudam dinamicamente o conteúdo sem recarregar a página inteira.

Algumas das principais funcionalidades da History API incluem:

- pushState: Adiciona uma nova entrada ao histórico do navegador e muda a URL exibida, sem recarregar a página.
- replaceState: Substitui a entrada atual no histórico do navegador e muda a URL exibida, sem recarregar a página.
- back/forward: Navega pelo histórico do navegador, sem recarregar a página.
- popstate event: Dispara um evento quando o usuário clica no botão Voltar ou Avançar do navegador.

Alguns exemplos reais de como a History API pode ser usada:

1. Criando uma SPA (Single-Page Application) que muda dinamicamente o conteúdo sem recarregar a página.

```

window.addEventListener('popstate', e => {
  let page = e.state.page;
  loadPage(page);
});

function loadPage(page) {
  history.pushState({ page }, '', `/${page}`);
  fetch(`/${page}`)
    .then(response => response.text())
    .then(content => {
      document.querySelector('#content').innerHTML = content;
    });
}

```

1. Criando uma barra de navegação que muda dinamicamente a URL exibida sem recarregar a página.

```

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    let page = link.getAttribute('href');
    loadPage(page);
  });
});

```
