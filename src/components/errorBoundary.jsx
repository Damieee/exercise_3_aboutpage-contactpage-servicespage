import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors and update state
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log the error to a logging service here
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // Display a fallback UI when an error occurs
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Error info: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    // If no error occurred, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
