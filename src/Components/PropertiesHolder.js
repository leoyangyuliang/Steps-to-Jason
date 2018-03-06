import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddProject from './AddProject';
import './components.css';


class PropertiesHolder extends Component {
  constructor(){
    super();
    this.state = {
      dictionary: [],
    }
  }

  componentWillMount(){

  this.setState({
    dictionaryOption: [
      "pending",
      "buying",
      "selling"
    ]
  });
  }

  handleAddProject1(project){

    this.props.addProject(project);
    console.log(project);
  }

  showNextProperty(){
    console.log("yo");
  }

  render() {
    return (
      <div>
        <AddProject ref="child1" addProject1={this.handleAddProject1.bind(this)} dictionary ={this.state.dictionaryOption}  />
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
