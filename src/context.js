import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

// REDUCERS
const reducer = (state, action) => {
  switch (action.type) {
    //
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    // Adds the new Contact (payload) onto the contacts
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],

    // This dispatches an action to the reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // axios using aync/await
  async componentDidMount() {
    const res = await axios.get('https:/jsonplaceholder.typicode.com/users');

    this.setState({
      contacts: res.data
    });
  }

  // Provider allows Consumers to subscribe to context changes.
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Consumer is a React component that subscribes to context changes.
export const Consumer = Context.Consumer;
