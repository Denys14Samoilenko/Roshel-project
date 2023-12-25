import { cardsInfo } from "../../helpers/constants";
import { ContactsCard } from "../ContactsCard";
import "./ContactUs.scss";

export const ContactUs = () => {
  return (
    <section className="section contacts">
      <div className="overlay"></div>
      <div className="container">
        <div className="contacts__content">
          <h2 className="section__title contacts__title">
            Have Questions? We Have answers!
          </h2>
          <p className="section__description">
            If you want to inquire about our services, make an appointment or
            have any questions about what we do, just fill out the form below
            and we will reach out to you in the next 24 hours!
          </p>
          <form action="#" className="contacts__form form-control">
            <input
              className="input"
              type="text"
              name=""
              id=""
              placeholder="Enter your name"
            />
            <input
              className="input"
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <textarea
              className="textarea"
              name=""
              id=""
              rows={8}
              placeholder="Enter tour message"
            />
            <button
              className="button button-primary"
              onClick={(e) => e.preventDefault()}
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="row">
            {cardsInfo.map((cardInfo) => {
              return (
                <div
                  key={cardInfo.id}
                  className="column width-1-1 width-1-2-sm width-1-3-md width-1-4-lg"
                >
                  <ContactsCard cardInfo={cardInfo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
