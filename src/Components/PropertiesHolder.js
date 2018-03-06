import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddProject from './AddProject';
import './components.css';
import uuid from 'uuid';

class PropertiesHolder extends Component {
  constructor(){
    super();
    this.state = {
      projects : [],
      dictionary: [],
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'step 1',
        dictionary: 'buying'
      },
    ]
    });

  this.setState({
    dictionary: [
      "pending",
      "buying",
      "selling"
    ]
  });
  }

  handleAddProject1(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
    this.props.addProject(this.state.projects);

    console.log(project);
    console.log(this.state.projects);
  }

  showNextProperty(){
    console.log("yo");
  }

  render() {
    return (
      <div>
        <AddProject ref="child1" addProject1={this.handleAddProject1.bind(this)} dictionary ={this.state.dictionary}  />
        <p className ="goNextButton"><button onClick = {()=>this.refs.child1.handleSubmit()}>Next Step</button></p>
      </div>
    );

  }
}

PropertiesHolder.propTypes = {
  projects: PropTypes.PropTypes.object,
  addProject: PropTypes.PropTypes.func
}

export default PropertiesHolder;
