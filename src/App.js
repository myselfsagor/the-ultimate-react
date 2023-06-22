import { useState } from 'react';
import './index.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div onClick={() => setIsOpen((state) => !state)} className="close">
        &times;
      </div>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <div className="message">
            <p>
              Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={() => (step > 1 ? setStep((state) => state - 1) : '')}
              >
                Previous
              </button>
              <button
                onClick={() => (step < 3 ? setStep((state) => state + 1) : '')}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default App;
