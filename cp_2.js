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
                console.log(product.name);
            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

fetchProductsThen();
// Step 4: fetchProductsAsync() using async/await */
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

// Step 5: displayProducts(products) - show first 5 products */
function displayProducts(products) {
    productContainer.innerHTML = ''; // Clear container
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

// Error handler 
function handleError(error) {
    console.error('Error fetching products:', error);
    productContainer.innerHTML = `<p style="color:red;">Failed to load products. Please try again later.</p>`;
}

// Call both functions for demonstration
fetchProductsThen();
fetchProductsAsync();
/* Step 6: reusable error handler */
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
    productContainer.innerHTML = `<p style="color:red;">An error occurred: ${error.message}</p>`;
}

// Call functions
fetchProductsThen();
fetchProductsAsync();