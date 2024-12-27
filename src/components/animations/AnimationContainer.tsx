import React from 'react';
import LogoAnimation from './LogoAnimation';
import CircuitAnimation from './CircuitAnimation';
import ParticleField from './ParticleField';
import RocketAnimation from './RocketAnimation';
import MoonAnimation from './MoonAnimation';
import CoinAnimation from './CoinAnimation';

const AnimationContainer = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <ParticleField />
      <CircuitAnimation />
      <LogoAnimation />
      <RocketAnimation />
      <MoonAnimation />
      <CoinAnimation />
    </div>
  );
};

export default AnimationContainer;