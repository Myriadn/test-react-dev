export function ProductCard({ product, background = "slategray", onPurchase }) {

    return (
      <article style={{
        background,
        width: "100%",
        border: "1px solid white", 
        borderRadius: "8px", 
        padding: "16px", 
        textAlign: "center", 
      }}>
        <h2>{product.title}</h2>
        <img 
          src={product.imageSrc}
          alt={product.title}
          width={128}
          height={128}
        />
        <p>Spesifikasi :</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
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
    <p style={{ fontSize: "14px", color: 'lightsalmon' }}>Tidak tersedia</p>
  );

  const availableTemplate = (
    <p style={{ fontSize: "14px", color: 'lightgreen' }}>{stockCount} Barang Tersedia</p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate;
}