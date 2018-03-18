import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import Stepholder from './Components/Stepholder';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
  }
}



  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
    this.refs.propertiesHolders.deleteLastProperty(id);
  }


  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <Stepholder
                ref="propertiesHolders"
                addProject={this.handleAddProject.bind(this)}
                properties={this.state.properties}/>
        <hr />
      </div>
    );
  }
}

export default App;
