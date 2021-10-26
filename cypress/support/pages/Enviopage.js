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
            // envio pelo Telegran
            cy.request({
                method: 'POST',
                url: 'https://api.telegram.org/bot1851827275:AAEkZdqZ-Egc9wOlvDZXoxCSSnfj1k1T-gc/sendMessage',
                headers:{
                   'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: true,
                body:{
                    'chat_id':'-1001557665250',
                    'cdisable_web_page_preview':'1',
                    'parse_mode':'markdown',
                    'text':creditBalance,

                  },
           }).then(function(response){
                expect(response.status).to.equal(200);
                 console.log(response.body);
        })
    })
}}