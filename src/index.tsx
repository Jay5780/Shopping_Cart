
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import {configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import cartReducer from "./features/cartData"
import React from 'react'

const reduxStore = configureStore({
  reducer:{
    cart:cartReducer,
  }
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={reduxStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

export type RootState = ReturnType<typeof reduxStore.getState>
export type appDispatch = typeof reduxStore.dispatch;