import {GET_CITY_WITH_FETCH, REMOVE_CITY } from "../constants"

export function addCityFetch(city) {
    return {
        type: GET_CITY_WITH_FETCH,
        value: city
    }
}

export function removeCity(cityIndex) {
    return {
        type: REMOVE_CITY,
        value: cityIndex
    }
}