import React from "react";
import { Route } from "react-router-dom";
import { CreatedWordsProvider } from "./CreatedWords/CreatedWordsProvider";
import { CreatedWordsList } from "./CreatedWords/CreatedWordsList";
import { CreatedWordsForm } from "./CreatedWords/CreatedWordsForm";
import { CreatedWordsDetail } from "./CreatedWords/CreatedWordsDetail";
import { FavoritedWordsProvider } from "./FavoritedWords/FavoritedWordsProvider";
import { FavoritedWordsList } from "./FavoritedWords/FavoritedWordsList";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <CreatedWordsProvider>
          <FavoritedWordsProvider>
            <Route exact path="/myprofile">
              <FavoritedWordsList />
              <CreatedWordsList />
            </Route>
          </FavoritedWordsProvider>
        </CreatedWordsProvider>
      </main>
    </>
  );
};
