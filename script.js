
        const products = [
            { id: 1, title: "T-Shirts Bundle (5 pcs)", price: 800, seller: "Rahul (2024 Batch)", condition: "Good", icon: "👕", category: "clothes" },
            { id: 2, title: "Jeans & Casual Wear", price: 1200, seller: "Priya (2024 Batch)", condition: "Excellent", icon: "👖", category: "clothes" },
            { id: 3, title: "Hero Cycle - Gear", price: 3500, seller: "Amit (2024 Batch)", condition: "Good", icon: "🚲", category: "cycles" },
            { id: 4, title: "Mountain Bike", price: 5500, seller: "Sneha (2024 Batch)", condition: "Like New", icon: "🚴", category: "cycles" },
            { id: 5, title: "Laptop - Dell Inspiron", price: 25000, seller: "Vikram (2024 Batch)", condition: "Excellent", icon: "💻", category: "laptop" },
            { id: 6, title: "HP Laptop i5 8GB RAM", price: 28000, seller: "Anjali (2024 Batch)", condition: "Excellent", icon: "💻", category: "laptop" },
            { id: 7, title: "Lenovo ThinkPad", price: 32000, seller: "Karan (2024 Batch)", condition: "Like New", icon: "💻", category: "laptop" },
            { id: 8, title: "Desert Air Cooler", price: 4000, seller: "Meera (2024 Batch)", condition: "Good", icon: "❄️", category: "coolers" },
            { id: 9, title: "Symphony Cooler 50L", price: 4500, seller: "Rohan (2024 Batch)", condition: "Excellent", icon: "❄️", category: "coolers" },
            { id: 10, title: "Formal Shirts (3 pcs)", price: 900, seller: "Neha (2024 Batch)", condition: "Good", icon: "👔", category: "clothes" },
            { id: 11, title: "Ladies Cycle", price: 2800, seller: "Divya (2024 Batch)", condition: "Good", icon: "🚲", category: "cycles" },
            { id: 12, title: "Personal Air Cooler", price: 2500, seller: "Arun (2024 Batch)", condition: "Good", icon: "❄️", category: "coolers" },
        ];

        function displayProducts(productsToShow) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            productsToShow.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image">${product.icon}</div>
                    <div class="product-info">
                        <div class="product-title">${product.title}</div>
                        <div class="product-price">₹${product.price}</div>
                        <div class="product-seller">Seller: ${product.seller}</div>
                        <span class="product-condition">${product.condition}</span>
                    </div>
                `;
                card.onclick = () => alert(`Viewing: ${product.title}\nPrice: ₹${product.price}\nContact seller for details!`);
                grid.appendChild(card);
            });
        }

        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filtered = products.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query)
            );
            if (filtered.length > 0) {
                alert(`Found ${filtered.length} product(s) matching "${query}"`);
            } else {
                alert('No products found');
            }
        }

        function filterCategory(category) {
            alert(`Showing ${category} products`);
        }

        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        function openLoginModal() {
            document.getElementById('loginModal').classList.add('active');
        }

        function openSignupModal() {
            document.getElementById('signupModal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        function switchToSignup() {
            closeModal('loginModal');
            openSignupModal();
        }

        function switchToLogin() {
            closeModal('signupModal');
            openLoginModal();
        }

        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.classList.remove('active');
            }
        }

        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', email);
            
            alert('Login successful! Welcome back.');
            closeModal('loginModal');
            updateAuthUI();
        }

        function handleSignup(event) {
            event.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const batch = document.getElementById('signupBatch').value;
            const password = document.getElementById('signupPassword').value;
            
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userName', name);
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userBatch', batch);
            
            alert('Account created successfully! Welcome to X Hostel.');
            closeModal('signupModal');
            updateAuthUI();
        }

        function checkAuth(event) {
            event.preventDefault();
            if (sessionStorage.getItem('isLoggedIn') === 'true') {
                alert('Opening sell product page...');
            } else {
                alert('Please login to sell products.');
                openLoginModal();
            }
        }

        function updateAuthUI() {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
            if (isLoggedIn) {
                const userName = sessionStorage.getItem('userName') || 'User';
            }
        }

        updateAuthUI();

        // Dark mode toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            document.getElementById('darkModeIcon').textContent = isDark ? '☀️' : '🌙';
            document.getElementById('darkModeText').textContent = isDark ? 'Light' : 'Dark';
            
            // Save preference
            sessionStorage.setItem('darkMode', isDark);
        }

        // Load dark mode preference
        if (sessionStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            document.getElementById('darkModeIcon').textContent = '☀️';
            document.getElementById('darkModeText').textContent = 'Light';
        }
