import  {configureStore} from '@reduxjs/toolkit'
import authReducer from './authentication/auth-reducer'
import itemReducer from './items-redux/item-reducer'

const store = configureStore({
    reducer: {
        auth: authReducer,
        items: itemReducer,
    }
})

export default store