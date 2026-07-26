function Stars(props){

    let starArray = [];

    for(let i=0;i<props.count;i++){
        starArray.push("⭐");
    }

    return(
        <div className="stars">
            {starArray.join("")}
        </div>
    );

}

export default Stars;