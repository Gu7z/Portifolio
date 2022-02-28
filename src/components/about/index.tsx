import React from "react";
import { BiCloudDownload } from "react-icons/bi";
import PDFFile from "../../resume/cv.pdf";
import "./style.css";

const About: React.FC = () => {
  return (
    <section className="about" id="About">
      <div className="about_me">
        <h3>About Me</h3>
      </div>
      <div className="informations">
        <div>
          <img
            className="user_profile_image_about"
            src="https://avatars.githubusercontent.com/u/48556195?v=4"
            alt="User Profile"
          />
        </div>
        <div className="informations_content">
          <div>
            <h2>Oie,</h2>
            <p className="color_grey">
              Eu sou Gustavo Ferri, desenvolvedor Web! Tenho bastante
              experiencia no ecosistema javascript. Também gosto muito de
              customização e configuração de projetos!
            </p>
          </div>
          <div className="sensitive_information">
            <div className="data_col_1">
              <div className="data up">
                <p>Nome: &nbsp;</p>
                <p className="color_grey">Gustavo Ferri</p>
              </div>
              <div className="data down">
                <p>Nascimento: &nbsp;</p>
                <p className="color_grey">18 Outubro, 1999</p>
              </div>
            </div>
            <div className="data_col_2">
              <div className="data up">
                <p>Onde Moro: &nbsp;</p>
                <p className="color_grey">Campo Grande, MS</p>
              </div>
              <div className="data down">
                <p>Email: &nbsp;</p>
                <p className="color_grey">gustavoferri13@gmail.com</p>
              </div>
            </div>
          </div>

          <a
            className="btn_download_cv"
            href={PDFFile}
            download="CV gustavo ferri.pdf"
          >
            <BiCloudDownload size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
