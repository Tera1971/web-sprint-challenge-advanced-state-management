1. What problem does the context API help solve?

Prop Drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions- changing the state by actions taken in by the reducer
reducer- takes previous state and an action and returns new state
store- only 1 with a root reducing function

There is only one store so single source

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global state and component is local state

application state is a useful place to store small amounts of often-used data that does not change from one user to another
component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. 
That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

context by far. It is sooo much simplier