import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string;
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/images/Footer/facebook.svg',
        link: 'https://facebook.com',
        width: 10
    },
    {
        imgSrc: '/images/Footer/insta.svg',
        link: 'https://instagram.com',
        width: 14
    },
    {
        imgSrc: '/images/Footer/twitter.svg',
        link: 'https://twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "About us",
        link: '#about-section',
    },
    {
        id: 2,
        section: "What we do",
        link: '#whatWeDo-section',
    },
    {
        id: 3,
        section: "How we operate",
        link: '#howWeOperate-section',
    },
]

const Footer = () => {
    return (
        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/DynamicStartupsLogo.png" alt="logo" width={56} height={56} />
                        <a href="/" className='text-2xl font-semibold text-black ml-4'>
                            Dynamic Startups
                        </a>
                    </div>
                    <div className='flex gap-4'>
                        {socialLinks.map((items, i) => (
                            <a href={items.link} key={i}>
                                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}

                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <ul>
                            <li className='mb-5'>
                                <a href={product.link} className="text-footerlinks text-base text-black text-xl font-semibold font-normal mb-6 space-links">{product.section}</a>
                            </li>
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
                <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2023 - Dynamic Startups. All Rights Reserved by Dyanmic Startups</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><a href="/" target="_blank">Privacy policy</a></h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><a href="/" target="_blank">Terms & conditions</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;
