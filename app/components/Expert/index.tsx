'use client';
import Slider from 'react-slick';
import { Component } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        name: 'Consultancy/Outsourcing Model',
        profession: `Whether you need expert advice or require specific tasks to be outsourced, we've got you covered. Engage us for tailored consultancy or outsource specific tasks to our team. We dive deep into your needs and propose a fixed fee based on our discussions.`,
        imgSrc: '/images/Expert/5.png',
    },
    {
        name: 'Partial Equity Model',
        profession: `Join forces with us as we integrate into your team, outsourcing various aspects of your business to our seasoned experts. Payment can be a combination of cash and equity, determined by factors such as your idea's growth potential and long-term vision.`,
        imgSrc: '/images/Expert/6.png',
    },
    {
        name: 'Accelerator Model',
        profession: `For select startups with exceptional promise, we offer our Accelerator Model. In this exclusive arrangement, we invest our resources and expertise into your venture without upfront cash payments. Acting as your extended co-founding team, we offer our services and potential investment in exchange for equity. Selection for this model hinges on the promise we see in your idea, target market, and, most importantly, your founders and existing team`,
        imgSrc: '/images/Expert/7.png',
    },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: true,
                    },
                },
            ],
        };

        return (
            <div className='py-10 sm:py-20 bg-darkpink'>
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className='text-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>How We Operate</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className='text-3xl lg:text-5xl font-semibold text-black'>We operate in three models.</h3>
                        </Fade>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 my-10 text-center'>
                                    <div className='relative mb-10'>
                                        <Image src={items.imgSrc} alt='gaby' width={362} height={262} className='inline-block m-auto' />
                                    </div>
                                    <h3 className='text-xl font-semibold text-lightblack text-center'>{items.name}</h3>
                                    <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50 text-left'>{items.profession}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
