
        function displayProducts() {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            const products = JSON.parse(localStorage.getItem('products')) || [];

            products.forEach((product, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${product.name} - Quantity: ${product.quantity}
                    <button onclick="deleteProduct(${index})">Delete</button>`;
                productList.appendChild(li);
            });
        }
        function deleteProduct(index) {
            
                const products = JSON.parse(localStorage.getItem('products')) || [];
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts();
            
        }
        displayProducts();