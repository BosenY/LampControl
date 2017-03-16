import React from 'react'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import addApp from './reducers/index'
import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga,watchIncrementAsync } from './sagas/index.js'
import App from './containers/app'
const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  addApp,
  applyMiddleware(sagaMiddleware,logger)
)
sagaMiddleware.run(helloSaga)
sagaMiddleware.run(watchIncrementAsync)
// const store = createStore(addApp)
// const rootEl = document.getElementById('root')

/*ReactDOM.render(
  <Provider store={store}>
    {routers}
  </Provider>,
  rootEl
)*/
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Root;




