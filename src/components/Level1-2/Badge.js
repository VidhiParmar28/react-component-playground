function Badge(props){
let color;
if(props.label==="sale"){
    color = "red";
}
else{
    color = "green";
}

    return (
        <div className="check" style={{color:color}}>
            {props.label}
        </div>
    )
}

export default Badge; 