import React, { useState, useContext, useEffect } from "react";
import { FavoritedWordsContext } from "./FavoritedWordsProvider";
// import FavoritedWords from "./FavoritedWords";
import "./FavoritedWords.css";
import { useHistory } from "react-router-dom";

export const FavoritedWordsList = () => {
  const { favoritedwords, getFavoritedWords, deleteFavoritedWords } =
    useContext(FavoritedWordsContext);
  const history = useHistory();
  // const [filteredfavoritedwords, setFiltered] = useState([])

  // Initialization effect hook -> Go get favoritedword data
  useEffect(() => {
    getFavoritedWords();
  }, []);

  return (
    <section
      style={{ marginTop: "2rem" }}
      className="favoritedwords_list fadeInDown"
    >
      <h2>My Favorited Words</h2>
      <div className="favoritedwords">
        {favoritedwords.map((favoritedword) => (
          <div
            className="favoritedword"
            id={`favoritedword--${favoritedword.id}`}
            key={favoritedword.id}
          >
            <div className="favoritedword__word">
              {" "}
              <u>Word:</u> {favoritedword.word}
            </div>
            <div className="favoritedword__definition">
              {" "}
              <u>Definition:</u> {favoritedword.definition}
            </div>
            <div className="favoritedword__partOfSpeech">
              {" "}
              <u>Part of speech:</u> {favoritedword.partOfSpeech}{" "}
            </div>
            <div>
              <a className="favoritedword__link" href={favoritedword.link}>
                {" "}
                (see json)
              </a>
            </div>
            <button
              onClick={() => deleteFavoritedWords(favoritedword.id)}
              className="deleteFavoritedWord__button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
