import React from 'react'
import Layout from '../../Componets/Layouts/Layout';
import "../../styles/HomeStyle.css"
import IntroSec from './IntroSec';
import About from './About';
import Menu from './Menu';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


export default function Home() {
  return (
     <Layout>
         {/* home section hero banner*/}
        <IntroSec />
        <About />
        <Menu />
        {/* prmoation sectoin */}
        <Section4></Section4>
        {/* prmoation sectoin */}
        {/* shop section */}
        <Section5></Section5>
        {/* shop section */}
        {/* section blog */}
        <Section6></Section6>
        {/* section blog */}
        {/* contact section */}
        <Section7></Section7>
        {/* contact section */}
     </Layout>
  )
}
