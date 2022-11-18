import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { translate } from "./lan";
import { RootState } from "./ind";

const About = () => {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <Fragment>
      <Header />
      <section className="about">
        <div className="container">
          <h1>{translate("about", language)}</h1>
          <img src={"[ABOUT_IMAGE_GOES_HERE]"} alt="About Image" />
          <h1>{translate("aboutUsText", language)}</h1>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
