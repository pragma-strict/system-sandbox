

function Box({x, y}) {
    return (
        <div className="Box" style={{top: y + "px", left: x + "px"}}>
        <p>
            This is the Box component at the position: ({x}, {y})
        </p>
        </div>
    );
}

export default Box;
  