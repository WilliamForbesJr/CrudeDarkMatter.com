import React from 'react';

import logoImg from '../images/logo.png';
import googlePlayImg from '../images/googlePlay.png';
import appStoreImg from '../images/appStore.svg';
import PhonePreview from '../components/PhonePreview';

/**
 * @todo
 *  - Replace store image placeholders with actual images
 *  - logo image format
 *  - Cleanup
 */
export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="container flex flex--center">
          <div className="hero__content">
            <div className="hero__section">
              <img className="hero__logo" src={logoImg} alt="Space Unknown" />
              <div className="flex flex--center flex__align--center">
                <img
                  className="hero__downloadButton--google px-10"
                  src={googlePlayImg}
                  alt="Download on Google Play"
                />
                <img
                  className="hero__downloadButton px-10"
                  src={appStoreImg}
                  alt="Download on the App Store"
                />
              </div>
            </div>
            <div className="hero__section hero__section--phone-preview">
              <PhonePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
