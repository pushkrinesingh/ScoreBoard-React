import React, { useState } from "react";

const ScoreBoard = () => {
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [country, setCountry] = useState("");
  const [score, setScore] = useState("");
  const [Player, setPlayer] = useState([]);

  function AddPlayer() {
    const obj = {
      id: Date.now(),
      Name: First + " " + Last,
      Country: country,
      Score: Number(score),
    };
    setPlayer([...Player, obj]);
    setFirst("")
    setLast("")
    setScore("")
    setCountry("Select Country")
  }
  function DeletePlayer(IdToDelete) {
    setPlayer(
      Player.filter((obj) => {
        return obj.id !== IdToDelete;
      }),
    );
  }

  function PlusFive(PlayerID){
    setPlayer(
      Player.map((obj) => {
        return obj.id == PlayerID ? { ...obj, Score: obj.Score + 5 } : obj;
      }),
    );
  }

  function MinusFive(PlayerID){
    setPlayer(
      Player.map((obj) => {
        if (obj.Score > 5) {
          return obj.id == PlayerID ? { ...obj, Score: obj.Score - 5 } : obj;
        } else {
          return obj;
        }
      }),
    );
  }
  const SortedPlayers=[...Player].sort((a,b)=>a.Score-b.Score);

  return (
    <>
      <div className="wrapper">
        <h1>Score Board</h1>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => setFirst(e.target.value)}
          value={First}
        />
        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(e) => setLast(e.target.value)}
          value={Last}
        />
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="South Africa">South Africa</option>
          <option value="England">England</option>
          <option value="New Zealand">New Zealand</option>
        </select>
        <input
          type="number"
          placeholder="Enter Score"
          onChange={(e) => setScore(e.target.value)}
          value={score}
        />
        <button onClick={AddPlayer}>ADD</button>
      </div>
      <ul>
        {SortedPlayers.map((obj) => {
          return (
            <li key={obj.id}>
              <span>{obj.Name}</span>
              <span>{obj.Country}</span>
              <span>{obj.Score}</span>

              <button onClick={() => DeletePlayer(obj.id)}>Delete</button>
              <button onClick={() => PlusFive(obj.id)}>+5</button>
              <button onClick={() => MinusFive(obj.id)}>-5</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ScoreBoard;
