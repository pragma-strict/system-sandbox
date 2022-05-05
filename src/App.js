import Box from './Box'

document.getElementById('p5-canvas-container').onclick = () => {
  
}


let boxComponents = []

function App({x, y}) {
  boxComponents.push(<Box x="10" y="20" key="1"/>)
  return (
    <div className="App" style={{top: y + "px", left: x + "px"}}>
      <p>
        This is the App component at the position: ({x}, {y})
      </p>
      {boxComponents}
    </div>
  );
}

export default App;
