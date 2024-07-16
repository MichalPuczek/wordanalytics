import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  // STATE 1 : textarea value
  const [text, setText] = useState("");
  // Derived / computed state
  const stats = {
    nrOfWords: text.split(/\s/).filter((word) => word !== "").length,
    nrOfCharacters: text.length,
    instaCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
