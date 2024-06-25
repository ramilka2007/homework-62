import React from 'react';
import photo from '../../assets/myPhoto.jpg';

const AboutMe = () => {
  return (
    <div>
      <h1 className={'m-3'}>About me</h1>
      <div className="info">
        <div className="me d-flex">
          <img src={`${photo}`} alt="me" className={'w-50'} />
          <div className="information">
            <h4 style={{ lineHeight: 3 }}>
              My name is Ramil. I am 17. I live in Kyrgyzstan, Bishkek and I'm
              in the 11th grade. I've been going to programming for almost 9
              months now. In addition to programming, I study English. My good
              qualities: sociable, responsible and polite.My bad ones: time
              management (I do everything the day before the deadline, but the
              main thing is what I do). I have such a distribution of time
              because I like to play video games and go for walks.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
