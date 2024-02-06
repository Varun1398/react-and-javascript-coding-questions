import React, { useState } from "react";
/*
Problem statement:- make radio buttons to choose 1 game and 1 type of day
*/
const SportSelection = () => {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];
  const [game, setGame] = useState();
  const [day, setDay] = useState()
  return (
    <div>
        <h3>Select Game Below</h3>

      {options.map((currentVal, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name="options"
              id={currentVal}
              value={currentVal}
              onChange={(e) => setGame(e.target.value)}
            />
            <label>{currentVal}</label>
          </div>
        );
      })}
        <h3>Select day Below</h3>
      {
        days.map((day, index) => {
            return <div key={index}>
                <input
                type="radio"
                name="days"
                id={day}
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
                <label>{day}</label>
            </div>
        })
      }
      <h2>You will Play {game} on {day}</h2>
    </div>
  );
};

export default SportSelection;
