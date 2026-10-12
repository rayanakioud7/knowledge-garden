import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "var(--paper, #ffffff)",
          color: "var(--ink, #111113)",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}>
          <div style={{
            maxWidth: "600px",
            width: "100%",
            border: "1px solid var(--paper-line, #e4e4e7)",
            padding: "2rem",
            backgroundColor: "var(--paper, #ffffff)",
            borderRadius: "0px",
          }}>
            <span style={{
              display: "inline-block",
              padding: "0.25rem 0.5rem",
              background: "var(--paper-shade, #f4f4f5)",
              color: "var(--ink, #111113)",
              border: "1px solid var(--paper-line2, #d4d4d8)",
              borderRadius: "0px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            }}>
              Application Error
            </span>
            <h1 style={{ fontSize: "1.25rem", margin: "1rem 0 0.5rem", fontWeight: 600, color: "var(--ink)" }}>
              Something went wrong while rendering this page
            </h1>
            <p style={{ fontSize: "0.875rem", color: "var(--ink-mute, #71717a)", marginBottom: "1rem" }}>
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            {this.state.error?.stack && (
              <pre style={{
                background: "var(--paper-shade, #f4f4f5)",
                padding: "0.75rem",
                borderRadius: "0px",
                border: "1px solid var(--paper-line, #e4e4e7)",
                fontSize: "0.75rem",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                color: "var(--ink, #27272a)",
                maxHeight: "200px"
              }}>
                {this.state.error.stack}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: "1.25rem",
                padding: "0.5rem 1rem",
                background: "var(--ink, #18181b)",
                color: "var(--paper, #ffffff)",
                border: "1px solid var(--ink, #18181b)",
                borderRadius: "0px",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 500
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
