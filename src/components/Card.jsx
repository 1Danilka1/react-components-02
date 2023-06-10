import PropTypes from "prop-types";
import css from "./Card.module.css"

export default function Card({name, email, place, folowers, views, likes}) {
    return(
        <div className={css.container}>
            <div className={css.main_box}>
                <ul className={css.ul_about}>
                    <li className={css.li_about}><img src="https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg" alt="" /></li>
                    <li className={css.li_about}><h1>{name}</h1></li>
                    <li className={css.li_about}><p>{email}</p></li>
                    <li className={css.li_about}><p>{place}</p></li>
                </ul>
                <ul className={css.ul_info}>
                    <li className={css.li_info}>
                        <p className={css.p_info}>Folowers</p><br />
                        <p className={css.p_info}>{folowers}</p>
                    </li>
                    <li className={css.li_info}>
                        <p className={css.p_info}>Views</p><br />
                        <p className={css.p_info}>{views}</p>
                    </li>
                    <li className={css.li_info}>
                        <p className={css.p_info}>Likes</p><br />
                        <p className={css.p_info}>{likes}</p>
                    </li>
                </ul>
            </div>
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

