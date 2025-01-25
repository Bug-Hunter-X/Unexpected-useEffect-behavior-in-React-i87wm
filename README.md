# Unexpected useEffect Behavior in React

This repository demonstrates an example of unexpected behavior with the `useEffect` hook in React.  The provided `MyComponent` uses `useEffect` without specifying dependencies. This leads to the effect running after every render, potentially causing an infinite render loop or unexpected side effects. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that addresses the issue.