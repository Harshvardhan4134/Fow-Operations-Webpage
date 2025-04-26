import { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader = ({ onFinished }: { onFinished: () => void }) => {
  const [showFlow, setShowFlow] = useState(false);
  const [showOperations, setShowOperations] = useState(false);
  const [operationsDash, setOperationsDash] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [afterDashEffect, setAfterDashEffect] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // First show Flow text from right to left
    setTimeout(() => {
      setShowFlow(true);
      
      // Then show Operations text also from right to left
      setTimeout(() => {
        setShowOperations(true);
        
        // After Operations appears, trigger the dash effect
        setTimeout(() => {
          setOperationsDash(true);
          
          // Trigger glitch effect on Flow AFTER Operations dashes
          setTimeout(() => {
            setGlitchEffect(true);
            
            // Add the letter pulsing effect after dash
            setTimeout(() => {
              setAfterDashEffect(true);
              
              // After the animation sequence, initiate fade out
              setTimeout(() => {
                setFadeOut(true);
                
                // Finally, complete the loader
                setTimeout(() => {
                  onFinished();
                }, 1200);
              }, 1800);
            }, 200);
          }, 300); // Wait for dash to almost complete
        }, 800);
      }, 800);
    }, 500);
    
    return () => {};
  }, [onFinished]);
  
  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-text-container">
          <span className={`flow-text ${showFlow ? 'flow-show' : ''} ${glitchEffect ? 'flow-glitch' : ''}`}>
            <span style={{ textTransform: 'uppercase' }}>F</span>low
          </span>
          <span className={`operations-text ${showOperations ? 'operations-show' : ''} ${operationsDash ? 'operations-dash' : ''} ${afterDashEffect ? 'operations-after-dash' : ''}`}>
            <span style={{ textTransform: 'uppercase' }}>O</span>perations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader; 