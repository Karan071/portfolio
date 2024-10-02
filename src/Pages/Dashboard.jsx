import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Nets from 'vanta/dist/vanta.net.min';
import TypingEffect from '../components/TypingEffect';

const Dashboard = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaElement = vantaRef.current;
    const vantaInstance = Nets({
      el: vantaElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xE03C31,
      backgroundColor : 0xb0b0c,
      points: 15.00,
      maxDistance: 30.00,
      showDots: true
    });

    // Clean up Vanta effect on unmount
    return () => {
      if (vantaInstance) {
        vantaInstance.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-full h-screen">
      <Navbar />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <TypingEffect />
      </div>
    </div>
  );
};

export default Dashboard;
