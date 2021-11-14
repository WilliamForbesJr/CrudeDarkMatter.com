import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

import Icon1 from '../images/Sagittarius.png';
import screenshot from '../images/boss_ss.png';
import stars from '../images/stars.svg';

/**
 * @todo
 * - Cleanup Parallax
 * - Replace placeholder images
 * - gatsby image formatting
 * - Create card component
 * - Parallax layers should handled in layout and within component
 * - 
 */

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Parallax pages={2} style={{ width: '100%', height: '100%' }}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={2}
        style={{
          backgroundImage: `linear-gradient(#000000b3 40%, #0a3855a1 100%), url(${stars})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer
        offset={.3}
        speed={.5}
        factor={3}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
          position: 'absolute',
          left: '-100px'
        }}
      /> 

      
      <ParallaxLayer offset={1.99} speed={-2} style={{ width: '15%', marginLeft: '70%'}}>
        <img className="imagetest" src={Icon1} style={{maxWidth: '100px'} }/>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={1}>
        <Hero />  
      </ParallaxLayer>
      

      <ParallaxLayer offset={1.1} speed={.1}>
        <Section>
          <div>
            <Card
              image={screenshot}
              title={'Title'}
              content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat adipisci reprehenderit asperiores voluptates cupiditate porro deleniti consequuntur tempora impedit, qui magni aliquam vel. Quae vel quidem dignissimos natus minus?'}
            />
          </div>
        </Section>
        
        </ParallaxLayer>
      
    </Parallax>
  </Layout>
);

export default IndexPage;
