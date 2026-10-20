# 🍔 Foodie – Food Delivery Web App

Foodie is a frontend food delivery website built using HTML, CSS, and JavaScript. It features dynamically rendered food items, an interactive shopping cart, and a responsive navigation interface.

## ✨ Features

- **Dynamic Food Menu:** Loads food item details from a JSON file and renders product cards dynamically.
- **Shopping Cart:** Add food items to the cart and manage selected products.
- **Quantity Management:** Increase or decrease item quantities with automatic price updates.
- **Cart Summary:** Displays the total number of items and the total price.
- **Duplicate Item Handling:** Prevents the same product from being added to the cart multiple times.
- **Responsive Navigation:** Includes desktop and mobile navigation menus.
- **Customer Testimonials:** Displays customer reviews through a looping Swiper.js carousel.
- **Modern UI:** Uses Font Awesome icons and custom CSS styling.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- Swiper.js
- Font Awesome

## 📁 Project Structure

```text
Foodie-food-delivery/
├── food.html
├── food.css
├── main.js
├── products.json
└── images/
    ├── burger.png
    ├── pizza.png
    ├── spaghetti.png
    └── ...
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anshuch1306/Foodie-food-delivery.git
```

### 2. Open the project

Open the project folder in your preferred code editor, such as Visual Studio Code.

### 3. Run the website

Open `food.html` in your browser using the **Live Server** extension in VS Code.

Using a local server is recommended so that the Fetch API can load `products.json` correctly.

## 🛒 How It Works

1. Food items are stored in `products.json`.
2. JavaScript fetches the product data and dynamically creates food cards.
3. Users can add products to the shopping cart.
4. Quantity controls update individual item prices and the cart total.
5. The cart displays the total item count and overall price.

## 🔮 Future Improvements

- Add user authentication and order history.
- Integrate a backend API and database.
- Implement checkout and payment integration.
- Add food categories, search, and filtering.
- Improve accessibility and mobile responsiveness.

## 👨‍💻 Author

**Anshu**

GitHub: [anshuch1306](https://github.com/anshuch1306)

---

*Foodie is a frontend project created to practice JavaScript, DOM manipulation, JSON data handling, and interactive user interface development.*