import IMG from '../../images/profile.jpg';
import "./profile.css";

export default function Profile() {
    return(
        <>
            <div className="container profile">
                <img src={IMG} alt="profile" />
            </div>
        </>
    )
}