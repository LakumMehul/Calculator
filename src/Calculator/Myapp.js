import React, { useState } from "react";
import './Mystyle.css';

function Myapp() {

    const [data, setData] = useState("")

    const onHandlaer = (e) => {
        setData(e.target.name)
    }

    const btnCLick = (e) => {
        setData(data.concat(e.target.name))
    }

    const Claer = () => {
        setData("")
    }

    const backpace = () => {
        setData(data.slice(0, -1))
    }

    const sum = () => {
        setData(eval(data).toString())
    }

    return (
        <>
            <center> <div>
                <div className="container" id="mehul">
                    <input type="text" className="input" name="data" value={data} onChange={onHandlaer} />

                    <div className="container-fuld">
                        <div className="calc">

                            <button className="btn" onClick={Claer}>AC</button>
                            <button className="btn" onClick={backpace}>DE</button>
                            <button name="." className="btn" onClick={btnCLick}>.</button>
                            <button name="/" className="btn" onClick={btnCLick}>/</button><br />

                            <button name="7" className="btn" onClick={btnCLick}>7</button>
                            <button name="8" className="btn" onClick={btnCLick}>8</button>
                            <button name="9" className="btn" onClick={btnCLick}>9</button>
                            <button name="*" className="btn" onClick={btnCLick}>*</button><br />

                            <button name="4" className="btn" onClick={btnCLick}>4</button>
                            <button name="5" className="btn" onClick={btnCLick}>5</button>
                            <button name="6" className="btn" onClick={btnCLick}>6</button>
                            <button name="+" className="btn" onClick={btnCLick}>+</button><br />

                            <button name="1" className="btn" onClick={btnCLick}>1</button>
                            <button name="2" className="btn" onClick={btnCLick}>2</button>
                            <button name="3" className="btn" onClick={btnCLick}>3</button>
                            <button name="-" className="btn" onClick={btnCLick}>-</button><br />

                            <button name="00" className="btn" onClick={btnCLick}>00</button>
                            <button name="0" className="btn" onClick={btnCLick}>0</button>
                            <button className="btns" onClick={sum}>=</button>

                        </div>


                    </div>
                </div>
            </div></center>

        </>
    )
} export default Myapp;