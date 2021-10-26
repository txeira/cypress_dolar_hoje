  /* global Given, Then, When */

import envio from '../pages/Enviopage'
const enviopage = new envio

Given('que o usuario esteja no site de Cambio', function () {
  enviopage.acessarSite()
});

Then('a aplicacao ira capiturar o valor do Cambio e realizar envio', function () {
  enviopage.valorDolar()
  
});
