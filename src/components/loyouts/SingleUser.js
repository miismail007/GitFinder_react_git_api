import React, { Component, Fragment } from "react";
import { Spinner } from "./Spinner";
import { Link } from "react-router-dom";
import Repos from "./Repos";

export class SingleUser extends Component {
  componentDidMount() {
    this.props.getsingleuser(this.props.match.params.login);
    this.props.getuserrepos(this.props.match.params.login);
  }
  render() {
    const {
      login,
      avatar_url,
      bio,
      company,
      html_url,
      location,
      blog,
      name,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.singleuser;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-circle-left"></i> Back to Search
        </Link>
        Hireable:{" "}
        {hireable || hireable != null ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            ></img>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a
              href={`${html_url}`}
              target="_blank"
              className="btn btn-dark my-1"
            >
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Blog:</strong>{" "}
                    <a href={`https://${blog}`} target="_blank">
                      {blog}
                    </a>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <div className="card">
          <h3>Recent Repositories</h3>
          <Repos repos={this.props.repos} />
        </div>
      </Fragment>
    );
  }
}

export default SingleUser;
