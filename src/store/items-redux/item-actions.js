import axios from "axios"
import { itemsActions } from "./item-reducer"

export const fetchingAllItem = () => {
    return async(dispatch) => {

        const fetchData = async() => {
            try{
                const res = axios.get('/local-json/users.json')
                return res
            }catch(e) {
                console.log(e)
            }
        }
        const data  = await fetchData()
        dispatch(itemsActions.fetchAllData(data.data))
       
    }
}