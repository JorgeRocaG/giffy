import React, { useState } from "react";

import "./Fav.css";
import useUser from "hooks/useUser";
import Modal from "components/Modal/Modal";
import Login from "components/Login/Login";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);

  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove gif from favorites", "💔"]
    : ["Add gif to favorites", "❤️"];

  return (
    <>
      <button className="Fav" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
    </>
  );
}
