import React, { useState } from "react";

import useUser from "hooks/useUser";
import Modal from "components/Modal/Modal";
import Login from "components/Login/Login";
import { FavComponent } from "./styles";

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

  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove gif from favorites", "💔"]
    : ["Add gif to favorites", "❤️"];

  return (
    <>
      <FavComponent onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </FavComponent>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
