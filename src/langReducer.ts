import { SET_LANGUAGE, LangAction, LangState } from "./types";

const localstorageLan = localStorage.getItem("language");

const initialState: LangState = {
  language: localstorageLan ? localstorageLan : "EN",
};

export const langReducer = (state = initialState, action: LangAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
