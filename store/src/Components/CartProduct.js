import { Button } from "react-bootstrap"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { getProductData } from "../productsStore"

const CartProduct = ({ currentProduct }) => {
    const cart = useContext(CartContext)
    const id = currentProduct.id
    const quantity = currentProduct.quantity
    const productData = getProductData(id)

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size='sm' onClick={() => cart.deleteFromCart(id)} >Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct