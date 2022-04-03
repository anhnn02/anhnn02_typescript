import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product'
import { CateProductType } from '../../types/categoryProduct'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

type ProductManagerProps = {
    products: ProductType[],
    categories: CateProductType[],
    onRemove: (id: number | string) => void
}

const Product = ({ products, categories, onRemove }: ProductManagerProps) => {
    console.log(products)
    const columns: GridColDef[] = [
        { field: 'index', headerName: '#', width: 60 },
        {
            field: 'name',
            headerName: 'Product name',
            width: 200,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Product Price',
            width: 100,
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
            width: 100,

        },
        {
            field: 'desc',
            headerName: 'Size',
            width: 160,
        },
        {
            field: 'cate',
            headerName: 'Category',
            width: 160,
        },
        {
            field: 'aaaa',
            headerName: 'Edit',
            sortable: false,
            renderCell(params) {
                return <Link className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg :text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    to={`/admin/product/${params.id}/edit`}><i className="bi bi-pencil-fill"></i></Link>
            },
            width: 50
        },
        {
            field: 'abc',
            headerName: 'Del',
            sortable: false,
            renderCell(params) {
                return <i onClick={() => onRemove(params.id)} className="bi bi-trash-fill flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"></i>
            },
            width: 50
        },
    ];
    const newData = products.map((product, index) => {
        return {
            index: index + 1,
            quantity: index + 1,
            action: "",
            id: product._id,
            name: product.name,
            price: product.price,
            desc: product.desc,
            cate: product.categoryPro.name
        }
    });
    return (
        <>
            <div className="container px-6 grid grid-cols-2">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                    Products
                </h2>
                <div className="text-right">
                    <Link to="/admin/product/add" className="my-6 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded">
                        <i className="bi bi-plus"></i>
                        Add product
                    </Link>
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={newData}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div >

        </>
    )
}

export default Product