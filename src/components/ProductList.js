export function ProductList(props) {
    return (
        <>
            <h2>Produk</h2>
            <div style={{ display: 'flex', gap: '16px' }}>{props.children}</div>
        </>
    );
}
