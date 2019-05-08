import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../services/sagas';
import store from '../../store';

function App() {
  return (
    <div className="App">
      <button onClick={() => store.dispatch({ type: 'GET_USERS' })}>Click Me</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchUsers })(App);
