import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import { landingService } from '../services/landing.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'


export const LandingDetails = () => {

    const params = useParams()
    const [landing, setLanding] = useState(null)

    useEffect(() => {
        const landingId = params.landingId
        loadLandings(landingId)
    }, [])


    const loadLandings = async (landingId) => {
        try {
            const landing = await landingService.getById(landingId)
            setLanding(landing)
        } catch (err) {
            console.log(err);
        }
    }

    if (!landing) return <h2>Loading...</h2>
    const { name, links, details, cores, failures, id } = landing
    console.log(landing);
    return (
        <main className="landing-details main-container page flex">
            <section className="details-container flex">
                <div className="details-background flex">
                    <h1>{name}</h1>
                    <h1>{cores[0].landing_success ? 'This launch landed successfully' : 'This launch has failed to land'}</h1>
                    <img src={links.patch.large} alt="" />
                    <p><span>Details for this launch:</span>{details ? details : 'There are no details available for this launch'}</p>
                    {!cores[0].landing_success &&
                        <div className="details-video flex">
                            {failures.length ? failures.map(failure =>
                                <p key={id}><span>Landing failure reason:</span> {failure.reason} </p>
                            ) : <h1>No failure report available</h1>}
                        </div>
                    }
                    <iframe src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0"></iframe>
                    <a title="Link to wikipedia" className="clean-link fa-wikipedia" target='_blank' href={links.wikipedia}><FontAwesomeIcon icon={faWikipediaW} /></a>
                </div>
            </section>
        </main>
    )
}

