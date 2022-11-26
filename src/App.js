import { useState } from "react";
import "./styles.css";

const musicDB = {
  xxxtentacion: [
    { name: "Hope", rating: "5/5" },
    { name: "Moonlight", rating: "4/5" },
    { name: "sad", rating: "3.5/5" }
  ],

  arijitsingh: [
    {
      name: "Tum hi ho",
      rating: "5/5"
    },
    {
      name: "Kesariya",
      rating: "4/5"
    },
    {
      name: "Deva Deva",
      rating: "4/5"
    }
  ],
  justinbieber: [
    {
      name: "Baby",
      rating: "5/5"
    },
    {
      name: "Stay",
      rating: "4.5/5"
    },
    {
      name: "Peaches",
      rating: "4/5"
    }
  ],
  king: [
    {
      name: "Tu aake dekhle",
      rating: "5/5"
    },
    {
      name: "Thoda samjha karo",
      rating: "4/5"
    },
    {
      name: "She dont give a fuck",
      rating: "3.5/5"
    }
  ]
};
export default function App() {
  const [output, setOutput] = useState("xxxtentacion");
  function singerClickHandler(singer) {
    var userClicked = singer;
    setOutput(singer);
  }
  return (
    <div className="App">
      <h1>Hear the best🎶</h1>
      <p>checkout my favorite songs. Select any👇</p>
      {Object.keys(musicDB).map((singer) => (
        <button
          onClick={() => singerClickHandler(singer)}
          style={{
            backgroundColor: "#4B0082",
            color: "white",
            padding: "0.3rem",
            borderRadius: "20%",
            cursor: "pointer",
            margin: "0.3rem"
          }}
        >
          {singer}
        </button>
      ))}
      <hr></hr>
      <div>
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {musicDB[output].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                border: "1px solid #D1D5DB",
                width: "70%",
                padding: "0.7rem",
                margin: "0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
