import React, { useState } from "react";

export const FavoritedWordsContext = React.createContext();

export const FavoritedWordsProvider = (props) => {
  const [favoritedwords, setFavoritedWords] = useState([]);
  const [result, setResult] = useState([]);

  // const getWordFromAPI = (word) => {
  //   return fetch(
  //     `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=4f56b21a-9585-4fcf-a279-f8571f143e0d`
  //   ).then((res) => res.json())
  //   .then((res) =>);
  // };

  const getFavoritedWords = () => {
    return fetch("http://localhost:8000/favoritedwords", {
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setFavoritedWords);
  };

  const getFavoritedWordsById = (id) => {
    return fetch(`http://localhost:8000/favoritedwords/${id}?_expand=users`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
      },
    }).then((res) => res.json());
  };

  const addFavoritedWords = (favoritedwords) => {
    return fetch("http://localhost:8000/favoritedwords", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoritedwords),
    }).then(getFavoritedWords);
  };

  const updateFavoritedWords = (favoritedwords) => {
    return fetch(`http://localhost:8000/favoritedwords/${favoritedwords.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoritedwords),
    }).then(getFavoritedWords);
  };

  const deleteFavoritedWords = (favoritedwordsId) => {
    return fetch(`http://localhost:8000/favoritedwords/${favoritedwordsId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("wordplace_token")}`,
        "Content-Type": "application/json",
      },
    }).then(getFavoritedWords);
  };

  return (
    <FavoritedWordsContext.Provider
      value={{
        favoritedwords,
        // getWordFromAPI,
        addFavoritedWords,
        getFavoritedWords,
        getFavoritedWordsById,
        updateFavoritedWords,
        deleteFavoritedWords,
      }}
    >
      {props.children}
    </FavoritedWordsContext.Provider>
  );
};
