function IconButton(props){
    return(
        <div className="iconcontainer">
           <button> {props.icon} {props.name} </button>
        </div>
    )
}

export default IconButton;