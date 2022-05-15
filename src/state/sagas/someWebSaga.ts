import { call, put, takeEvery } from 'redux-saga/effects'
import { getSomeWebSuccess } from '../reducers/someWebState'

const api_uri = process.env.REACT_APP_API || ''

function* workGetSomeWebsiteFetch(): any {
    const someWebs = yield call(() => fetch(api_uri))
    const fommatedSomeWebs = yield someWebs.json()
    yield put(getSomeWebSuccess(fommatedSomeWebs))
}

function* someWebSaga() {
    yield takeEvery('someWebs/getSomeWebFetch', workGetSomeWebsiteFetch)
}

export default someWebSaga
