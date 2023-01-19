const links = document.querySelectorAll('a');

function handlePopState(event) {
  event.preventDefault();
  fetchUrl(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchUrl(url) {
  document.querySelector('.content').innerHTML = 'load..';
  const selectFetch = await fetch(url);
  const selectText = await selectFetch.text();
  activeText(selectText);
}

function activeText(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchUrl(window.location.href);
});

links.forEach((item) => {
  item.addEventListener('click', handlePopState);
});
