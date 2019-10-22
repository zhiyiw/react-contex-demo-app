import React, { Component } from "react";
import ReactDOM from "react-dom";

class Child extends Component {
  render() {
    return (
      <div>
        <div>text from Child</div>
      </div>
    );
  }
}

class GrandParent extends Component {
  render() {
    return (
      <div>
        <div>text from GrandParent</div>
        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <div>text from parent</div>
        <div>
          <Child />
        </div>
      </div>
    );
  }
}

export default GrandParent;
