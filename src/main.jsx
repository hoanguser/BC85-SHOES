import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import shoeSlice from "./shoeRedux/redux/shoeSlice.js"
let store = configureStore({
  reducer: {
    shoeSlice,
  },
})
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
