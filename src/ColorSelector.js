import { useState } from 'react';
import './index.css';


const colors = ["#fff9b1", "#daf7a1", "#6ed8fa", "#ffcee0"]; // Color palette


const ColorSelector = () => {
    const [noteColor, setNoteColor] = useState("#fff9b1");
    const [noteColorGradient, setNoteColorGradient] = useState("#fff9b1");
    const [selectedColor, setSelectedColor] = useState('#fff9b1');
    const handleColorChange = (color) => {
        setNoteColor(color);
        setSelectedColor(color);
        setNoteColorGradient(
          `linear-gradient(to bottom, transparent, ${color}, ${color}`
        );
      };
    
    return (
        <div className="color-selector">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${
              selectedColor === color ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
    )
}

export default ColorSelector;