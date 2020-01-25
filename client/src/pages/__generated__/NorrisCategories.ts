/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NorrisCategories
// ====================================================

export interface NorrisCategories_categories {
  __typename: "Categories";
  id: string | null;
  name: string | null;
}

export interface NorrisCategories {
  categories: (NorrisCategories_categories | null)[] | null;
}
