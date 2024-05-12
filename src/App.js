import { useState } from 'react';
import './App.css';

function App() {
  const [calcInput,setCalcInput] = useState('');
  const [ans,setAns] = useState('')
  const btnValues = ['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/']

  const handleClick = (val) => {
    if(val == 'C'){
        setAns(prev => '')
        setCalcInput(prev => '')
      return
    }
    if(val == '='){
      if(calcInput == ''){
        setAns(prev => 'Error')
      }else{
        setAns(prev => window.eval(calcInput))
      }
      return 
    }
    setCalcInput(prev => prev + val);
  }
  
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' value={calcInput}/> <br />
      {ans && <div className='ans'>{ans}</div>}
      <div className='btns'>
        {btnValues.map(btn => {
          return <button key={btn} type='button' onClick={e => handleClick(btn)}>{btn}</button>
        })}
      </div>
    </div>
  );
}

export default App;
