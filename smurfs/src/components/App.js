import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getSmurfs } from '../actions';
import { addSmurf } from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state= {
    name: '',
    age: '',
    height: ''
  }

componentDidMount() {
  this.props.getSmurfs();
}

handleChanges = e => {
  this.setState ({
    ...this.state,
    [e.target.name]: e.target.value
  });
};

addSmurf = (e) => {
  e.preventDefault();
  this.props.addSmurf(this.state);
  this.setState({ name:'', age: '', height: ''})
}


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => (
          <div key={smurf.name}>
          <h2>{smurf.name}</h2>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
        ))}
          <form onSubmit ={this.addSmurf}>
            <input
            type = 'text'
            name = 'name'
            value = {this.state.name}
            onChange = {this.handleChanges}
            placeholder = 'name'
            />
            <input
             type = 'number'
             name = 'age'
             value = {this.state.age}
             onChange = {this.handleChanges}
             placeholder = 'age'
            />
            <input
             type = 'text'
             name = 'height'
             value = {this.state.height}
             onChange = {this.handleChanges}
             placeholder = 'height'
            />
            <button>Add Smurf</button>
            </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error
 })

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
 )(App);
