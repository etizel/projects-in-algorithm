const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const cleanCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatarCPFS = (cpfs) => {
  return cpfs.map(cleanCPF).map(construirCPF);
};

const replaceCPF = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);
  console.log(cpfsFormatados);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });
};

const resultado = elementsInnerText(cpfsList);

replaceCPF(cpfsList);