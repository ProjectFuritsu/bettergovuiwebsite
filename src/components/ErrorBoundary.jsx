import { Alert } from "bettergovregiondavaoui";
import { Component } from "react";

/** Keeps one broken example from taking the whole page down with it. */
export class ErrorBoundary extends Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error };
    }

    render() {
        if (this.state.error) {
            return (
                <Alert color="danger" title="This example didn't load">
                    {String(this.state.error.message ?? this.state.error)}
                </Alert>
            );
        }
        return this.props.children;
    }
}
