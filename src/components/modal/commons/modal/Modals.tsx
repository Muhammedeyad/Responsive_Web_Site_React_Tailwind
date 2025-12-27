import { useFormik } from 'formik'
import type { ModalType } from '../../../../types/modaltype'
import { productFieldValidator } from './../../../../validators/product-field-validator'
import { addProduct } from '../../../../services/home-service'
import { useState } from 'react'
import { ModalLoadSkeleton } from '../skeleton/ModalLoadSkeleton'

const initialValues = {
    product_name: "",
    branch_name: "",
    address_line: ""
}

export const Modals = ({
    isModalOpen,
    handleClose
}: ModalType) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleModalClose = ()=>{
        handleClose()
        formik.resetForm()
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: productFieldValidator,
        onSubmit: async (values)=>{
            setIsLoading(true)
            const res= await addProduct(values)
            if(res){
                handleModalClose()
            } 
            setIsLoading(false)  
        }
    })
   

    return (
        <>
            {isModalOpen && 
                <div className={` w-full  fixed top-0 h-screen ${isModalOpen ? 'bg-black/40' : ''} flex items-center justify-center px-10 `}>
                    <form onSubmit={formik.handleSubmit} className=' rounded-lg shadow-lg pt-10 p-4 bg-white w-full md:w-1/2 backdrop-blur-2xl flex gap-4 flex-col'>
                       {isLoading ? <div className='flex gap-3 flex-col'>
                        <ModalLoadSkeleton height={50} width={700}/>
                        <ModalLoadSkeleton height={30} width={500}/>
                        <ModalLoadSkeleton height={40} width={500}/>
                        <ModalLoadSkeleton height={40} width={300}/>
                        <ModalLoadSkeleton height={40} width={600}/>
                       </div> :  <>
                       <input type="text" className='px-3 py-3 rounded-lg border-0 bg-blue-300 w-full outline-none' placeholder='product name' name="product_name" onChange={formik.handleChange} value={formik.values.product_name}/>
                        <p className='text-red-800'>{formik.errors.product_name}</p>
                        <input type="text" className='px-3 py-3 rounded-lg border-0 bg-blue-300 w-full outline-none' placeholder='Branch name' name='branch_name' onChange={formik.handleChange} value={formik.values.branch_name}/>
                        <p className='text-red-800'>{formik.errors.branch_name}</p>
                        <input type="text" className='px-3 py-3 rounded-lg border-0 bg-blue-300 w-full outline-none' placeholder='Address line' name='address_line' onChange={formik.handleChange} value={formik.values.address_line}/>
                        <p className='text-red-800'>{formik.touched && formik.errors.address_line}</p>
                        <div className='flex gap-2 w-full flex-row-reverse cursor-pointer'>
                            <button className='bg-gray-400 px-4 py-2 rounded-lg border-0 text-black mt-4 cursor-pointer' onClick={() => handleModalClose()}>Close</button>
                            <button type='submit' className='bg-red-400 px-4 py-2 rounded-lg border-0 text-white mt-4 cursor-pointer'>Save</button>
                        </div>
                        </> }
                      
                    </form>
                </div>
            }
        </>
    )
}
