import { useState, useEffect } from "react";


import { LandingList } from '../cmps/landing-list.jsx'
import { LandingFilter } from '../cmps/landing-filter.jsx'
import { loadLandings } from '../store/landing.action.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


export const LandingApp = () => {

    const [filteredLandings, setFilteredLandings] = useState([])
    const { landings } = useSelector(state => state.landingModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadLandings())
    }, [])



    const onSetFilteredLandings = (landings) => {
        setFilteredLandings(landings)
    }

    return <>
        <main className="main-container page">
            <LandingFilter onSetFilteredLandings={onSetFilteredLandings} landings={landings} />
            <LandingList landings={filteredLandings.length ? filteredLandings : landings} />
        </main>
    </>
}
