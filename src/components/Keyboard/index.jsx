import React, { useState } from 'react'
import './styles.scss'

const Keyboard = ({ isOn, setText, text }) => {
    const [isCaps, setIsCaps] = useState(false)
    return (
        <div className='keyboard'>
            <div className='one'>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, '~'])}>~</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 1])}>1</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 2])}>2</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 3])}>3</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 4])}>4</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 5])}>5</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 6])}>6</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 7])}>7</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 8])}>8</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 9])}>9</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, 0])}>0</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '-'])}>-</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '+'])}>+</button>
                <button className={`default-btn delete-btn ${isOn ? 'active' : ''}`} onClick={() => setText(text.slice(0, -1))}>Delete</button>
            </div>
            <div className='two'>
                <button className={`default-btn tab-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '   '])}>Tab</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'Q' : 'q'])}>Q</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'W' : 'w'])}>W</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'E' : 'e'])}>E</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'R' : 'r'])}>R</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'T' : 't'])}>T</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'Y' : 'y'])}>Y</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'U' : 'u'])}>U</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'I' : 'i'])}>I</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'O' : 'o'])}>O</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'P' : 'p'])}>P</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '['])}>[</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, ']'])}>]</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '\\'])}>\</button>
            </div>
            <div className='three'>
                <div>
                    <span className={`${isCaps ? 'text-upper' : ''}`}></span>
                    <button className={`default-btn caps-btn ${isOn ? 'active' : ''}`} onClick={() => setIsCaps(!isCaps)}>Caps Lock</button>
                </div>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'A' : 'a'])}>A</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'S' : 's'])}>S</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'D' : 'd'])}>D</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'F' : 'f'])}>F</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'G' : 'g'])}>G</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'H' : 'h'])}>H</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'J' : 'j'])}>J</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'K' : 'k'])}>K</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'L' : 'l'])}>L</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, ';'])}>;</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '\''])}>'</button>
                <button className={`default-btn return-btn ${isOn ? 'active' : ''}`}>Return</button>
            </div>
            <div className='four'>
                <button className={`default-btn shift-btn ${isOn ? 'active' : ''}`}>Shift</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'Z' : 'z'])}>Z</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'X' : 'x'])}>X</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'C' : 'c'])}>C</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'V' : 'v'])}>V</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'B' : 'b'])}>B</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'N' : 'n'])}>N</button>
                <button className={`default-btn ${isOn ? 'active' : ''} ${isCaps ? 'text-uppercase' : ''}`} onClick={() => setText((prev) => [...prev, isCaps ? 'M' : 'm'])}>M</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, ','])}>,</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '.'])}>.</button>
                <button className={`default-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, '/'])}>/</button>
                <button className={`default-btn shift-btn ${isOn ? 'active' : ''}`}>Shift</button>
            </div>
            <div className='five'>
                <button className={`default-btn ctrl-btn ${isOn ? 'active' : ''}`}>Ctrl</button>
                <button className={`default-btn alt-btn ${isOn ? 'active' : ''}`}>Alt</button>
                <button className={`default-btn cmd-btn ${isOn ? 'active' : ''}`}>Command</button>
                <button className={`default-btn space-btn ${isOn ? 'active' : ''}`} onClick={() => setText((prev) => [...prev, ' '])}>Space</button>
                <button className={`default-btn cmd-btn ${isOn ? 'active' : ''}`}>Command</button>
                <button className={`default-btn alt-btn ${isOn ? 'active' : ''}`}>Alt</button>
                <button className={`default-btn ctrl-btn ${isOn ? 'active' : ''}`}>Ctrl</button>
                <button className={`default-btn ctrl-btn ${isOn ? 'active' : ''}`}>Fn</button>
            </div>
        </div>
    )
}

export default Keyboard
