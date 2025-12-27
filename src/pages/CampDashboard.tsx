import React from 'react'
import Image from './../assets/react.svg'

export const CampDashboard: React.FC = () => {
    return (
        <div>
            <nav className='bg-pink-400 w-full p-3 rounded-full m-2 flex justify-between px-10 items-center'>
                <h4 className='font-semibold '>Economist</h4>
                <ul className='bg-pink-200 text-gray-800  p-3 rounded-full'>
                    <p>Profile</p>
                </ul>
            </nav>
            <div className='flex mt-4 w-full flex-col md:flex-row gap-4'>
                <div className='flex gap-3 flex-col bg-pink-300 rounded-full p-4 text-white md:w-1/2 '>
                    <div className='flex p-3 justify-between '>
                        <img src={Image} alt="react icon" />
                        <div className='flex flex-col'>
                            <p className='text-black font-semibold uppercase'>hi sriram,</p>
                            <p>Chennai</p>
                        </div>
                        <p>Chennai</p>
                    </div>
                    <div className='flex gap-3'>
                        <h4 className='text-pink-600 px-7 font-semibold uppercase'>Welcome to Camp Management</h4>
                        <img src={Image} alt="react icon" />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 w-full font-semibold text-md text-green-200 px-3'>
                    <div className='bg-pink-400 p-3 rounded-full '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-full '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-full '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-full '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-full'>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-full '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <h4 className='font-semibold text-md mt-6 uppercase text-pink-500'>Recent Economist Records</h4>
                <div className='flex gap-5 flex-col md:flex-row flex-wrap w'>
                    <div className='bg-pink-400 text-white rounded-full flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-green-700 p-3 rounded-full text-green-400'>Approved</p>
                    </div>
                    <div className='bg-pink-400 text-white rounded-full flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-green-700 p-3 rounded-full text-green-400'>Approved</p>
                    </div>
                    <div className='bg-pink-400 text-white rounded-full flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-green-700 p-3 rounded-full text-green-400'>Approved</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
