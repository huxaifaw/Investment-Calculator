import { useState } from 'react';

import UserInput from "./components/UserInput";
import Results from './components/Results';

const DEFAULT_USER_INPUT = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
}

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);
    
  function handleChange(inputIdentifier, inputValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier] : +inputValue
          }
      });
      
  }

  return (<>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>
  </>); 
}

export default App
