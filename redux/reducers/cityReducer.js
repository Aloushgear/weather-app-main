import {GET_CITY_WITH_FETCH, REMOVE_CITY } from "../constants";

const initialState = {
    city: []
};
const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_WITH_FETCH:
            return {
                ...state,
                city: [...state.city, action.value]
            };
        case REMOVE_CITY:
            return {
                ...state,
                city: state.city.filter((elem, index) => index != action.value)
            };
        default:
            return state;
    }
}
export default cityReducer;