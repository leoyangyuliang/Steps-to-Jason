import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import PropertiesHolder from './Components/PropertiesHolder';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      properties:[],
      projects: [    {
            id:uuid.v4(),
            title: 'step 1',
            dictionary: 'buying'
          },
          {
            id:uuid.v4(),
            title: 'step 2',
            dictionary: 'something'
          }]
  }
}
  handleUpdateProperties(properties){
    this.setState({properties:properties});
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
    this.refs.propertiesHolders.deleteLastProperty();
  }


  render() {
    console.log(this.state.projects);
    return (
      <div className="App">
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <PropertiesHolder
                ref="propertiesHolders"
                addProject={this.handleAddProject.bind(this)}
                updateProperties={this.handleUpdateProperties.bind(this)}
                properties={this.state.properties}/>
        <hr />
      </div>
    );
  }
}

export default App;
