
import { storageService } from './async.storage.service.js'
import { localStorageServices } from './stroage.service.js'

const axios = require('axios')

const STORAGE_KEY = 'landDB'

export const landingService = {
    getLandings,
    getById
}


export async function getLandings() {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v4/launches`)
        const launches = res.data
        const landings = launches.filter(launch => {
            if (launch.cores[0].landing_attempt) return launch
        })
        localStorageServices.saveToStorage(STORAGE_KEY, landings)
        return landings
    } catch (err) {
        console.log('Error getting landings:', err)
    }
}

export async function getById(landingId) {
    try {
        const landing = await storageService.get(STORAGE_KEY, landingId)
        return landing
    } catch (err) {
        console.log('Cant find landing by Id', err);
    }

}

