import React from 'react'
import { useSelector } from 'react-redux'

const ShoeDetail = () => {
    const { shoeDetail } = useSelector((state) => state.shoeSlice)
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>Chi Tiết Sản Phẩm</h2>
                </div>
                <div className="card-body">
                    <div className="row gap-3">
                        <div className="col-4">
                            <img width={"100%"} src={shoeDetail.image} alt="" />
                        </div>
                        <div className="col">
                            <h2>
                                {shoeDetail.name}
                            </h2>
                            <h4 className='text-danger'>${shoeDetail.price}</h4>
                            <p>
                                {
                                    shoeDetail.description
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoeDetail
