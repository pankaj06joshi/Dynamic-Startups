"use client"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
    return (
        <div className='relative' id="contact-section">
            <div className='mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg'>
                <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
                    {/* COLUMN-1 */}
                    <div className='col-span-7'>
                        <div className='m-10 lg:ml-32 lg:mt-20 lg:mb-20'>
                            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className='text-lg font-normal text-white mb-3 ls-51'> Contact Us </h3>
                            </Fade>
                            <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className='text-3xl md:text-5xl font-semibold text-white mb-8'>
                                    Connect, Collaborate, <br /> Create.
                                </h3>
                            </Fade>

                            <div>
                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                        <input
                                            type='Email address'
                                            name='q'
                                            className='py-6 sm:py-6 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black'
                                            placeholder='Name'
                                            autoComplete='off'
                                        />
                                    </div>
                                </Fade>

                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                        <input
                                            type='Email address'
                                            name='q'
                                            className='py-6 sm:py-6 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black mt-5'
                                            placeholder='Email'
                                            autoComplete='off'
                                        />
                                    </div>
                                </Fade>

                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                        <input
                                            type='Email address'
                                            name='q'
                                            className='py-6 sm:py-6 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black mt-5'
                                            placeholder='Company Name (Optional)'
                                            autoComplete='off'
                                        />
                                    </div>
                                </Fade>

                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                        <input
                                            type='Email address'
                                            name='q'
                                            className='py-6 sm:py-6 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black mt-5'
                                            placeholder='Company Website(Optional)'
                                            autoComplete='off'
                                        />
                                    </div>
                                </Fade>

                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>
                                        <textarea
                                            name='q'
                                            className='py-6 sm:py-6 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black mt-5'
                                            placeholder='Message (Optional)'
                                            autoComplete='off'
                                        />
                                    </div>
                                </Fade>

                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                <div className='flex align-middle justify-center md:justify-center'>
                                <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-yellow lg:px-10 mr-6'>Submit</button>
                            </div>
                            </Fade>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className='col-span-5 relative hidden md:block'>
                        <div>
                            <Image src={'/images/Newsletter/contactus_main.png'} alt='soup-image' width={626} height={602} className='-mt-24' />
                        </div>
                        <div className='absolute bottom-[10%] left-[0%]'>
                            <Image src={'/images/Newsletter/yellow.svg'} alt='yellow-image' width={59} height={59} />
                        </div>
                        <div className='absolute bottom-[20%] right-[20%]'>
                            <Image src={'/images/Newsletter/blue.svg'} alt='blue-image' width={25} height={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;