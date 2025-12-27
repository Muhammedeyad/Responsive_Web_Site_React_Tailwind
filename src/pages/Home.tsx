import React, { useState } from 'react'
import Image from './../assets/react.svg'
import {extractedData as items} from '../data/extractedData.ts'
import { Modals } from '../components/modal/commons/modal/Modals.tsx'

export const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const handleOpenModal = () => {
        setIsModalOpen(true)
        console.log('good')
    }
    const handleClose = ()=>{
        setIsModalOpen(false)
    }
    
   
    

    return (
        <div>
            <nav className='bg-green-800 text-white flex justify-between px-3 items-center py-5 fixed w-full top-0'>
                <h1 className='text-lg tex cursor-pointer hover:text-blue-800 transition-opacity'>Economist</h1>
                <ul className='flex gap-5 uppercase text-sm'>
                    <li className='cursor-pointer font-sans text-md'>home</li>
                    <li className='cursor-pointer'>collections</li>
                    <li className='cursor-pointer'>contact us</li>
                </ul>
            </nav>
            <div className='p-2 mt-19 '>
                <div className='flex  items-center justify-center' >
                    <div className='grid md:grid-cols-5 grid-cols-2 lg:grid-cols-6 gap-10 items-center justify-center mt-2 w-full mx-3'>
                        {items.data.map((idx) => (
                            <div onClick={handleOpenModal} key={idx.title} className='bg-green-800 text-white cursor-pointer rounded-full items-center justify-center p-4 flex flex-col  w-full '>
                                <img src={Image} alt="" width={100} />
                                <div className='flex flex-col justify-center  text-sky-200'>
                                    <p>{idx.title}</p>
                                    <p>343.34$</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Modals 
            isModalOpen={isModalOpen}
            handleClose={()=> handleClose()}/>
        </div>
    )
}
