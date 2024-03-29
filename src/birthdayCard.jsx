import React from "react";
import "./birthday.css";

const birthdayCard = () => {
  return (
    <>
      <div className="birthdayCard">
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY bonkers</h3>
          <p>Lieber Sascha,</p>
          <p>
            herzlichen Glückwunsch zum Geburtstag! Ich hoffe du hast ein geiles
            Geburtstags Wochenende und fährst ordentlich Fahrrad. Vieleicht
            können wir ja mal ein Tour zusammen machen. Feier schön!
          </p>
          <p className="name">Freddy</p>
        </div>
      </div>
    </>
  );
};

export default birthdayCard;
