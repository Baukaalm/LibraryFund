import React, { Component } from "react";
import reduxDialog, { closeDialog } from "redux-dialog";
import { connect } from "react-redux";
import { getRefValue, getRandomId } from "../helpers";

class sendForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const asset = {
      id: getRandomId(this.refs.name.value), // generate random id via MD5
      name: getRefValue(this, "name"),
      year: getRefValue(this, "year"),
      count: getRefValue(this, "count"),
      publisher: getRefValue(this, "publisher")
    };
    console.log(asset);
    this.props.add(this.refs.type.value, asset);
    this.props.dispatch(closeDialog("SEND__FORM"));
  }
  render() {
    return (
      <div>
        <div className="modal__title">Добавление побликации</div>
        <form className="modal__wrapper" onSubmit={this.handleSubmit}>
          <select  required ref="type" className="modal__input">
            <option defaultValue="Others" selected="Others" disabled>
              Виберите категорию
            </option>
            <option value="Books">Книги</option>
            <option value="Journals">Журналы</option>
            <option value="Booklets">Буклеты</option>
          </select>
          <input
            required
            ref="name"
            className="modal__input"
            placeholder="Наименование"
            type="text"
          />
          <input
            required
            ref="publisher"
            className="modal__input"
            placeholder="Издательство"
            type="text"
          />
          <input
            required
            ref="count"
            className="modal__input"
            placeholder="Кол-во страниц"
            type="text"
          />
          <input
            required
            ref="year"
            className="modal__input"
            type="text"
            placeholder="Дата выпуска"
          />
          <div className="modal__wrapper _btn">
            <button className="header__btn modal__btn">Отправить</button>
          </div>
        </form>
      </div>
    );
  }
}

const Dialog = reduxDialog({ name: "SEND__FORM" })(sendForm);

export default connect()(Dialog);
