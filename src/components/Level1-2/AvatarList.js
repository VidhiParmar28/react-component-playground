function Avatar(props) {
    return(
        <div className="avatar">
            
        <img src={props.image} alt={props.name} className="avatar-image" />
        <h2 className="Nameofavatar">{props.name} </h2>
        </div>
        
    )
}

export default Avatar;