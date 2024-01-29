import commaPrimary from "assets/img/static/shape/comma_primary.png";
import commaSecondary from "assets/img/static/shape/comma_secondary.png";
import RoundIcon from "assets/img/static/icon/roundIcon.png";
const ChooseCard = ({ theme, bgPic, title, desc, link }) => {
  return (
    <div className="choose-card">
      <img
        src={theme === "primary" ? commaPrimary : commaSecondary}
        alt="comma"
        className="choose-card-comma"
      />

      <div className={`choose-card-inner bgPic-${bgPic}`}>
        <div className="choose-card-header">
          <img src={RoundIcon} alt="round logo" />
          <div className="brand">
            <h3>Hamilton</h3>
            <p>@hamilton_telecom</p>
          </div>
        </div>
        <div className="choose-card-content">
          <h3 style={{ color: '#FBC13C' }}>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseCard;
