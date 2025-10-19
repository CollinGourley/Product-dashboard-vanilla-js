// Reference to the container element
const productContainer = document.getElementById('product-container');

// Step 3
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            handleError(error);
        });
}

// Step 4
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5
function displayProducts(products) {
    productContainer.innerHTML = '';
    products.slice(0, 5).forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h2>${product.fields.name}</h2>
            <p>$${(product.fields.price / 100).toFixed(2)}</p>
        `;
        productContainer.appendChild(card);
    });
}

// Step 6
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
    productContainer.innerHTML = `<p style="color:red;">An error occurred: ${error.message}</p>`;
}

// Step 7
fetchProductsThen();
fetchProductsAsync();
