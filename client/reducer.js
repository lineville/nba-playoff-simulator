import axios from 'axios'

export const GET_TEAMS = 'GET_TEAMS'

export const getTeams = payload => ({
  type: GET_TEAMS,
  payload,
})

export const fetchTeams = () => {
  return async dispatch => {
    try {
      const teams = await axios.get(`/api/teams`)
      return dispatch(getTeams(teams.data))
    } catch (error) {
      console.log('Unable to get the teams')
      console.error(error)
    }
  }
}

const initState = {
  teams: [],
  round: 1,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      }
    default:
      return state
  }
}

export default reducer
