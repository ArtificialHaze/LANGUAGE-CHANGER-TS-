import { useCallback, useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./langActions";
import { translate } from "./lan";
import { RootState } from "./ind";

interface Props {
  fixed?: boolean;
  transparent?: boolean;
}

const Header = ({ fixed, transparent }: Props) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownElement = useRef<HTMLUListElement>(null);

  let headerClass = "header";

  if (fixed) {
    headerClass += " header--fixed";
  }

  if (transparent) {
    headerClass += " header--transparent";
  }

  const handleClickOutside = useCallback(
    (e: any) => {
      if (
        showDropDown &&
        e.target.closest(".dropdown") !== dropdownElement.current
      ) {
        setShowDropDown(false);
      }
    },
    [showDropDown, setShowDropDown, dropdownElement]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropDown(false);
    dispatch(setLanguage(value));
  };

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header__brand">
          <h1>
            <Link to={"/"}>React</Link>
          </h1>
        </div>
        <div className="header__nav">
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropDown(true)}>
              {language}
            </p>
            {showDropDown && (
              <ul className="dropdown" ref={dropdownElement}>
                <li onClick={() => chooseLanguageHandler("EN")}>EN</li>
                <li onClick={() => chooseLanguageHandler("DE")}>DE</li>
                <li onClick={() => chooseLanguageHandler("GE")}>GE</li>
              </ul>
            )}
          </div>
          <ul className="header__nav_menu">
            <li>
              <NavLink to={"/"}>{translate("home", language)}</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>{translate("about", language)}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
