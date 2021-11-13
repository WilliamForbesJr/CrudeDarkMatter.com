import React from 'react';

const PhonePreview = () => {
  return (
    <div className="marvel-device iphone-x phone__image">
      <div className="notch">
        <div className="camera" />
        <div className="speaker" />
      </div>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="bottom-bar" />
      <div className="volume" />
      <div className="overflow">
        <div className="shadow shadow--tr" />
        <div className="shadow shadow--tl" />
        <div className="shadow shadow--br" />
        <div className="shadow shadow--bl" />
      </div>
      <div className="inner-shadow" />
      <div className="screen">
        <iframe
          src="https://www.youtube-nocookie.com/embed/a4T_Q_XeUhw?&autoplay=0&mute=1&repeat=1&playlist=a4T_Q_XeUhw&loop=1&controls=0&modestbranding=1&disablekb=1"
          title="YouTube video player"
          frameBorder="0"
          className="video-preview"
        />
      </div>
    </div>
  );
};

export default PhonePreview;
