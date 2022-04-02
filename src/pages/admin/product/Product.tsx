import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (id: number) => void
}

const columns: GridColDef[] = [
    { field: 'index', headerName: '#', width: 90 },
    {
        field: 'name',
        headerName: 'Product name',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Product Price',
        width: 150,
        editable: true,
    },
    {
        field: 'id',
        headerName: 'Description',
        width: 160,

    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 160,

    },
    {
        field: 'desc',
        headerName: 'Size',
        width: 160,
    },
    {
        field: '',
        headerName: 'Action',
        sortable: false,
    },
];


const Product = ({ products, onRemove }: ProductManagerProps) => {
    console.log(products);
    const newData = products.map((product, index) => {
        return { index: index + 1,
            quantity: index + 1,
            index: index + 1,
            index: index + 1,
             id: product._id, name: product.name, price: product.price, desc: product.desc }
    });
    return (
        <>
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                    Products
                </h2>
            </div>

            <DataGrid
                rows={newData}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />

        </>
    )
}

export default Product