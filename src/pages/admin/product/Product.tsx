import React from 'react'
import { ProductType } from '../../types/product'

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (id: number) => void
}

const Product = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((item, index) => {
                        return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => onRemove(item._id)}>Remove</button>
                                    </td>
                                </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Product