import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/loyouts/Navbar";
import "./App.css";
import axios from "axios";
import UsersList from "./components/loyouts/users_list";
import Search from "./components/loyouts/Search";
import Alert from "./components/loyouts/alert";
import About from "./components/loyouts/About";
import SingleUser from "./components/loyouts/SingleUser";

class App extends Component {
  state = {
    title: " Github Finder",
    icon: "fab fa-github",
    users: [],
    singleuser: {},
    repos: [],
    loading: false,
    search: "",
    error: null,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const datas = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: datas.data, loading: false });
  //   console.log(datas.data);
  // }
  searchuser = async (text) => {
    // console.log(text);
    this.setState({ loading: true });
    const datas = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(datas.data.items);
    this.setState({ users: datas.data.items, loading: false });
  };

  getsingleuser = async (username) => {
    this.setState({ loading: true });
    const datas = await axios.get(
      `https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(datas.data);
    this.setState({ singleuser: datas.data, loading: false });
  };

  getuserrepos = async (username) => {
    this.setState({ loading: true });
    const datas = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(datas.data);
    this.setState({ repos: datas.data, loading: false });
  };

  clearuser = () => {
    this.setState({ users: [] });
  };
  seterror = (msg, type) => {
    this.setState({ error: { msg, type } });
  };
  unseterror = () => {
    this.setState({ error: null });
  };
  render() {
    // return React.createElement(
    //   "div",
    //   { calssName: "App" },
    //   React.createElement("h1", null, "Hello")
    // );
    return (
      <Router>
        <div className="App">
          <Navbar state={this.state} />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={this.state.error} />
                    <Search
                      searchitems={this.searchuser}
                      clearuser={this.clearuser}
                      showclear={this.state.users.length > 0 ? true : false}
                      seterror={this.seterror}
                      unseterror={this.unseterror}
                    ></Search>
                    <UsersList
                      state={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <SingleUser
                    {...props}
                    getsingleuser={this.getsingleuser}
                    singleuser={this.state.singleuser}
                    repos={this.state.repos}
                    getuserrepos={this.getuserrepos}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
