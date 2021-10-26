/// <reference types="Cypress" />


import envio from "../elements/envioElements";
const envioElements = new envio

const url = Cypress.config("baseUrl")

export default class valor{
    acessarSite() {
        cy.visit(url)
    }    
    //pega o valor 
    valorDolar() {
    cy.get(envioElements.valorDolar()).then(($span) => {
        const creditBalance = $span.text();
        //cy.log(creditBalance);
        cy.exec('/home/fabianoteixeira/Documentos/Telegran/telegram-notify.sh -1001557665250 ' + '"' + creditBalance + '"')

        })

        }

}
