function ProductCard(props) {
    return (
        <div className="productdata">
            <h1>{props.name}</h1>
            <p>Price : ₹ {props.price}</p>
            <img src={props.image} alt={props.name} className="product-image" />
        </div>
    );
}


export default ProductCard;