function ProductButtons(props){
    return(
        <div className="btn-group">
            
            <button>{props.id}</button>
            <button>{props.name}</button>

        </div>
    );
}

export default ProductButtons;