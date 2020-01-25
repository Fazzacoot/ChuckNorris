/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getJoke
// ====================================================

export interface getJoke_joke {
  __typename: "Joke";
  id: string | null;
  category: string | null;
  iconUrl: string | null;
  url: string | null;
  value: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface getJoke {
  joke: getJoke_joke | null;
}

export interface getJokeVariables {
  category: string;
}
