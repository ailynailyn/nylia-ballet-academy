import { React, Component } from "react";
import "./Curtain.css";
import $ from "jquery";

export default class Curtain extends Component {
  componentDidMount() {
    $(document).scroll(function () {
      if ($(document).scrollTop() > 320) {
        $(".main").addClass("active");
        $(".reveal-main").addClass("activetwo");
      } else {
        $(".main").removeClass("active");
        $(".reveal-main").removeClass("activetwo");
      }
    });
  }

  render() {
    return (
      <div>
        <div className="curtain"></div>
        <div className="reveal-main"></div>
        <div className="main">
          <h1>Curtain Content</h1>
        </div>
      </div>
    );
  }
}

// export default Curtain;
