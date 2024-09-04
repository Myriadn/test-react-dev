import styles from './ProductCard.module.css';

export function ProductCard({ product, background = "slategray", onPurchase }) {
    return (
      <article className={styles.Container} style={{ background }}>
        <h2>{product.title}</h2>
          <img
            src={product.imageSrc} 
            alt={product.title}
            width={128}
            height={128}
          />
        <p>Spesifikasi :</p>
        <ul className={styles.Spesifikasi}>
          {product.spesifikasi.map((spek, index) => (
            <li key={index}>{spek}</li>
          ))}
        </ul>
        <Status stockCount={product.stockCount} />
        {product.stockCount > 0 && (
          <button onClick={() => onPurchase(product)}>
            Beli (Rp {product.price})
          </button> 
        )}
      </article>
    );
  }

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={styles.NotAvailableStatus}>Tidak tersedia</p>
  );

  const availableTemplate = (
    <p className={styles.AvailableStatus}>{stockCount} Barang Tersedia</p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}