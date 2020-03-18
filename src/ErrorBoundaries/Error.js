import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
      if (this.state.hasError){
          return(
            <div>
              <h1>You have encountered an error. </h1>
              <p>Please refresh your page</p>
            </div>
          )
      }
    return this.props.children;
  }
}