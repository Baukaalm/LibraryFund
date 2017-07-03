import React from "react";
import { openDialog } from "redux-dialog";
import { connect } from "react-redux";

const LibraryHeader = ({ dispatch }) => {
  return (
    <div className="header">
      <div className="header__logo">Библиотечный фонд</div>
      <a
        onClick={() => dispatch(openDialog("SEND__FORM"))}
        className="header__link">
        Добавить публикацию ⇗
      </a>
    </div>
  );
};

export default connect()(LibraryHeader);
