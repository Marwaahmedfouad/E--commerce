import React, { useContext, useEffect, useState } from 'react'
import styles from './Carts.module.css'
import { cartContext } from '../../Context/Cartcontext'
import { toast } from 'react-hot-toast'

export default function Carts() {
  const [cartproducts, setcartproducts] = useState(null)
  let { getLoggedUserCart,removeItem ,updateproduct} = useContext(cartContext)

  async function getcart() {
    let response = await getLoggedUserCart();
    console.log(response.data.data);
    setcartproducts(response.data.data);
  }
  useEffect(() => {
    getcart()
  }, [])
async function removeproduct(productid){
  let response =await removeItem(productid);
  setcartproducts(response.data.data);
  if(response.data.status==='success'){
    toast('product removed')
  }

}


async function updateproductitem(productid, count){
  let response =await updateproduct(productid,count);
  setcartproducts(response.data.data);
    toast('product count updated')
}

  return (<>

    {cartproducts ? <><div className='bg-main-light  p-5 my-4 border rounded'>
      <h3>Shop Cart:</h3>
      <h6 className='text-main'>totalCartPrice : {cartproducts.totalCartPrice} EGP</h6>

      {cartproducts.products.map((p) => <div className='row align-items-center border-bottom py-2'>
        <div className='col-md-1'>
          <img src={p.product.imageCover} alt='' width={100}></img>
        </div>
        <div className='col-md-11 d-flex justify-content-between'>
          <div>
            <h6>{p.product.title}</h6>
          <h6 className='text-main'>price:{p.price}</h6>
          <button onClick={()=>removeproduct(p.product._id)}><i className='fa-regular text-main fa-trash-can'></i> Remove</button>

            </div>
            <div>
        <button onClick={()=>updateproductitem(p.product._id,p.count+1)} className='border-main btn-sm'>+</button>
        <span className='mx-2'>{p.count}</span>
        <button onClick={()=>updateproductitem(p.product._id,p.count-1)} className='border-main btn-sm'>-</button>
            </div>
        </div>
      </div>)}
    </div>

    </>
      :
      null}

  </>
  )
}
