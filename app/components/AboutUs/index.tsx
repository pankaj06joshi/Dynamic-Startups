"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='relative' id='about-section'>
            <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                     <Image src={'/images/AboutUs/side.png'} alt='side' width={463} height={622} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src='/images/AboutUs/about_us.png' alt='about_us' width={636} height={808} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase text-start'>About Us</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className='text-3xl lg:text-5xl font-semibold text-black text-start'>
                                Nurturing Innovation, Empowering Entrepreneurs.
                            </h3>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                                We’re a passionate team of professionals with diverse expertise spanning software engineering, marketing and sales.
                                With a rich history of nurturing startups, we&apos;re here to empower young entrepreneurs and breathe life into their
                                innovative ideas.
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6' onClick={scrollToContact}>Get Started Today!</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
