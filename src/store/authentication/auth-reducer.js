import {createSlice} from '@reduxjs/toolkit'


const intialAuthState = {
    branchId: null,
    userName: null,
    isLoggedIn: false,
}
const authSlice =  createSlice({
    name:'auth',
    initialState:  intialAuthState,
    reducers: {
        login(state, action) {
         state.userName = action.payload.userName;
         state.branchId = action.payload.branchId;
         localStorage.setItem('userName', state.userName)
         localStorage.setItem('branchId', state.branchId)
         state.isLoggedIn = !!action.branchId
        },
        logout(state, action){
            state.userName = null;
            state.branchId = null;
            localStorage.removeItem('userName')
            localStorage.removeItem('branchId')
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice.reducer