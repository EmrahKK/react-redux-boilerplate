// Duck Action Types
export const FETCHING_PEOPLE = 'FETCHING_PEOPLE'
export const FETCHING_PEOPLE_SUCCESS = 'FETCHING_PEOPLE_SUCCESS'
export const FETCHING_PEOPLE_FAILURE = 'FETCHING_PEOPLE_FAILURE'

// Duck Reducer
// Duck Reducer Initial State
const initialState = {
    people: [],
    isFetching: false,
    error: false
}
// A Duck must export default export a function called reducer()
export default function peopleReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_PEOPLE:
            return {
                ...state,
                people: [],
                isFetching: true
            }
        case FETCHING_PEOPLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                people: action.data
            }
        case FETCHING_PEOPLE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}

// Duck Action Creators
// A Duck MUST export its action creators as functions
export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople())
        fetch('https://swapi.co/api/people/')
            .then(data => data.json())
            .then(json => {
                dispatch(getPeopleSuccess(json.results))
            })
            .catch(err => dispatch(getPeopleFailure(err)))
    }
}

(dispatch) => { }
export function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}
export function getPeopleSuccess(data) {
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        data,
    }
}
export function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}
