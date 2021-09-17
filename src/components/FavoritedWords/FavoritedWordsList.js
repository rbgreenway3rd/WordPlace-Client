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

  // useEffect(() => {
  //     const matchingfavoritedwords = favoritedwords.filter(favoritedword => favoritedword.name.toLowerCase().includes(searchTerms.toLowerCase()))
  //     setFiltered(matchingfavoritedwords)
  // }, [searchTerms])

  // useEffect(() => {
  //     setFiltered(favoritedwords)
  // }, [favoritedwords])

  return (
    <section style={{ marginTop: "2rem" }} className="favoritedwords_list">
      {/* <button
        onClick={() => history.push("/favoritedwords/create")}
        className="addFavoritedWords__button"
      >
        Define a New Word
      </button> */}
      <div className="favoritedwords">
        {favoritedwords.map((favoritedword) => (
          <div
            className="favoritedword"
            id={`favoritedword--${favoritedword.id}`}
            key={favoritedword.id}
          >
            <div className="favoritedword__word">
              {" "}
              Word: {favoritedword.word}
            </div>
            <div className="favoritedword__definition">
              {" "}
              Definition: {favoritedword.definition}
            </div>
            <div className="favoritedword__partOfSpeech">
              {" "}
              Part of speech: {favoritedword.partOfSpeech}{" "}
            </div>
            <div>
              <a className="favoritedword__link" href={favoritedword.link}>
                {" "}
                Link
              </a>
            </div>
            <button
              onClick={() => deleteFavoritedWords(favoritedword.id)}
              className="deleteCreatedWords__button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
