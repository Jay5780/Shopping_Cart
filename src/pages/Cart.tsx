import {useSelector} from "react-redux"
import { RootState } from "../index"
import { CartItem } from "../components/CartItem"
import { formatCurrency } from "../utilities/formatCurrency"

export const Cart = () =>{

    const cartData = useSelector((state:RootState)=>state.cart)
    var grandTotal=0;
    {
        for(let i=0;i<cartData.length;i++)
        {
            grandTotal += cartData[i].quantity * cartData[i].price;
        }
    }
    return(
            <div>
             <table className="table table-dark">
             <thead>
                 <tr >
                   <th scope="col">Name</th>
                   <th scope="col">Price</th>
                   <th scope="col">Quantity</th>
                   <th scope="col">Total Price</th>
                 </tr>
             </thead>
             </table>
            <div>

                {
                    cartData.map((item)=>{
                        return(
                            <div>
                                {
                                    item.quantity >0 ? <CartItem name={item.name} price={item.price} 
                                                        quantity={item.quantity} totalPrice ={item.quantity * item.price} />
                                                     : " "
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div>
            <table className="table table-dark">
             <thead>
                 <tr >
                   <th scope="col" style={{width:"500px"}}>Grand Total </th>
                   <th scope="col" style={{width:"200px"}}>{formatCurrency(grandTotal)}</th>
                 </tr>
             </thead>
             </table>
            </div>
            </div>
    )
}