import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };

    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h4>Something went wrong.</h4>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;