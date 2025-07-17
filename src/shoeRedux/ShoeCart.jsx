import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shoeActions } from './redux/shoeSlice';

const ShoeCart = () => {
    const { carts } = useSelector((state) => state.shoeSlice)
    console.log(carts);
    const dispatch = useDispatch();
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts.map((item) => {
                            return <tr className="align-middle text-center" key={item.id}>
                                <td>
                                    {item.id}
                                </td>
                                <td className='w-25'>
                                    <img className='w-100' src={item.image} alt="" />
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td className='w-25'>
                                    <button className='btn btn-primary'>+</button>
                                    <span className='m-2 mt-0 mb-0'>
                                        {item.cartQuantity}
                                    </span>
                                    <button className='btn btn-danger'>-</button>
                                </td>
                                <td>
                                    {item.price * item.cartQuantity}
                                </td>
                                <td className='text-danger' onClick={() => {
                                    dispatch(shoeActions.deleteCart(item.id))
                                }}>
                                    Xóa</td>
                            </tr>
                        })

                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShoeCart
