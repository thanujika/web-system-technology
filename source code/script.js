document.addEventListener("DOMContentLoaded", function() {
    // Define the product details
    const products = {
        "rose-bouquet": {
            name: "Rose Bouquet",
            price: "$29.99",
            description: "A beautiful bouquet of red roses, perfect for any occasion.",
            image: "https://asset.bloomnation.com/c_limit,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605365238/vendor/2890/catalog/product/2/0/20190123034834_file_5c47e4124d33a.png"
        },
        "tulip-mix": {
            name: "Tulip Mix",
            price: "$24.99",
            description: "A vibrant mix of tulips in various colors.",
            image: "https://cyprus-flower.com/wp-content/uploads/2019/03/56_2.jpg"
        },
        "sunflower-bunch": {
            name: "Sunflower Bunch",
            price: "$19.99",
            description: "A bunch of bright sunflowers to brighten your day.",
            image: "https://th.bing.com/th/id/R.fcd55d5bc8a5ad543aad22bb02aaaeda?rik=GqWC0l7DCaxpIQ&riu=http%3a%2f%2ffactorydirectcraft.com%2fpimages%2f20130502163033-821795%2fartificial_sunflower_bundle_2.jpg&ehk=uuYisGS5zqHnTA%2b6a1Z4I%2bm58VMX%2fvBYC8nqBTEhIq4%3d&risl=&pid=ImgRaw&r=0.jpg"
        },
        "orchid-arrangement": {
            name: "Orchid Arrangement",
            price: "$39.99",
            description: "An elegant arrangement of orchids for special occasions.",
            image: "https://th.bing.com/th/id/R.43ed0c0a74f7cfa216d9577bffd77330?rik=%2b7iD0Dup6W0mfQ&pid=ImgRaw&r=0.jpg"
        },
        "lily-bouquet": {
            name: "Lily Bouquet",
            price: "$34.99",
            description: "A fragrant bouquet of lilies.",
            image: "https://th.bing.com/th/id/R.21b3e17549b59d0b8bcf67dad5add476?rik=EnUIYBaBUQiNYw&riu=http%3a%2f%2fimg1.etsystatic.com%2f015%2f0%2f6097968%2fil_fullxfull.462711165_d6ur.jpg&ehk=GKDAOeQHOp2wwRkjVEYEZoxcqTsT3EhoNSdg8CBs4TM%3d&risl=&pid=ImgRaw&r=0.jpg"
        },
        "daisy-bouquet": {
            name: "Daisy Bouquet",
            price: "$18.99",
            description: "A cheerful bouquet of daisies.",
            image: "https://th.bing.com/th/id/R.deef0f588e1fb767414916998ec8ef42?rik=7BGvso6dwEk0TA&pid=ImgRaw&r=0.jpg"
        },
        "lavender-bundle": {
            name: "Lavender Bundle",
            price: "$21.99",
            description: "A calming bundle of lavender.",
            image: "https://th.bing.com/th/id/R.8b5c6bdb9cb4afe6298593814fc00299?rik=g5W3T0XRb%2f%2bCEA&pid=ImgRaw&r=0.jpg"
        },
        "peony-arrangement": {
            name: "Peony Arrangement",
            price: "$44.99",
            description: "A luxurious arrangement of peonies.",
            image: "https://th.bing.com/th/id/OIP.bT0_Jpj16cY5QVF7MhFS3gHaJ4?rs=1&pid=ImgDetMain.jpg"
        },
        "yellow-rose-bouquet": {
            name: "Yellow Rose Bouquet",
            price: "$19.99",
            description: "A stunning bouquet of yellow roses.",
            image: "https://th.bing.com/th/id/OIP.3JvkSrs6WrDMgARDY2tmeAHaJ4?rs=1&pid=ImgDetMain.jpg"
        },
        "mixed-flower-bouquet": {
            name: "Mixed Flower Bouquet",
            price: "$32.99",
            description: "A delightful mix of various flowers.",
            image: "https://i.pinimg.com/originals/18/f4/ad/18f4ad349d7f12a1a2c4352b7fa02a8c.jpg"
        }
    };

    // Get the product key from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get("product");

    // Fetch the product details based on the key
    const product = products[productKey];

    if (product) {
        // Update the DOM with product details
        document.querySelector('.product-detail img').src = product.image;
        document.querySelector('.product-detail h2').textContent = product.name;
        document.querySelector('.product-detail p:nth-of-type(1)').textContent = `Price: ${product.price}`;
        document.querySelector('.product-detail p:nth-of-type(2)').textContent = `Description: ${product.description}`;

        // Handle the "Add to Cart" button click
        document.querySelector('.product-detail form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the quantity input value
            const quantity = document.getElementById('quantity').value;

            // Retrieve the current cart from localStorage or initialize an empty array if not found
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Add the product to the cart
            cart.push({ ...product, quantity });

            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Alert the user
            alert('Added to cart! Check View Cart.');

            // Optionally, navigate to the cart page
            // window.location.href = 'cart.html'; // Uncomment this line if you want to redirect to the cart page
        });
    } else {
        // Display an error message if the product is not found
        document.querySelector('.product-detail').innerHTML = '<p>Product not found.</p>';
    }
});






document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let cartHtml = '<ul>';
        cart.forEach(item => {
            cartHtml += `
                <li>
                    <img src="${item.image}" alt="${item.name}" style="width: 100px;">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </li>
            `;
        });
        cartHtml += '</ul>';
        cartItemsContainer.innerHTML = cartHtml;
    }

    document.getElementById('checkoutButton').addEventListener('click', function() {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('checkoutForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Order placed successfully!');
        localStorage.removeItem('cart'); // Clear the cart
        window.location.href = 'index.html'; // Redirect to home page
    });
});

  


document.addEventListener("DOMContentLoaded", function() {
    const products = { /* Product data */ };

    const productDetailSection = document.getElementById("productDetailSection");

    for (const key in products) {
        if (products.hasOwnProperty(key)) {
            const product = products[key];

            const productItem = document.createElement("div");
            productItem.className = "product-item";

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
            `;

            productDetailSection.appendChild(productItem);
        }
    }
});

 
 
  // Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.flower-item');
    let found = false;

    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

    // Show or hide the "No products found" message
    const noResultsMessage = document.getElementById('no-results-message');
    if (noResultsMessage) {
        if (found) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    }
}

// Function to handle the search button click
function searchProducts() {
    filterProducts();
}

// Ensure to call the function on page load
document.addEventListener('DOMContentLoaded', (event) => {
    // Call filterProducts on load if there's any existing search term
    filterProducts();
});



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login data to the server via fetch API
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.json()) // Assuming PHP returns a JSON response
    .then(data => {
        if (data.success) {
            // If login is successful, redirect to the home page
            window.location.href = 'index.html';
        } else {
            // If login fails, display an error message
            document.getElementById('error-message').textContent = 'Invalid username or password';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
