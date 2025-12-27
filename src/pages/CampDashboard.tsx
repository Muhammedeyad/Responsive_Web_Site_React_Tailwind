import React from 'react'
import Image from './../assets/react.svg'

export const CampDashboard: React.FC = () => {
    return (
        <div className='px-3 h-screen'>
            <nav className='bg-pink-400 flex justify-between  px-10 py-2 items-center rounded-2xl mt-5'>
                <h4 className='font-semibold text-yellow-100 text-wrap w-0.5'>Camp Management</h4>
                <ul className='bg-pink-200 text-gray-800  p-3 rounded-2xl'>
                    <p className='font-semibold uppercase text-sm text-gray-600'>Profile</p>
                </ul>
            </nav>
            <div className='flex mt-10 w-full flex-col md:flex-row gap-4 px-2'>
                <div className='flex gap-3 flex-col bg-pink-300 rounded-2xl p-4 text-white md:w-1/2 '>
                    <div className='flex p-3 justify-between '>
                        <div className='flex gap-3'>
                            <img src={Image} alt="react icon" width={100} />
                            <div className='flex flex-col  justify-center'>
                                <p className='text-black font-semibold uppercase'>hi sriram,</p>
                                <p>Chennai</p>
                            </div>
                        </div>
                        <div className='flex items-end'>
                            <p className='bg-yellow-200 p-3 rounded-2xl text-black text-sm'>Chennai</p>

                        </div>
                    </div>
                    <div className='flex gap-3 items-center justify-between mt-5'>
                        <h4 className='text-pink-600 px-7 font-semibold uppercase text-wrap pr-20 text-xl'>Welcome to Camp Management</h4>
                        <div>
                            <img src={Image} alt="react icon" width={100} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 w-full font-semibold text-md text-green-200 px-3'>
                    <div className='bg-pink-400 p-3 rounded-2xl '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-2xl '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-2xl '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-2xl '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-2xl'>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                    <div className='bg-pink-400 p-3 rounded-2xl '>
                        <h4>Totol Camps</h4>
                        <p>78</p>
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <h4 className='font-semibold text-md mt-6 uppercase text-pink-500'>Recent Economist Records</h4>
                <div className='flex gap-5 flex-col md:flex-row flex-wrap w'>
                    <div className='bg-pink-400 text-white rounded-2xl flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-blue-700 p-3 rounded-2xl text-green-400'>Approved</p>
                    </div>
                    <div className='bg-pink-400 text-white rounded-2xl flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-blue-700 p-3 rounded-2xl text-green-400'>Approved</p>
                    </div>
                    <div className='bg-pink-400 text-white rounded-2xl flex gap-3 font-semibold p-5 justify-between'>
                        <div>
                            <p>Health Bootcamp</p>
                            <p>23/12/2025</p>
                        </div>
                        <p className='bg-blue-700 p-3 rounded-2xl text-green-400'>Approved</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
