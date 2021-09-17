import React, { useState } from "react";

export const FavoritedWordsContext = React.createContext();

export const FavoritedWordsProvider = (props) => {
  const [favoritedwords, setFavoritedWords] = useState([]);

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
