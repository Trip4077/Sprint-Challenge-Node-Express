import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: [],
      actions: [],
      //SET INDEX TO PROJECT NUMBER 
      index: 1,
    }
  }
  
  componentDidMount() {
    if(this.state.index > 0) {
      axios.get(`http://localhost:5050/api/projects/${this.state.index}`)
            .then(res => {
              console.log(res)
              this.setState({ 
                  project: res.data,
                  actions: res.data.actions
                })
            })
            .catch(err => {
              console.log(err);
            });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.project.name}</h1>
        <h3>{this.state.project.description}</h3>
        <h4>Complete: {this.state.project.completed ? 'true' : 'false'}</h4>

        <h2>Actions:</h2>
        {this.state.actions.map(item => {
          return (
            <div key={Math.random()}>
              <h1>Project # {item.project_id}</h1>
              <h2>Desc: {item.description}</h2>
              <p>Notes: {item.notes}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
