import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'

const UpdateProduct = () => {
    const history = useNavigate()
    const {id} = useParams()
    const [productInput,setProductInput] = useState({
        product_name:"",
        description:"",
        price:0.00,
        contact_number:0,
    })
    const handleInput = (e) => {
        e.preventDefault()
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }
    const updateProduct = (e) => {
        e.preventDefault()
        const data = {
            product_name:productInput.product_name,
            description:productInput.description,
            price:parseFloat(productInput.price),
            contact_number:parseInt(productInput.contact_number),
        }
        axios.post(`/updateproduct/${id}`,data).then((res)=>{
            if(res.data.Status===200){
                swal("Details updated",res.data.message,"success")
                history("/products")
            }
            else{
                setProductInput({
                    ...productInput
                })
            }
        })
    }
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Update Details</h4>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={updateProduct}>
                            <div className='form-group mb-3'>
                                <label>Book Title (w/ Author)</label>
                                <input type='text' className='form-control' name='product_name' value={productInput.product_name} onChange={handleInput}/>
                                <label>Genre</label>
                                <input type='text' className='form-control' name='description' value={productInput.description} onChange={handleInput}/>
                                <label>Price (₱)</label>
                                <input type='text' className='form-control' name='price' value={productInput.price} onChange={handleInput}/>
                                <label>Contact Number</label>
                                <input type='text' className='form-control' name='contact_number' value={productInput.contact_number} onChange={handleInput}/>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProduct