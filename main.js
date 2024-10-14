const productTypeSelectElement = document.getElementById('type-select');
const productNameElement = document.getElementById('product-name');
const productCountElement = document.getElementById('product-count');
const addProductButton = document.getElementsByClassName('add-product')[0];
const clearProductListButton = document.getElementsByClassName('clear-list')[0];
const productItemList = document.getElementsByClassName('product-item')[0];
const productList = []

function addProduct() {
    if (!validateInputs()) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    const productTypeSelectElementValue = productTypeSelectElement.value;
    const productNameElementValue = productNameElement.value;
    const productCountElementValue = productCountElement.value;
    const product = {
        type: productTypeSelectElementValue,
        name: productNameElementValue, 
        count: productCountElementValue, 
    };
    productList.push(product);
    const productItem = document.createElement('tr');
    productItem.innerHTML = `
    <tr>
    <td>${product.type}</td>
    <td>${product.name}</td>
    <td>Количество: ${product.count}</td>
    </tr>
    `;
    productItemList.appendChild(productItem);
    productTypeSelectElement.value = '';
    productNameElement.value = '';
    productCountElement.value = '';

}

addProductButton.addEventListener("click", addProduct);  

function clearProductList() {
    productList.length = 0;
    while (productItemList.firstChild) {
        productItemList.removeChild(productItemList.firstChild);
    }
    productTypeSelectElement.value = '';
    productNameElement.value = '';
    productCountElement.value = ''; 
}

clearProductListButton.addEventListener("click", clearProductList);

function validateInputs() {
    if (productTypeSelectElement.value === '') {
        return false;
    } else if (productNameElement.value === '') {
        return false;
    } else if (productCountElement.value === '') {
        return false;
    }
    
    return true;
}

function toggleAddButton() {
    addProductButton.disabled = !validateInputs();
}
productTypeSelectElement.addEventListener('input', toggleAddButton);
productNameElement.addEventListener('input', toggleAddButton);
productCountElement.addEventListener('input', toggleAddButton);
toggleAddButton(); 