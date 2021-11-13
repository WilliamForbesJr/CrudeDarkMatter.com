import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import Layout from '../components/Layout';
import Seo from '../components/seo';
import Hero from '../components/Hero';
import Section from '../components/Section';

import Icon1 from '../images/Sagittarius.png';
import screenShot from '../images/boss_ss.png';

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
        style={{backgroundImage: 'url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)', backgroundSize: 'cover'}}
      />

      <ParallaxLayer
        offset={.2}
        speed={.2}
        factor={3}
        style={{backgroundImage: 'url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)', backgroundSize: 'cover', position: 'absolute', left: '-100px'}}
      /> 

      
      <ParallaxLayer offset={1.99} speed={-3} style={{ width: '15%', marginLeft: '70%'}}>
        <img src={Icon1} style={{maxWidth: '100px'} }/>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={1}>
        <Hero />  
      </ParallaxLayer>
      

      <ParallaxLayer offset={1.1} speed={.5}>
        <Section>
          <div className="grid grid--cols-3">
            <div className="card mx-8">
              <div className="flex flex--center">
                <img src={screenShot} alt="" srcset=""style={{maxWidth: '300px'}} />
              </div>
                <h4>Some text!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, veritatis sit eum tempora ab natus consequatur, mollitia nostrum,
                qui amet voluptatum magni earum? Nihil, possimus quaerat nesciunt nemo id ipsa
              </p>
            </div>
            <div className="card mx-8">
              <h3>Some text!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, veritatis sit eum tempora ab natus consequatur, mollitia nostrum,
                qui amet voluptatum magni earum? Nihil, possimus quaerat nesciunt nemo id ipsa
              </p>
            </div>
            <div className="card mx-8">
            <h3>Some text!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, veritatis sit eum tempora ab natus consequatur, mollitia nostrum,
                qui amet voluptatum magni earum? Nihil, possimus quaerat nesciunt nemo id ipsa
              </p>
            </div>
          </div>
        </Section>
        
        </ParallaxLayer>
      
    </Parallax>
  </Layout>
);

export default IndexPage;
