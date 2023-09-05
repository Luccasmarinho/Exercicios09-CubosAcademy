const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((a, b) => b.length > a.length ? b : a)
console.log(maiorString)




