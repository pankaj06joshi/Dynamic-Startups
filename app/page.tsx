import Banner from './components/Banner/index';
import AboutUs from './components/AboutUs/index';
import Expert from './components/howWeOperate/index';
import Newsletter from './components/Newsletter/Newsletter';
import WhatWeDo from './components/WhatWeDo';



export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <AboutUs />
      <WhatWeDo />
      <Expert />
      <Newsletter />
    </main>
  )
}
