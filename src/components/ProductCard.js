export function ProductCard() {
    const product = {
        imageSrc: "images/iphone.png",
        title: "iPhone XD",
        spesifikasi: [
            "Mantep",
            "Gacor",
            "Keren",
        ],
        price: 1,
    };

    return (
      <article style={{
        border: "1px solid white", 
        borderRadius: "8px", 
        padding: "16px", 
        textAlign: "center", 
      }}>
        <h2>{product.title}</h2>
        <img 
          src={product.imageSrc}
          alt={product.title}
          width="128px"
          height="128px"
        />
        <p>Spesifikasi</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>{product.spesifikasi[0]}</li>
          <li>{product.spesifikasi[1]}</li>
          <li>{product.spesifikasi[2]}</li>
        </ul>
        <button>Beli (Rp {product.price})</button>
      </article>
    );
  }