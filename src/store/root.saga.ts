import {all} from 'redux-saga/effects'



function* testSaga(){
   yield console.log('hello from saga')
}
export  function* rootSaga() {
   yield all([
      testSaga()
   ])
}
