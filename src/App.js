import { Fragment } from "react";
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
import styles from './App.module.css';

function App() {
  const products = [
    {
    imageSrc: "images/iphone.png",
    title: "iPhone XD",
    spesifikasi: [
        "Processor Paling xMantep",
        "Camera 6900MP",
        "Baterai Tahan mah",
    ],
    stockCount: 10,
    price: 10000000,
  },
  {
    imageSrc: "images/macbook.png",
    title: "Macbook Pro X",
    spesifikasi: [
        "Processor M3",
        "RAM 16GB",
        "Baterai awet 50 Jam",
    ],
    stockCount: 0,
    price: 4999999,
  },
  {
    imageSrc: "images/airpods.png",
    title: "Airpods Wazzah",
    spesifikasi: [
        "Fokus Gaming",
        "Bass Boosted",
        "Volume up to 1000%",
    ],
    stockCount: 20,
    price: 500000,
  }
];

function handlePurchase(product) {
  alert(`Kamu memilih ${product.title} dengan harga Rp ${product.price}`);
}

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard 
            key={product.title} 
            product={product} 
            onPurchase={handlePurchase}
          />
        ))}
      </ProductList>

    <h2>Produk yang memiliki harga sampai Rp 5000000</h2>
      {products.filter(({ price }) => price < 5000000).map(({ title, price }) => (
        <Fragment key={title}>
          <hr className={styles.ListDivider} />
          <p className={styles.ListTitle} >
            {title} dibanderol dengan harga Rp {price}
          </p>
        </Fragment>
      ))}
    </div>
  );
}

export default App;
