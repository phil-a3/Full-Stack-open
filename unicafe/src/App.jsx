import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const newVlue = good + 1;
    setGood(newVlue);
  };
  const handleBad = () => {
    const newVlue = bad + 1;
    setBad(newVlue);
  };

  const handleNutral = () => {
    const newVlue = neutral + 1;
    setNeutral(newVlue);
  };

  const total = good + neutral + bad;
  const goodPercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} func={handleGood} />
      <Button text={"neutral"} func={handleNutral} />
      <Button text={"bad"} func={handleBad} />

      <h1>Statistics</h1>
      {total === 0 ? (
        <div>No feedback yet</div>
      ) : (
        <div>
          <Statistics text={"good"} value={good} />
          <Statistics text={"neutral"} value={neutral} />
          <Statistics text={"bad"} value={bad} />
          <Statistics text={"all"} value={total} />
          <Statistics text={"avrage"} value={total / 3} />
          <Statistics text={"possitive"} value={goodPercentage} />
        </div>
      )}
    </div>
  );
};

export default App;
