import {FC} from "react"
import {Button, Card} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";
import {useSelector , useDispatch} from "react-redux"
import { RootState } from "../index";
import  { addToCart , removeFromCart } from "../features/cartData"

interface dataTypeOfItems{
    id:number;
    name:string;
    price:number;
    imageUrl:string;
}



export const StoreItem = ({id,name,price,imageUrl}:dataTypeOfItems) =>{
    
    const cartData =  useSelector((state:RootState)=>state.cart)
    
    const dispatch = useDispatch();

    return (
        <Card className="h-100">
            <Card.Img
            variant="top"
            src={imageUrl}
            height="300px"
            style={ {objectFit:"cover"}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex  justify-content-between
                 align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{ formatCurrency(price)}</span>
                 </Card.Title>
                 <div className="mt-auto">
                  {cartData[id].quantity ===0?(
                    <Button className="w-100" onClick={()=>dispatch(addToCart(id))}> Add To Cart</Button>
                  ):
                  <div className="d-flex align-items-center flex-column" style={{gap:"0.5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                      <Button onClick={()=>dispatch(removeFromCart(id))}>-</Button>
                      <div><span className="fs-3">{cartData[id].quantity}</span> In the Cart</div>
                      <Button onClick={()=>dispatch(addToCart(id))}>+</Button>
                    </div>
                      <Button variant="danger" size="sm">Remove</Button>
                    </div>
                  }
                 </div>
            </Card.Body>
        </Card>
    )
}