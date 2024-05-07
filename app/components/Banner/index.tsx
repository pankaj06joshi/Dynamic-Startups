'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Banner = () => {
    return (
        <div id='home-section' className='bg-lightpink'>
            <div className='mx-auto max-w-7xl pt-20 sm:pb-24 px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className='text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center'>
                                Fueling Dreams, <br /> Driving Success.
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
                                Discover a dynamic ecosystem where expertise meets passion, fueling innovation and empowering entrepreneurs to thrive.
                            </p>
                        </Fade>

                        <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                            <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                <input
                                    type='Email address'
                                    name='q'
                                    className='py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black'
                                    placeholder='@ enter your email-address'
                                    autoComplete='off'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                                        <Image src={'/images/Newsletter/arrow.svg'} alt='inputicon' width={57} height={71} />
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        <Image src={'/images/Banner/banners-image.png'} alt='nothing' width={1000} height={900} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
