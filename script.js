class Card {
   constructor(foto, model, memory, ram, screen, color) {
      this.foto = foto
      this.model = model
      this.memory = memory
      this.ram = ram
      this.screen = screen
      this.color = color
   }
   template(price, discount) {
      let discountZero = (discount == 0) ? 'phones__price-hiden' : 'phones__price-show'
      let result = `
         <div class="phones"> 
            <div class="phones__foto">
               <img src="${this.foto}" alt="foto">
            </div>
            <p class="phones__model">${this.model}</p>
            <p class="phones__memory"><b>Memory:</b> ${this.memory} gb</p>
            <p class="phones__ram"><b>Ram:</b> ${this.ram} gb</p>
            <p class="phones__screen"><b>Screen:</b> ${this.screen} inch</p>
            <p class="phones__color"><b>Color:</b> ${this.color}</p>
            <p class="phones__discount"><span class="price-first">Price:</span> ${price - (price * discount / 100)}$</p>
            <p class="${discountZero}"><span class="oldpreis">${price}$</span><span class="diskount">Discount:</span>${discount}%</p>
         </div>
            `
      block.innerHTML += result
   }
   header(percent) {
      let logo = `
   <div class="header">
      <h2 class="header__text">discount on all smartphones up to ${percent}%</h2>
   </div>
   `
      block.insertAdjacentHTML('beforebegin', logo)
   }
}

let block = document.querySelector('.block')
const title = new Card();
const samsung = new Card('./img/samsungS21.png', 'Samsung Galaxy S 21', 4, 64, 6.2, 'rosy')
const xiaomi = new Card('./img/xiaomi.png', 'Xiaomi Redmi Note 9 Pro', 6, 64, 6.67, 'aqua')
const iphone = new Card('./img/iphone11.png', 'Apple iPhone 11', 4, 128, 6.1, 'black')
samsung.template(300, 0)
xiaomi.template(500, 1)
iphone.template(800, 5)
title.header(15)





