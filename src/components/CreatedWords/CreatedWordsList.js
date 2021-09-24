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
    <section>
      <button
        onClick={() => history.push("/createdwords/create")}
        className="button fadeInDown"
        id="defineANewWord__button"
        style={{
          marginTop: "2.5em",
          marginRight: "2.5em",
        }}
      >
        Define a New Word
      </button>
      <section
        className="createdwords_list fadeInDown"
        // id="formContent"
      >
        <section id="formHeader" className="fadeInDown">
          <h2 id="myCreatedWords__header">My Created Words</h2>
        </section>
        <div>
          {createdwords.map((createdword) => (
            <div
              className="createdword"
              id={`createdword--${createdword.id}`}
              key={createdword.id}
            >
              <div className="createdword__word">
                <u> {createdword.word} </u>
              </div>
              <section class="createdword__info">
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
                <div
                  class="editButtonAndDeleteButton__container"
                  style={{
                    marginTop: "0.7em",
                    marginBottom: "0em",
                  }}
                >
                  <div className="editCreatedWords__button">
                    <button
                      className="btn btn-3"
                      onClick={() =>
                        history.push(`/createdwords/edit/${createdword.id}`)
                      }
                      className="button editCreatedWords__button"
                      style={{
                        float: "left",
                      }}
                    >
                      Edit
                    </button>
                  </div>

                  <button
                    onClick={() => deleteCreatedWords(createdword.id)}
                    className="deleteCreatedWords__button"
                    style={{
                      float: "right",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
