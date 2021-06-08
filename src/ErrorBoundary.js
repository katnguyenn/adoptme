// mostly took this from the React docs
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        // I log this to Sentry, Azure Monitor, New Relic, 
        console.error("ErrorBoundary caught an error", error, info);
        // Avoid not redirecting on immediate page load errors
        setTimeout(() => this.setState({ redirect: true }), 5000)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        } else if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click here to go back to the homepage or wait five seconds.</Link>
                </h2>
            )
        }
        // children is whatevet is passed into <ErrorBoundary></ErrorBoundary>
        return this.props.children;
    }
}

export default ErrorBoundary;