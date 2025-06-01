import logo from './logo.svg';
import './App.css';
import { IoMdPower } from "react-icons/io";
import Keyboard from './components/Keyboard';
import { useState } from 'react';

function App() {
  const [isOn, setIsOn] = useState(false)
  const [text, setText] = useState('')
  console.log('text: ', text, text?.toString().replaceAll(',', ''));
  return (
    <>
      <div className='keyboard-section'>
        <div className='row'>
          <div className='col-8'>
            <textarea value={text?.toString().replaceAll(',', '')}>{text?.toString().replaceAll(',', '')}</textarea>
            <button onClick={() => setIsOn(!isOn)} className='btn'><IoMdPower /></button>
            <Keyboard isOn={isOn} setText={setText} text={text} />
          </div>
          <div className='col-4'>
            <table className='table table-borderless'>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Dhruv Parmar</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td>Keyboard Design</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
