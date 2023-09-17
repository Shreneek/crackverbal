import React, { useRef } from 'react';

function Demo() {
  // Create a ref for the element you want to scroll to
  const elementToScrollTo = useRef(null);

  const scrollToElement = () => {
    if (elementToScrollTo.current) {
      elementToScrollTo.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <button onClick={scrollToElement}>Scroll to Element</button>
      <div style={{ height: '100vh' }}>
        {/* Add content above the element you want to scroll to */}
      </div>
      <div ref={elementToScrollTo}>
        {/* This is the element you want to scroll to */}
        <h2>Scroll to This Element</h2>
      </div>
      <div style={{ height: '100vh' }}>
        {/* Add content below the element you want to scroll to */}
      </div>
    </div>
  );
}

export default Demo;
