const RECEIVED_USER_DATA = 'RECEIVED_USER_DATA'

export const fetchUserData = payload => ({
  type: RECEIVED_USER_DATA,
  payload,
})

const reducer = (state = {}, action) => {
  if (action.type === RECEIVED_USER_DATA) {
    return action.payload
  } else {
    return state
  }
}

export default reducer
