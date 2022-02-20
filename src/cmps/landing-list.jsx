// import { Link } from "react-router-dom";
// import React from "react";
import { LandingPreview } from "./landing-preview.jsx";

export const LandingList = (props) => {

    const { landings } = props

    if (!landings.length) return <h1>No Landings to show</h1>
    return (
        <section>
            <div className="landing-list">
                {landings.slice(0, 20).map((landing, idx) =>
                    <LandingPreview key={landing.id} landing={landing} />)}
            </div>
        </section>
    )
}
