import Papa from 'papaparse';

const pipein = (source) => {
  let i = source[0].length - 1
  let j = source[0].length - 6
  let date = source[0][i]

  source.shift()

  let sumall = source.map(a => {
    if(a[i] === undefined) return 0
    else if (a[i] === '') return 0
    else return parseInt(a[i])
  }).reduce((a, b) => a+b)

  let sumred = source.map(a => {
    if(a[j] === undefined) return 0
    else if (a[j] === '') return 0
    else return parseInt(a[j])
  }).reduce((a, b) => a+b)

  let all = parseInt(source.find( item => item[1] === 'Indonesia' )[i])
  let red = parseInt(source.find( item => item[1] === 'Indonesia' )[j])

  return {
    date,
    sum: sumall,
    newcase: sumall - sumred,
    indonesia: {
      sum: all,
      newcase: all - red,
      detail: source.find( item => item[1] === 'Indonesia' )
    }
  }
}

const sortData = (source) => {
  
  let indonesia = source.reports[0].table[0].find( item => item.Country === 'Indonesia' )
  let total = source.reports[0].table[0].find( item => item.Country === 'Total:')
//  console.log(source)
  return {total, indonesia}
}

export const fetchAllReports = async () => {
  let error
  let result
  let action

  try {
    let response = await fetch('https://covid19-server.chrismichael.now.sh/api/v1/AllReports', { method: 'GET'}, {headers: {'Access-Control-Allow-Origin': '*'}});
    let responseJson = await response.json();
    action = {
      type: 'ALLREPORTS_FETCHED_SUCCESS',
      result: sortData(responseJson),
      error 
    }
   } catch(error) {
    console.error(error)
    action = {
      type: 'ALLREPORTS_FETCHED_FAILED',
      result,
      error
    }
  }
  return action
}

export const parseConfirmed = async () => {
  let error
  let result

  return new Promise((resolve, reject) => {
    Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', {
//      Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv', {
        download: true,
      complete: (results) => resolve({
        type: 'CONFIRMED_SUCCESS',
        result: pipein(results.data),
        error 
      }),
      error: (error) => reject({
        type: 'CONFIRMED_FAILED',
        result,
        error: error
      })
    })
    
  })
}

export const parseDeaths = async () => {
  let error
  let result

  return new Promise((resolve, reject) => {
    Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', {
//      Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv', {
        download: true,
      complete: (results) => resolve({
        type: 'DEATHS_SUCCESS',
        result: pipein(results.data),
        error 
      }),
      error: (error) => reject({
        type: 'DEATHS_FAILED',
        result,
        error: error
      })
    })
    
  })
}

export const parseRecovered = async () => {
  let error
  let result

  return new Promise((resolve, reject) => {
//    Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv', {
    Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv', {
        download: true,
      complete: (results) => resolve({
        type: 'RECOVERED_SUCCESS',
        result: pipein(results.data),
        error 
      }),
      error: (error) => reject({
        type: 'RECOVERED_FAILED',
        result,
        error: error
      })
    })
    
  })
}