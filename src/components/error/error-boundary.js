import {Component} from 'react';
import ErrorIndicator from './error-indicator';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator error={this.state.error}/>;
    }
    return this.props.children;
  }
}
