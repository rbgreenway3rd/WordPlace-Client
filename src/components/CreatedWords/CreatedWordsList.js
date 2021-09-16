import React, { useState, useContext, useEffect } from "react";
import { CreatedWordsContext } from "./CreatedWordsProvider";
// import CreatedWords from "./CreatedWords";
import "./CreatedWords.css";
import { useHistory } from "react-router-dom";

export const CreatedWordsList = () => {
  const { createdwords, getCreatedWords } = useContext(CreatedWordsContext);
  const history = useHistory();
  // const [filteredcreatedwords, setFiltered] = useState([])

  // Initialization effect hook -> Go get createdword data
  useEffect(() => {
    getCreatedWords();
  }, []);

  // useEffect(() => {
  //     const matchingcreatedwords = createdwords.filter(createdword => createdword.name.toLowerCase().includes(searchTerms.toLowerCase()))
  //     setFiltered(matchingcreatedwords)
  // }, [searchTerms])

  // useEffect(() => {
  //     setFiltered(createdwords)
  // }, [createdwords])

  // const currentUser = localStorage.getItem(token);
  // const userCreatedWords = createdwords.filter(
  //   (createdword) => createdword.user.id === currentUser.id
  // );

  return (
    <section style={{ marginTop: "2rem" }} className="createdwords_list">
      <button
        onClick={() => history.push("/createdwords/create")}
        className="addCreatedWords__button"
      >
        Define a New Word
      </button>
      <div className="createdwords">
        {createdwords.map((createdword) => (
          <div
            className="createdword"
            id={`createdword--${createdword.id}`}
            key={createdword.id}
          >
            <div className="createdword__word">Word: {createdword.word}</div>
            <div className="createdword__pronunciation">
              {" "}
              Pronunciation: {createdword.pronunciation}{" "}
            </div>
            <div className="createdword__definition">
              {" "}
              Definition: {createdword.definition}
            </div>
            <div className="createdword__partOfSpeech">
              {" "}
              Part of speech: {createdword.partOfSpeech}{" "}
            </div>
            <div className="createdword__example">
              {" "}
              Example: {createdword.example}{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
