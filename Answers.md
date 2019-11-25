1. What problem does the context API help solve?

    Context API helps us manage the complexity of prop drilling. It allows us to store our data in a seperate object, and retrieve the data from that object when necessary.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions - Actions are an object that contains a type and a property. These manage functionality of code in Redux.
    reducers - A reducer takes in data from an action and updates the state of the application accordingly.
    store - The store is a centralized location for us to hold and access our data. It is knonw as a 'single source of truth' because it is where we store all of our props that we might need at any point in our application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable and needs actions to update with the reducer. Component state is state held within the component and is often mutable. Appliaction state is good to use for larger & more complex apps.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to run an async function like an API call. It has access to a dispatch function.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite so far has been Redux because I find the concept of managing all data in a single file to be much less confusing than remembering where all props are coming from or managing state at the App level and prop drilling data down through many components.