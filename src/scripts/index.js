/* Desenvolva sua lógica aqui ... */
import { products } from "./productsData.js";

function createCards (product) {
    const listContainer = document.querySelector('.render__listContainer')
    
product.forEach(products => {

    const card = document.createElement('li')

    const cardImage = document.createElement('img')
    cardImage.src = products.img

    const  cardYear = document.createElement('p')
    cardYear.textContent = products.year

    const cardTitle = document.createElement('h2')
    cardTitle.textContent = products.title

    const cardPrice = document.createElement('span')
    cardPrice.textContent = products.price
    
    const cardBuyButton = document.createElement('button')
    cardBuyButton.textContent = 'Comprar'

    card.append(cardImage, cardYear, cardTitle, cardPrice, cardBuyButton)
    listContainer.appendChild(card)
});

product.reduce
}

function darkMode (product) {
 const buttonDark = document.querySelector('.dark-mode');

 buttonDark.addEventListener('click', () => {
   filtered(product)
 })
}

darkMode(products)

function filtered (product) {

   const ul = document.querySelector('ul')
   ul.textContent = ' '

    product.filter(album => album.year >= 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    createCards(products);
  });