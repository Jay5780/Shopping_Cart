import items from "../data/items.json"
import { addItemsToStore } from "../features/cartData"
import { useDispatch }  from "react-redux"



export const LoadData = () : void =>{

    const dispatch = useDispatch();
    {
        items.map(item=>
            dispatch(addItemsToStore({
                "id":item.id,
                "name":item.name,
                "price":item.price,
                "quantity":0
            }))
        )
    }
}