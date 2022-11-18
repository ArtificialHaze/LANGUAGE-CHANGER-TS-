import { LangAction, SET_LANGUAGE } from "./types";

export const setLanguage = (language: string): LangAction => {
  localStorage.setItem("language", language);
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
