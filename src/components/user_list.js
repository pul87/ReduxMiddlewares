import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company}</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        { this.props.users.map(this.renderUser.bind(this)) }
      </div>
    );
  };
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, actions)(UserList);
