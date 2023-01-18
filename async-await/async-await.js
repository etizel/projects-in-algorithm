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
