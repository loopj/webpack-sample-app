import bugsnag from 'bugsnag-js'
window.bugsnagClient = bugsnag({
    apiKey: 'b83218f185ed61be5ab3ec6706a0d8bb',
    beforeSend: (report) => {
        report.stacktrace = report.stacktrace.map(stackframe => {
            stackframe.inProject = !/\/node_modules\//.test(stackframe.file)

            return stackframe
        })
    },
})

import React from 'react';
import ReactDOM from 'react-dom';
import createPlugin from 'bugsnag-react'

import './index.css';
import App from 'components/app';

const ErrorBoundary = bugsnagClient.use(createPlugin(React))
ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
    document.getElementById('app')
);