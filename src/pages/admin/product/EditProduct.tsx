import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { read } from '../../../api/product'

type ProductEditProps = {
    onUpdate: () => void
}
type FormInputs = {
    name: string,
    price: number,
}

const EditProduct = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const {data} = await read(id);
        }
        getProduct();
    }, [])

    // const onSubmit = () => {

    // }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" value="{data?.name}" placeholder="Product Name" />
            <input type="text" value="" placeholder="Price" />
        </form>
    )
}

export default EditProduct