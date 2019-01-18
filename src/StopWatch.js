import React from "react";

function pad(number, length) {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }

  return str;
}

export const StopWatch = () => {
  const createTimeString = time => {
    let hours = time / 1000 / 60 / 60;
    let rest = hours % 1;
    hours = parseInt(hours);
    let minutes = rest * 60;
    rest = minutes % 1;
    minutes = parseInt(minutes);
    let seconds = rest * 60;
    rest = seconds % 1;
    seconds = parseInt(seconds);
    const milliseconds = Math.fround(rest * 1000);

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(
      milliseconds,
      3
    )}`;
  };

  // TODO: fill with life
  const handleStartStop = () => {};
  const handleClear = () => {};
  let currentTime = 0;
  let isRunning = false;
  return (
    <>
      <article>{createTimeString(currentTime)}</article>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};
