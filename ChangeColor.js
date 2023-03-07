import { useState } from "react";

  const  ChangeColor = () => {
    const [color, setColor] = useState ("")
    const click = color => {
        setColor(color)
    }
    return (
        <main className="content">
            
            <label className="content--label">
                Please Type Any Color: 
            </label>
            <input 
                className="content--label"
                placeholder="Color (Hex, Decimal, RGB )"
                type="text"
                value={color}
                onChange={(e) =>setColor(e.target.value)}
            /> 
            <button onClick={(color) => {click("")}}>
                Reset
            </button>
            <div 
                className="content--text"
                style = {{background:color}}>
                Changing Background Color
            </div>
            

        </main>
    )
}
export default ChangeColor;