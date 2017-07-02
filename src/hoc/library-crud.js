import React from 'react'

// API and LS
import PRODUCTS from '../products'

function withLibraryCrud(Component) {
  class WithLibraryCrud extends React.Component {
    state = {
      data: []
    };

    componentDidMount() {
      this.get();
    }

    get = () => this.setState({data: PRODUCTS()})

    create = (category, data) => {
      const publications = this.state.data[category];
      publications.push(data)
      localStorage.setItem('products', JSON.stringify(this.state.data))
      this.setState(publications);

    };

    remove = (id, category) => {
      const dataCategory = this.state.data[category].filter(item => item.id !== id);
      this.state.data[category] = dataCategory;
      localStorage.setItem('products', JSON.stringify(this.state.data))
      this.setState(dataCategory);

    }

    render() {
      return <Component data={this.state.data} get={this.get} create={this.create} remove={this.remove} {...this.props}/>
    }
  }

  WithLibraryCrud.displayName = `WithLibraryCrud(${Component.displayName || Component.name || 'Component'})`;

  return WithLibraryCrud;
}

export default withLibraryCrud;
