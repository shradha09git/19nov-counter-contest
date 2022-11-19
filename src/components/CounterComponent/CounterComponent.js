import "./CounterComponent.css";

const CounterComponent = (props) => {
  const { count, setCount } = props;
  let showConditionalButton;
  function increment() {
    setCount(count + 1);
    if (count > 10) {
      showConditionalButton = true;
      console.log(showConditionalButton);
    }
  }

  function decrement() {
    if (count == 0) {
      window.alert("Count cannot be less than 0");
    } else {
      setCount(count - 1);
    }
  }

  function goBackTo0() {
    setCount(0);
  }

  return (
    <>
      <p> {count} </p>
      <div className="buttons">
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>
        {/* {showConditionalButton && (
          <button onClick={goBackTo0}> Go Back To 0 </button>
        )} 
        The above piece of code is not working so instead wrote the below one which works partially */}
        <button onClick={goBackTo0} disabled={count <= 10}>
          {" "}
          Go Back To 0{" "}
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
