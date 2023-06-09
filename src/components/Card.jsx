import PropTypes from "prop-types";

export default function Card({name, email, place, folowers, views, likes}) {
    return(
        <div>
            <ul>
                <li><img src="" alt="" /></li>
                <li><h1>{name}</h1></li>
                <li><p>{email}</p></li>
                <li>{place}</li>
            </ul>
            <ul>
                <li>
                    <p>Folowers</p><br />
                    <p>{folowers}</p>
                </li>
                <li>
                    <p>Views</p><br />
                    <p>{views}</p>
                </li>
                <li>
                    <p>Likes</p><br />
                    <p>{likes}</p>
                </li>
            </ul>
        </div>
    )
}

Card.protoTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    place: PropTypes.string,
    folowers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}

