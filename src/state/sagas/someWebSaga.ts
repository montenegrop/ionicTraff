import { call, put, takeEvery } from 'redux-saga/effects'
import { getSomeWebSuccess } from '../reducers/someWebState'

function* workGetSomeWebsiteFetch(): any {
    const someWebs = yield call(() =>
        fetch('https://api.covid19api.com/summary')
    )
    const fommatedSomeWebs = yield someWebs.json()
    yield put(getSomeWebSuccess(fommatedSomeWebs))
}

function* someWebSaga() {
    yield takeEvery('someWebs/getSomeWebFetch', workGetSomeWebsiteFetch)
}

export default someWebSaga
