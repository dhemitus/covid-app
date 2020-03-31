import createAction from '../redux/createAction'
import { parseDeaths, parseRecovered, fetchAllReports } from '../api/init'

export const getAllReports = () => {
	return createAction(fetchAllReports)
}

export const getConfirmed = () => {
	return createAction(fetchAllReports)
}

export const getDeaths = () => {
	return createAction(parseDeaths)
}

export const getRecovered = () => {
	return createAction(parseRecovered)
}
