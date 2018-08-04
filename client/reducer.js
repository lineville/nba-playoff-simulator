const RECEIVED_USER_DATA = 'RECEIVED_USER_DATA'
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const sendUserData = payload => ({
  type: RECEIVED_USER_DATA,
  payload,
})

export const getUserData = () => ({
  type: REQUEST_USER_DATA,
})

const initState = {
  winPCT: 50,
  pointsPerGame: 50,
  assistsPerGame: 50,
  reboundsPerGame: 50,
  allstar: 50,
  history: 50,
  seed: 50,
  playerEfficiency: 50,
  homeCourt: 50,
  starPower: 50,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVED_USER_DATA:
      return action.payload
    case REQUEST_USER_DATA:
      return state
    default:
      return state
  }
}

export default reducer
