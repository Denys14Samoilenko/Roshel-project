import { Link } from "react-router-dom";
import { ContactInfo } from "../../types/ContactInfo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactsCard.scss";

type Props = {
  cardInfo: ContactInfo;
};

export const ContactsCard: React.FC<Props> = ({ cardInfo }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="contacts-card" data-aos="flip-down">
      <i className={`${cardInfo.logo} contacts-card__icon`}></i>
      <div className="contacts-card__body">
        <h4 className="contacts-card__name">{cardInfo.name}</h4>
        <Link
          to={cardInfo.href}
          className="contacts-card__link"
          target="_blank"
        >
          {cardInfo.info}
        </Link>
      </div>
    </div>
  );
};
