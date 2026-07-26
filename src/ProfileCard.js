function ProfileCard (props){
    console.log(props);
    return(
        <div className="profile-card">
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
}

export default ProfileCard;