import { useState } from "react";


const Form = () => {
  const [color, setColor] = useState("");
  const handleSubmit = () => {};
  

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#F15025"
        />
        <button className="btn" style={{ backgroundColor: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
