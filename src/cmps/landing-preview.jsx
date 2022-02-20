import { Link } from "react-router-dom";

export const LandingPreview = ({ landing }) => {
    return (
        <Link className="clean-link" title="Landing details" to={`/landing/${landing.id}`}>
            <>
                <article className="landing-preview clean-link flex">
                    <p>{landing.name}</p>
                    <p> <img src={landing.links.patch.large} alt="" /> </p>
                </article>
            </>
        </Link>
    )
}