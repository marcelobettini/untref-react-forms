// import UncontrolledForm from './forms/UncontrolledForm';
import ControlledForm from './forms/ControlledForm';
// import OneStateForm from './forms/OneStateForm';
import './App.css';
import { useState } from 'react';
import Colors from './components/Colors';
const initVals = [
  {
    colorTitle: "Blue", colorCode: "#0000ff"
  }, {
    colorTitle: "Red", colorCode: "#ff0000"
  }, {
    colorTitle: "Fuschsia", colorCode: "#ff00ff"
  }
];
function App() {
  const [colors, setColors] = useState(initVals);
  const addColor = (title, code) => {
    setColors((prev) => prev = [...prev, { colorTitle: title, colorCode: code }]);
    const newColor = {
      colorTitle: title,
      colorCode: code
    };
    console.log(newColor);
  };

  return (
    <div className="App-header">
      <h1>My Colors</h1>
      {/* <UncontrolledForm onColorPicked={(title, code) => addColor(title, code)} /> */}
      <ControlledForm onColorPicked={(title, code) => addColor(title, code)} />
      <Colors colors={colors} />
      {/* <OneStateForm /> */}
    </div>

  );
}

export default App;
