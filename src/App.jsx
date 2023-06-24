import { useState } from 'react';

const messages = [
  'Aprenda React ⚛️',
  'Busque empleo 💼',
  'Invierta sus nuevos ingresos 🤑',
];

function App() {

  // hooks
  const [step, setStep] = useState( 1 );
  const [isOpen, setIsOpen] = useState( true );

  // handles
  const handlePrev = () => {
    
    if(step > 1) setStep(s => s - 1);
  };

  function handleNext() {
    
    if( step < 3 ) {
      setStep(s => s + 1);
      // setStep(s => s + 1);
    }
  }


  return (
    <>
      <button 
        className="close"
        onClick={() => setIsOpen( () => !isOpen )}
      >
        &times;
      </button>

      { 
        isOpen && (

          <div className="steps">
    
            <div className="numbers">
              {/* div*3>{$} */}
              <div className={step >= 1 ? 'active' : ''}>1</div>
              <div className={step >= 2 ? 'active' : ''}>2</div>
              <div className={step >= 3 ? 'active' : ''}>3</div>
            </div>
    
            {/* p.message>{Hola} */}
            <p className="message">
              Paso {step}: {messages[step - 1]}
            </p>
    
            <div className="buttons">
    
              <button
                style={{ backgroundColor: '#0c86ee', color: '#fff' }}
                onClick={handlePrev}
              >
                &lt; Ant
              </button>
              <button
                style={{ backgroundColor: '#0c86ee', color: '#fff' }}
                onClick={handleNext}
              >
                Sig &gt;
              </button>
    
            </div>
    
          </div>
          
        )
      }

    </>
  );
}

export default App;
