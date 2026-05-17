import Header from "./Components/Header"
import Calculator from "./Components/Calculator"
import Logs from "./Components/Logs"
import { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

    function handleInputChange(name, newValue) {
        setInputValues((prevValues) => {
            return {
                ...prevValues,
                [name]: +newValue
            }
        })
    }

    const isValidInput = inputValues.duration > 0;

  return (
    <>
      <Header />
      <Calculator onInputChange={handleInputChange} inputValues={inputValues}/>
      {isValidInput ? 
      <Logs inputValues={inputValues} /> :
       <p className="center">Please enter a duration greater than zero</p>}
    </>
  )
}

export default App
