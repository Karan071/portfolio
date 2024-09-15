import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import CELLS from 'vanta/dist/vanta.cells.min';

const Dashboard = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaElement = vantaRef.current;
    const vantaInstance = CELLS({
      el: vantaElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200,
      minWidth: 200,
      scale: 2.50,
      color1: 0x9c0000,
      color2: 0x4d0000,
    });

    return () => {
      vantaInstance.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="w-full h-screen" >
      <Navbar />
    </div>
  );
};

export default Dashboard;