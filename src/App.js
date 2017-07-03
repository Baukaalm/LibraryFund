import React from "react";
import { Route } from "react-router-dom";

import LibraryHeader from "./components/library-header";
import LibraryMenu from "./components/library-menu";
import LibraryHome from "./components/library-home";
import LibraryLists from "./components/library-lists";
import Dialog from "./components/sendFormModal";

import withLibraryCrud from "./hoc/library-crud";


const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    textAlign: "center"
  }
};


import "./App.css";

const App = ({ data, create, remove }) => {
  return (
    <div>
      <LibraryHeader />
      <div className="container">
        <LibraryMenu/>
        <div className="lists">
          <Route exact path="/" component={LibraryHome} />{" "}
          {Object.keys(data).map((category, i) =>
            <Route
              key={i}
              path={`/${category}`}
              component={() =>
                <LibraryLists
                  category={category}
                  lists={data}
                  onRemove={remove}
                />}
            />
          )}
        </div>
      </div>
      <Dialog
        data={data}
        add={create}
        style={customModalStyles}
        onAfterOpen={() => console.log("On After Open")}
        onRequestClose={() => console.log("On Request Close")}
      />
    </div>
  );
};

export default withLibraryCrud(App);
