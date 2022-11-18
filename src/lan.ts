import en from "./en.json";
import de from "./de.json";
import ge from "./ge.json";

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if (language === "EN") {
    langData = en;
  } else if (language === "DE") {
    langData = de;
  } else if (language === "GE") {
    langData = ge;
  }

  return langData[key];
};
