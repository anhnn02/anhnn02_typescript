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
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);

            // truyen du lieu cu vao form, k bug linh tinh
            reset(data)
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/product');
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name", { required: true })} placeholder="Product Name" />
            {errors.name && <span>Field is required!</span>}
            <input type="text" {...register("price")} placeholder="Price" />
            <button>Save change</button>
        </form>
    )
}

export default EditProduct