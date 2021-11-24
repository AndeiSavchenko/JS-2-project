const goods = [
  { title: 'Shirt', price: 150, img: src='img/shirts.jpg'},
  { title: 'Socks', price: 50, img: src='img/socks.jpg'},
  { title: 'Jacket', price: 350, img: src='img/jacket.jpg'},
  { title: 'Shoes', price: 250, img: src='img/shoes.jpg'},
];

const renderGoodsItem = ({title = '', price = 0, img}) => `
  <div class="goods-item">
  <img class="goods-item-img" width="180" height="160" src="${img}" alt="image">
  <h3 class="goods-item-title">${title}</h3>
  <p class="goods-item-price">${price}</p>
  <button class="add-button" type="button">Добавить</button>
  </div>
`

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}


renderGoodsList(goods);