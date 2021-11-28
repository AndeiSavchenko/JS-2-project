const goods = [
  { title: 'Shirt', price: 150, img: src='img/shirts.jpg'},
  { title: 'Socks', price: 50, img: src='img/socks.jpg'},
  { title: 'Jacket', price: 350, img: src='img/jacket.jpg'},
  { title: 'Shoes', price: 250, img: src='img/shoes.jpg'},
];


class GoodsItem { 
  constructor({ title, price, img }) {
    this.title = title;
    this.price = price;
    this.img = img;
  }

  render() {
    return `
      <div class="goods-item">
      <img class="goods-item-img" width="180" height="160" src="${this.img}" alt="image">
      <h3 class="goods-item-title">${this.title}</h3>
      <p class="goods-item-price">${this.price}</p>
      <button class="add-button" type="button">Добавить</button>
      </div>
      `;
  }
}

class GoodsList {
  constructor() {
    this.goods = goods;
  }

  render() {
    const _goods = [...this.goods];

    const _goodsItems = _goods.map((item) => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    })
    document.querySelector('.goods-list').innerHTML = _goodsItems.join('');
  }

  sumTitle() {
    return this.goods.reduce((sum, item) => {
      return sum + item.price;
    }, 0)
  }
}

class BasketProducts {
  showBasket() {} 
  render() {}
}

class BasketProduct {
  setCount() {}
  deleteProduct() {}
  render() {}
}

  const goodslist = new GoodsList();
  goodslist.render();
  goodslist.sumTitle()


// class GoodsItem {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }
//   render() {
//     return `
//     <div class="goods-item">
//     <h3 class="goods-item-title">${this.title}</h3>
//     <p class="goods-item-price">${this.price}</p>
//     <button class="add-button" type="button">Добавить</button>
//     </div>
//     `;
//   }
// }

// class GoodsList {
//   constructor() {
//     this.goods = goods;
//   }

//   // fetchGoods() {
//   //   this.goods = [
//   //     { title: 'Shirt', price: 150 },
//   //     { title: 'Socks', price: 50 },
//   //     { title: 'Jacket', price: 350 },
//   //     { title: 'Shoes', price: 250 },
//   //   ];
//   // }

//   render() {
//     let listHtml = '';
//     this.goods.forEach(good => {
//       const goodItem = new GoodsItem(good.title, good.price);
//       listHtml += goodItem.render();
//     });
//     document.querySelector('.goods-list').innerHTML = listHtml;
//   }
// }

// const list = new GoodsList();
// // list.fetchGoods();
// list.render();




