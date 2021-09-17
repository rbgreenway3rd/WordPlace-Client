import React, { useState } from "react";

export const CreatedWordsContext = React.createContext();

export const CreatedWordsProvider = (props) => {
  const [createdwords, setCreatedWords] = useState([]);

  const getCreatedWords = () => {
    return fetch("http://localhost:8000/createdwords", {
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setCreatedWords);
  };

  const getCreatedWordsById = (id) => {
    return fetch(`http://localhost:8000/createdwords/${id}?_expand=users`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
      },
    }).then((res) => res.json());
  };
  const addCreatedWords = (createdwords) => {
    return fetch("http://localhost:8000/createdwords", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdwords),
    }).then(getCreatedWords);
  };

  const updateCreatedWords = (createdwords) => {
    return fetch(`http://localhost:8000/createdwords/${createdwords.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdwords),
    }).then(getCreatedWords);
  };

  const deleteCreatedWords = (createdwordsId) => {
    return fetch(`http://localhost:8000/createdwords/${createdwordsId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
    }).then(getCreatedWords);
  };

  return (
    <CreatedWordsContext.Provider
      value={{
        createdwords,
        addCreatedWords,
        getCreatedWords,
        getCreatedWordsById,
        updateCreatedWords,
        deleteCreatedWords,
      }}
    >
      {props.children}
    </CreatedWordsContext.Provider>
  );
};
