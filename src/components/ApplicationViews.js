import React from "react";
import { Route } from "react-router-dom";
import { CreatedWordsProvider } from "./CreatedWords/CreatedWordsProvider";
import { CreatedWordsList } from "./CreatedWords/CreatedWordsList";
import { CreatedWordsForm } from "./CreatedWords/CreatedWordsForm";
import { CreatedWordsDetail } from "./CreatedWords/CreatedWordsDetail";

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
          <Route exact path="/createdwords">
            <CreatedWords />
          </Route>
        </CreatedWordsProvider>
      </main>
    </>
  );
};
