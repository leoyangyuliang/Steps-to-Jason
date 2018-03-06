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
      projects: []
    }

  }


  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'step 1',
        dictionary: 'buying'
      },
      {
        id:uuid.v4(),
        title: 'step 2',
        dictionary: 'something'
      }
    ]});

  }

  componentWillMount(){
    this.getProjects();
  }

  componentDidMount(){

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
  }


  render() {
          console.log(this.state.projects);
    return (
      <div className="App">
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <PropertiesHolder addProject={this.handleAddProject.bind(this)}/>
        <hr />
      </div>
    );
  }
}

export default App;
