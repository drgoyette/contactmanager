import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //  DELETE CONTACT ACTION (CORRECT WAY)
  // onDeleteClick = async (id, dispatch) => {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   dispatch({ type: 'DELETE_CONTACT', payload: id });
  // };

  // FOR PROJECT BECAUSE NOT REAL DB
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    // Using destructuring
    const { id, name, email, phone } = this.props.contact;
    const showContactInfo = this.state.showContactInfo;

    return (
      <Consumer>
        {value => {
          // GET CONTEXT INFO
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {/* CONTACT NAME - i.fas.fa-sort-down */}
                {name}
                {'  '}
                {/* TOGGLE SHOW Contact Info */}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-sort-down"
                  // Add a pointer
                  style={{ cursor: 'pointer' }}
                />
                {/* DELETE CONTACT - i.fas.fa-times */}
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {/* CONTACT INFO */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
