import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectItem extends Component {
  deleteProject(id,e){
    this.props.onDelete(id);
    e.preventDefault();
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.index}</strong>: {this.props.project.dictionary}, Title: {this.props.project.title}  
        <a href="" onClick={this.deleteProject.bind(this, this.props.project.id)}> X </a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.PropTypes.object,
  onDelete: PropTypes.PropTypes.func
}

export default ProjectItem;
