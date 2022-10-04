import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😗": "kissing face",
  "❤️": "love",
  "😑": "annoyance",
  "🤣": "rolling on the floor laughing",
  "🥹": "face holding back tears",
  "🙃": "upside down face",
  "😉": "winking face",
  "🥰": "smiling face with hearts"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failed to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input
        className="input-box"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)} className="emoji">
          {emoji}
        </span>
      ))}
    </div>
  );
}
