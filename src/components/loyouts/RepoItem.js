import React, { Component } from "react";

export class RepoItem extends Component {
  render() {
    return (
      <div className="card">
        <h3>
          <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
        </h3>
        <h6>Language: {this.props.repo.language}</h6>
      </div>
    );
  }
}

export default RepoItem;
