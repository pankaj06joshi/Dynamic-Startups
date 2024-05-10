import Banner from './components/Banner/index';
import AboutUs from './components/AboutUs/index';
import Expert from './components/howWeOperate/index';
import Newsletter from './components/Newsletter/Newsletter';
import WhatWeDo from './components/WhatWeDo';
import Head from 'next/head';



export default function Home() {
  return <>
    <Head>
    <meta name="description" content="LACKBER: Empower your business with cutting-edge IT solutions—from cloud computing to cybersecurity. Unlock your digital potential now! " />
  </Head>
    <main>
      <Banner />
      <AboutUs />
      <WhatWeDo />
      <Expert />
      <Newsletter />
    </main>
  </>
}
