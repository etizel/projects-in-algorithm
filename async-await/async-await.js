async function pushData() {
  const dataResponse = await fetch('./data.json');
  const dataJson = await dataResponse.json();

  console.log((document.body.innerText = dataJson));
}
pushData();

async function pushData1() {
  const responseData = await fetch('./clients.json');
  const dataJsonX = await responseData.text();
  document.body.innerText = dataJsonX;
}
pushData1();
//linha teste
async function pushData2() {
  try {
    const dataResponse = await fetch('./datta.json');
    const dataJson = await dataResponse.json();
    document.body.innerText = dataJson;
  } catch (error) {
    console.log(error);
  }
}

pushData2();

async function startAsync() {
  const dataResponse = fetch('./data.json');
  const clientsResponse = fetch('./clients.json');

  const dataJSON = await (await dataResponse).text();
  const clientsJSON = await (await clientsResponse).text();

  console.log(`${dataJSON} ${clientsJSON}`);
}
startAsync();

// lendo um arquivo

async function readFile() {
  let file = await fs.promises.readFile('./clients.json');
  console.log(file.toString());
}

// Escrevendo um arquivo

async function writeFile() {
  await fs.promises.writeFile('./clients.json', 'Hello, world!');
  console.log('File written!');
}

// Aguardando um intervalo de tempo antes de continuar a execução:

async function delay() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Delay complete!');
}
