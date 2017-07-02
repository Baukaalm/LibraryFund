import React, {Component} from 'react'
import reduxDialog, {closeDialog} from 'redux-dialog'
import {connect} from 'react-redux'
import {getRefValue} from '../helpers'

const addOne = (x) => x + 1

class sendForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const asset = {
      id:addOne(getRefValue(this)),
      name: this.refs.name.value,
      year: this.refs.year.value,
      count: this.refs.count.value,
      publisher: this.refs.publisher.value
    }
    this.props.add(this.refs.type.value, asset)
    this.props.dispatch(closeDialog('SEND__FORM'))
  }
    render() {
      return (
        <div>
          <div className="modal__title">
            Добавление побликации
          </div>
          <form className="modal__wrapper" onSubmit={this.handleSubmit}>
            <input required ref="name" className="modal__input" placeholder="Наименование" type="text"/>
            <input required ref="publisher" className="modal__input" placeholder="Издательство" type="text"/>
            <input required ref="count" className="modal__input" placeholder="Кол-во страниц" type="text"/>
            <input required ref="year" className="modal__input" type="text" placeholder="Дата выпуска"/>
            <select required ref="type" className="modal__input" placeholder="Тип" type="text">
              <option value="Books">Книга</option>
              <option value="Journals">Журнал</option>
              <option value="Booklets">Буклет</option>
            </select>
            <div className="modal__wrapper _btn">
              <button className="header__btn modal__btn">Отправить</button>
            </div>
          </form>
        </div>
      )
    }
  }

  const Dialog = reduxDialog({name: 'SEND__FORM'})(sendForm);

  export default connect()(Dialog)
