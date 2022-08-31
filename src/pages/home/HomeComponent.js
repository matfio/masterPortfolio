import React, { Component } from "react";
import Greeting from "../../containers/greeting/Greeting";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Greeting theme={this.props.theme} />
        {
          //<Skills theme={this.props.theme} />
        }
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
