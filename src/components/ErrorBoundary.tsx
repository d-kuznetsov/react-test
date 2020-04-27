import React, { ErrorInfo } from "react";

interface Props {
  [prop: string]: any;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert(`${error}: ${errorInfo} `);
  }

  render() {
    if (this.state.hasError) {
      return <div className="ErrorBoundary">Error</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
