function ShoppingList(props){

    return (
        
            <li>{props.name} - {props.quantity} 
             <button onClick={props.onIncrease}>+</button>
             <button onClick={props.onDecrease}>-</button>
             </li>
    );
}

export default ShoppingList;