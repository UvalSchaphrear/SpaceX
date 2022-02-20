import React from "react";
import { useRef, useState, useEffect } from "react";

export const LandingFilter = (props) => {


    const [filterBy, setFilterBy] = useState('All launches')
    const isMounting = useRef(true)

    useEffect(() => {
        if (isMounting.current) {
            isMounting.current = false
            return
        }

        filterLandings()

    }, [filterBy])

    const filterLandings = () => {
        const { landings } = props
        const filteredLandings = landings.filter(landing => {
            if (filterBy === 'All launches') return landing
            return (filterBy === 'Successful launches') ? landing.cores[0].landing_success
                : !landing.cores[0].landing_success
        })
        props.onSetFilteredLandings(filteredLandings)
    }

    const handleChange = (ev) => {
        let field = ev.target.innerText
        if (field === filterBy) field = 'All launches'
        setFilterBy(field)

    }

    return <div className="landing-filter">
        <div className="landing-filter-container flex">
            <div className={filterBy === "All launches" ? "active" : ""} onClick={handleChange}>All launches</div>
            <div className={filterBy === "Successful launches" ? "active" : ""} onClick={handleChange}>Successful launches</div>
            <div className={filterBy === "Failed launches" ? "active" : ""} onClick={handleChange}>Failed launches</div>
        </div>
    </div>
}