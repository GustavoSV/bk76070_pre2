const socket = io();

socket.on('init', (products) => {
  const productsList = document.getElementById('productsList');
  productsList.innerHTML = '';

  products.forEach(product => {
    const productItem = createProductItem(product);
    productsList.appendChild(productItem);
  });
});

function createProductItem(product) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>
      ${product.title}
    </strong>: 
      <span>${product.description}</span>
  `;
  li.className = 'collection-item';

  return li;
}
