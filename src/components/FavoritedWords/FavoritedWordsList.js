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
      style={{ marginBottom: "2rem", marginTop: "1.9rem" }}
      className="favoritedwords_list fadeInDown"
      id="formContent"
    >
      <section id="formHeader" className="fadeInDown">
        <h2 id="myFavoritedWords__header">My Favorited Words</h2>
      </section>
      <div className="favoritedwords">
        {favoritedwords.map((favoritedword) => (
          <div
            className="favoritedword"
            id={`favoritedword--${favoritedword.id}`}
            key={favoritedword.id}
          >
            <div className="favoritedword__word">
              {" "}
              <u>{favoritedword.word}</u>
            </div>
            <section class="favoritedword__info">
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
                  see json
                </a>
              </div>
              <button
                onClick={() => deleteFavoritedWords(favoritedword.id)}
                className="deleteFavoritedWord__button"
                style={{
                  marginBottom: "0.5em",
                }}
              >
                Delete
              </button>
            </section>
          </div>
        ))}
      </div>
    </section>
  );
};
