import React from 'react'
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to Our Sports Store</h1>
        <p>Performance. Style. Passion for the Game.</p>
        <a href="#products">
          <button className="hero-button">Shop Now</button>
        </a>
      </div>

<div id="products" className="products-section">

  <div className="product-grid">
    {/* Product cards go here */}
 <div id="products" className="products-section">
  
  <h2>Our Products</h2>
  <div className="product-grid">
    {/* 1 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6P5TwVyp2hyL1pqbJGjyKHdSlvkAKQAKhA&s" alt="Real Madrid Home 22/23" />
      <h4>Real Madrid Home 22/23</h4>
      <p>$60</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 2 */}
    <div className="product-card">
      <img src="https://www.soccerbox.com/media/catalog/product/cache/9d14d56c606ce6e31fa44a7bf9aa05c5/b/a/barcelona-kids-away-shirt-22-23.jpg" alt="Barcelona Away 22/23" />
      <h4>FC Barcelona Away 22/23</h4>
      <p>$85</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 3 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Om_AJ3vhiW7kIARW79OHhbxo_1m737yMBg&s" alt="Arsenal Away 22/23" />
      <h4>Arsenal Away 22/23</h4>
      <p>$87</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 4 */}
    <div className="product-card">
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b5ede3ae47214c66933dae8f00d222f8_9366/Juventus_22-23_Home_Shorts_White_HB0433_01_laydown.jpg" alt="Juventus Home Shorts 22/23" />
      <h4>Juventus Home Shorts 22/23</h4>
      <p>$45</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 5 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KlKV51XqrdYgzoUmktmC18qAh2E_o_jOPg&s" alt="PSG Jordan Home 22/23" />
      <h4>PSG Jordan Home 22/23</h4>
      <p>$92</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 6 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3CDcn0ZHnj1Oa0iqfgvgthtfpsS6daB8Q&s" alt="Bucks Jersey" />
      <h4>Bucks Jersey</h4>
      <p>$110</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>
    {/* 7 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt898raNV_ZaInsx-1jPrDa-V1jP3wyJDRg&s" alt="Heat Shorts" />
      <h4>Heat Shorts</h4>
      <p>$55</p>
      <select className="size-select">
        <option>Select Size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <button>Add to Cart</button>
    </div>

    {/* 8 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgH-1Bt-VIYuUxmF6lRLE82Vjb9ctOleM75g&s" alt="Basketball Hoop" />
      <h4>Basketball Hoop</h4>
      <p>$103</p>
      <button>Add to Cart</button>
    </div>

    {/* 9 */}
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBHv0-LZA45uGHe0woUo2hyoge7e2YqVP6g&s" alt="Wilson GST 1003" />
      <h4>Wilson GST 1003</h4>
      <p>$50</p>
      <button>Add to Cart</button>
    </div>
    {/* 10 */}
    <div className="product-card">
      <img src="https://www.playgosports.com/cdn/shop/products/SB-CLASSIC-01_007_2_3.jpg?v=1561525388" alt="GoSports Size 3 Classic Football" />
      <h4>GoSports Size 3 Classic Football</h4>
      <p>$50</p>
      <button>Add to Cart</button>
    </div>
  </div>
</div>

  </div>
</div>

    </div>
  )
}

      export default Home
