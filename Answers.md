# Answers

1. What is React JS and what problems does it solve?

One main problem that React.js solves is improved performance. Because React stores data on the virtual DOM and only updates what is changed, it makes DOM updates much faster. 

 Support your answer with concepts introduced in class and from your personal research on the web.

1. Describe component state.

State is an object that represents the parts of the app that c an change. If you want your app to be interactive, it will involve state.

1. Describe props.

Props are properties that are used to pass data from one component to another, from parent to child. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are basically anything that affects something outside of the scope of the current function that’s being executed. You pass props to state using useState hooks. Whenever props change, you synch them to state using useEffect. 
