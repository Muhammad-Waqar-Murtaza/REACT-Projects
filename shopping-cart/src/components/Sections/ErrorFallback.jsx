import React from 'react'

export const ErrorFallback = ({error, resetErrorBoundary}) => {

    return (
        <div role="alert" style={{ display: "flex", paddingTop: "21%", justifyContent: "center" }}>
          <div>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        </div>
      );
}

// export default ErrorFallback