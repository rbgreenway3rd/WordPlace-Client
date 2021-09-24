import React, { useContext, useEffect, useState } from "react";
import { FavoritedWordsContext } from "../FavoritedWords/FavoritedWordsProvider";
import { useHistory } from "react-router-dom";
import "./HomePage.css";

const DICTIONARYKEY = "?key=4f56b21a-9585-4fcf-a279-f8571f143e0d";
const THESAURUSKEY = "?key=f164d778-bf48-4666-a44a-a994720e82b2";

const DICTIONARYURL =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const THESAURUSURL = "";

export const HomePage = () => {
  const history = useHistory();

  const { addFavoritedWords } = useContext(FavoritedWordsContext);

  const [word, setWord] = useState("");
  const [result, setResult] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const [favoritedWord, setFavoritedWord] = useState({
    uuid: "",
    user: 0,
    word: "",
    definition: "",
    partOfSpeech: "",
    link: "",
  });

  const handleClickFavoriteWord = (event) => {
    event.preventDefault();
    let newFavoritedWord = {
      uuid: result.meta.uuid,
      word: result.meta.id,
      definition: result.shortdef,
      partOfSpeech: result.fl,
      link: "",
    };
    addFavoritedWords(newFavoritedWord);
    history.push("/myprofile");
  };
  //   const handleControlledInputChange = (event) => {
  //     const newFavoritedWord = { ...favoritedWord };
  //     newFavoritedWord[event.target.id] = event.target.value;
  //     setFavoritedWord(newFavoritedWord);
  //   };
  //   useEffect(() => {
  //     getWordFromAPI();
  //   }, []);

  const showHideDiv = () => {
    if (isHidden === true) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const getWordFromAPI = (e) => {
    e.preventDefault();
    if (!word) {
      return;
    }
    return fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=4f56b21a-9585-4fcf-a279-f8571f143e0d`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0]);
        setResult(res[0]);
      });
  };

  const stageWordForFavorite = () => {};
  return (
    <>
      <div className="favoritedword__background">
        <section className="fadeInDown" id="formContent">
          <div id="favoritedword__form">
            <div className="favoritedword__header" id="formHeader">
              <h2 class="lookup__header">Look Up a Word</h2>
              <form
                id="formHeader"
                className="favoritedword__form__submit"
                onSubmit={getWordFromAPI}
              >
                <div className="favoritedword__input__div">
                  <input
                    className="favoritedword__word__input"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    style={{
                      border: "double black",
                    }}
                  />
                </div>
                <button className="getDefinition__button" type="submit">
                  Get Definition
                </button>
                <button
                  className="favoriteWord__button"
                  type="button"
                  disabled={!result?.shortdef}
                  onClick={handleClickFavoriteWord}
                >
                  Favorite
                </button>
              </form>
            </div>
            {result && (
              <div className="favoritedword__results">
                <div className="favoritedword__result__simple">
                  <p className="favoritedword__result__description">
                    Word: <u>{result?.meta?.id}</u>
                    {/* favoritedword.word */}
                  </p>
                  <div>
                    <p className="favoritedword__shortdef">
                      Definition: {result.shortdef}
                    </p>
                    {/* favoritedword.definition */}
                    <p className="favoritedword__partOfSpeech">
                      Part of Speech: {result.fl}
                    </p>
                    {/* favoritedword.partOfSpeech */}
                    {/* <a href={DICTIONARYURL + word + DICTIONARYKEY}>
                      Link: {`${DICTIONARYURL} + ${word} + ${DICTIONARYKEY}`}
                    </a> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
