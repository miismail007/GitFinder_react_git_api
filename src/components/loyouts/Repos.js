import React, { Component } from "react";
import RepoItem from "./RepoItem";

export class Repos extends Component {
  render() {
    return this.props.repos.map((repo) => (
      <RepoItem key={repo.id} repo={repo} />
    ));
  }
}

export default Repos;
