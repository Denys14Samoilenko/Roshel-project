import classNames from "classnames";
import { ReactNode } from "react";
import "./GalleryModal.scss";

type Props = {
  active: boolean;
  setActive: (value: boolean) => void;
  children: ReactNode;
};

export const GalleryModal: React.FC<Props> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={classNames("modal", { active })}
      onClick={() => setActive(false)}
    >
      <div
        className={classNames("modal__content", { active })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          type="button"
          className="modal__button button button-primary"
          onClick={() => {
            setActive(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
