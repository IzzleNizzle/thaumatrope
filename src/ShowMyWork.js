function ShowMyWork(props) {
  return (
    <div>
      {/* You can read the step by step notes in the main component */}

      <p>Slider Value: {props.slider}</p>

      <p>Step 1 - Math.abs(props.slider) + 90:  {Math.abs(props.slider) + 90}</p>

      <p>Step 2 - Value / 90: {(Math.abs(props.slider) + 90) / 90}</p>

      <p>Step 3 - Value / 4: {((Math.abs(props.slider) + 90) / 90) / 4}
      </p>

      <p>Step 4 - Value % 1: {(((Math.abs(props.slider) + 90) / 90) / 4) % 1}
      </p>

      <p>Step 5 - Value.toFixed(2): {((((Math.abs(props.slider) + 90) / 90) / 4) % 1).toFixed(2)}
      </p>

      <p>Lastly - (Value >= 0.5) ? true : false: {(((((Math.abs(props.slider) + 90) / 90) / 4) % 1).toFixed(2) >= 0.5 ? "true" : "false")}
      </p>
    </div>
  )
}
