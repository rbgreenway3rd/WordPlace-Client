import React, { useContext, useEffect, useState } from "react";
import { CreatedWordsContext } from "./CreatedWordsProvider";
// import { ProfileContext } from "../profiles/ProfilesProvider";
import "./CreatedWords.css";
// import "./CreatedWordsForm.css";
import { useHistory, useParams } from "react-router-dom";

export const CreatedWordsForm = (props) => {
  const history = useHistory();

  const {
    addCreatedWords,
    updateCreatedWords,
    getCreatedWords,
    getCreatedWordsById,
  } = useContext(CreatedWordsContext);

  const [createdWord, setCreatedWords] = useState({
    user: 0,
    word: "",
    pronunciation: "",
    definition: "",
    partOfSpeech: "",
    example: "",
  });

  const handleControlledInputChange = (event) => {
    const newCreatedWords = { ...createdWord };
    newCreatedWords[event.target.id] = event.target.value;
    setCreatedWords(newCreatedWords);
  };
  const { createdWordId } = useParams();

  useEffect(() => {
    getCreatedWords();
  }, []);

  useEffect(() => {
    if ("createdWordId" in props.match.params) {
      getCreatedWordsById(props.match.params.createdWordId).then(
        (createdWord) => {
          setCreatedWords({
            user: createdWord.user,
            word: createdWord.word,
            pronunciation: createdWord.pronunciation,
            definition: createdWord.definition,
            partOfSpeech: createdWord.partOfSpeech,
            example: createdWord.example,
          });
        }
      );
    }
  }, [props.match.params.createdWordId]);

  const handleClickSaveCreatedWords = (event) => {
    event.preventDefault();
    if (createdWord.word === "") {
      window.alert("Please Fill Out All Fields");
    } else {
      let newCreatedWords = {
        word: createdWord.word,
        pronunciation: createdWord.pronunciation,
        definition: createdWord.definition,
        partOfSpeech: createdWord.partOfSpeech,
        example: createdWord.example,
      };
      addCreatedWords(newCreatedWords);
      history.push("/myprofile");
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  // const handleClickSaveCreatedWords = (event) => {
  //   if (createdWord.word === "") {
  //     window.alert("Please Fill Out All Required Fields");
  //   } else {
  //     //disable the button - no extra clicks
  //     setIsLoading(true);
  //     if (createdWordId) {
  //       //PUT - update
  //       updateCreatedWords({
  //         word: createdWord.word,
  //         pronunciation: createdWord.pronunciation,
  //         definition: createdWord.definition,
  //         partOfSpeech: createdWord.partOfSpeech,
  //         example: createdWord.example,
  //       }).then(() => history.push(`/myprofile`));
  //     } else {
  //       //POST - add
  //       let newCreatedWords = {
  //         word: createdWord.word,
  //         pronunciation: createdWord.pronunciation,
  //         definition: createdWord.definition,
  //         partOfSpeech: createdWord.partOfSpeech,
  //         example: createdWord.example,
  //       };
  //       addCreatedWords(newCreatedWords);
  //       history.push("/myprofile");
  //     }
  //   }
  // };

  return (
    <form className="createdWordForm">
      <h2>Define a New Word</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="word">New Word:</label>
          <input
            type="text"
            id="word"
            required
            autoFocus
            className="form-control"
            placeholder="Type in your new word here"
            value={createdWord.word}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="pronunciation">Pronunciation: </label>
          <input
            type="text"
            id="pronunciation"
            optional
            autoFocus
            className="form-control"
            placeholder=" * Optional"
            value={createdWord.pronunciation}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Definition: </label>
          <input
            type="text"
            id="definition"
            required
            autoFocus
            className="form-control"
            placeholder="Type in your new word's definition here"
            value={createdWord.definition}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Part of Speech: </label>
          <input
            type="text"
            id="partOfSpeech"
            optional
            autoFocus
            className="form-control"
            placeholder=" * Optional"
            value={createdWord.partOfSpeech}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Example: </label>
          <input
            type="text"
            id="example"
            required
            autoFocus
            className="form-control"
            placeholder="Write a short example utilizing your new word here"
            value={createdWord.example}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      {"createdWordId" in props.match.params ? (
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            updateCreatedWords({
              id: props.match.params.createdWordId,
              word: createdWord.word,
              pronunciation: createdWord.pronunciation,
              definition: createdWord.definition,
              partOfSpeech: createdWord.partOfSpeech,
              example: createdWord.example,
            }).then(() => props.history.push("/myprofile"));
          }}
        >
          Save Edits
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={handleClickSaveCreatedWords}
        >
          Save New Word
        </button>
      )}
    </form>
  );
};
