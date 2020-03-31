const initialState = {
  result: null
}

export default function reducer(state = initialState, action) {
  const {
    type,
    result,
    error
  } = action

  switch (type) {
    case 'ALLREPORTS_FETCHED_SUCCESS':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'ALLREPORTS_FETCHED_FAILED':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'CONFIRMED_SUCCESS':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'CONFIRMED_FAILED':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'DEATHS_SUCCESS':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'DEATHS_FAILED':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'RECOVERED_SUCCESS':
    return {
      ...state,
      result,
      type,
      error
    }
    case 'RECOVERED_FAILED':
    return {
      ...state,
      result,
      type,
      error
    }
    default:
      return state
  }
}
