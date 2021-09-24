import React from "react";
import { Route } from "react-router-dom";
import { CreatedWordsProvider } from "./CreatedWords/CreatedWordsProvider";
import { CreatedWordsList } from "./CreatedWords/CreatedWordsList";
import { CreatedWordsForm } from "./CreatedWords/CreatedWordsForm";
import { CreatedWordsDetail } from "./CreatedWords/CreatedWordsDetail";
import { FavoritedWordsProvider } from "./FavoritedWords/FavoritedWordsProvider";
import { FavoritedWordsList } from "./FavoritedWords/FavoritedWordsList";
import { HomePage } from "./home/HomePage";
import { Styles } from "./Styles.js";

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
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/myprofile">
              <div
                style={{
                  marginLeft: "8em",
                  display: "flex",
                  flexDirection: "row",
                  flex: "column",
                  alignContent: "center",
                }}
              >
                <FavoritedWordsList />
                <CreatedWordsList />
              </div>
            </Route>
            <Route
              exact
              path="/createdwords/create"
              render={(props) => <CreatedWordsForm {...props} />}
            />
            <Route
              exact
              path="/createdwords/edit/:createdWordId(\d+)"
              render={(props) => <CreatedWordsForm {...props} />}
            />
          </FavoritedWordsProvider>
        </CreatedWordsProvider>
      </main>
    </>
  );
};
