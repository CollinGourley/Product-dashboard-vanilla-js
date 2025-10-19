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