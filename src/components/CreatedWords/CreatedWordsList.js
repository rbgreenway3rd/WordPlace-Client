import React, { useState, useContext, useEffect } from "react";
import { CreatedWordsContext } from "./CreatedWordsProvider";
import "./CreatedWords.css";
import { useHistory } from "react-router-dom";

export const CreatedWordsList = () => {
  const {
    createdwords,
    getCreatedWords,
    updateCreatedWords,
    deleteCreatedWords,
  } = useContext(CreatedWordsContext);
  const history = useHistory();

  // Initialization effect hook -> Go get createdword data
  useEffect(() => {
    getCreatedWords();
  }, []);

  return (
    <section
      style={{ marginTop: "2rem" }}
      className="createdwords_list fadeInDown"
    >
      <h2>My Created Words</h2>
      <button
        onClick={() => history.push("/createdwords/create")}
        className="button fadeInDown"
      >
        Define a New Word
      </button>
      <div className="fadeInDown">
        {createdwords.map((createdword) => (
          <div
            className="createdword"
            id={`createdword--${createdword.id}`}
            key={createdword.id}
          >
            <div className="createdword__word">
              <u>Word:</u> {createdword.word}
            </div>
            <div className="createdword__pronunciation">
              {" "}
              <u>Pronunciation:</u> {createdword.pronunciation}{" "}
            </div>
            <div className="createdword__definition">
              {" "}
              <u>Definition:</u> {createdword.definition}
            </div>
            <div className="createdword__partOfSpeech">
              {" "}
              <u>Part of speech:</u> {createdword.partOfSpeech}{" "}
            </div>
            <div className="createdword__example">
              {" "}
              <u>Example:</u> {createdword.example}{" "}
            </div>
            <div class="editButtonAndDeleteButton__container">
              <div className="editCreatedWords__button">
                <button
                  className="btn btn-3"
                  onClick={() =>
                    history.push(`/createdwords/edit/${createdword.id}`)
                  }
                  className="button editCreatedWords__button"
                >
                  Edit
                </button>
              </div>

              <button
                onClick={() => deleteCreatedWords(createdword.id)}
                className="deleteCreatedWords__button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
