import { landingService } from '../services/landing.service.js'


export function loadLandings() {
    return (dispatch) => {
        landingService.getLandings()
            .then(landings => {
                const action = { type: 'SET_LANDINGS', landings }
                dispatch(action)
            })

    }
}

export function removeLanding(landingId) {
    return (dispatch) => {
        landingService.remove(landingId)
            .then(() => {
                dispatch({ type: 'REMOVE_LANDING'.landingId })
            })
            .catch(err => {
                console.log('Can\'t delete landing ', err)
            })
    }
}