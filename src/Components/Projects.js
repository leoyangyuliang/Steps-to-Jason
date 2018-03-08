import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h2>Steps</h2>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.PropTypes.array,
  onDelete: PropTypes.PropTypes.func
}

export default Projects;
