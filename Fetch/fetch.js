// type basic
const doc = fetch('./style.css');

doc
  .then((r) => r.json())
  .then((body) => {
    const conteudo = document.querySelector('.conteudo');
    const style = document.createElement('style');
    style.innerHTML = body;
    console.log(style);
    conteudo.appendChild(style);
  });

// type cors

const requisition = fetch('https://viacep.com.br/ws/01001000/json/');

requisition
  .then((response) => response.json())
  .then((body) => {
    console.log(body);
  });

//blob()

const image = fetch('./image.jpeg');

image
  .then((response) => response.blob())
  .then((imgBlob) => {
    const bloUrl = URL.createObjectURL(imgBlob);
    console.log(bloUrl);
  });

// clone()

const req = fetch('https://viacep.com.br/ws/01001000/json/');

rqe.then((r) => {
  const r2 = r.clone();
  r.text().then((text) => {
    console.log(text);
  });
  r2.json().then((json) => {
    console.log(json);
  });
});

//headers

const req2 = fetch('https://viacep.com.br/ws/01001000/json/');

req2.then((r) => {
  r.json().then(() => {
    r.headers.forEach(console.log);
  });
});

//status

//200
const statusX = fetch('https://viacep.com.br/ws/01001000/json/');

statusX.then((response) => {
  console.log(response.status);
});

//404
const statusY = fetch('docs.txt');

statusY.then((response) => {
  console.log(response.status);
});

// url & type

const req3 = fetch('https://viacep.com.br/ws/01001000/json/');

req3.then((response) => {
  console.log(response.url);
  console.log(response.type);
});

// fetch( ) API HTTPS:

const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
  method: 'POST',
  body: '{"title": "JavaScript"}',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));
