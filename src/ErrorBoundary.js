// mostly took this from the React docs
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        // I log this to Sentry, Azure Monitor, New Relic, 
    console.error("ErrorBoundary caught an error, error, info")
    }
    render() {
        if(this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click here to go back to the homepage</Link>
                </h2>
            )
        }
        // children is whatevet is passed into <ErrorBoundary></ErrorBoundary>
        return this.props.children;
    }
}

export default ErrorBoundary;