- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Prop Types are used for ensuring the data type of things being passed in as props to react components. It's important so that you can ensure that the data is the type of data you expect, or that your functions expect. It catches a lot of errors that might have otherwise slipped by.

- [ ] Describe a life-cycle event in React?

A life-cycle event in React is a method that can be used on a React class component wherein you can run code after/before certain events happen. This can include "componentDidUpdate" which allows you to run certain code when the component's state or props are updated, or "componentDidMount" which allows you to run code after your component has rendered.

- [ ] Explain the details of a Higher Order Component?

A higher order component is a component that accepts as input one or more other components, and returns a class component. For example, it is useful for building in conditional logic for rendering one or another component based on the state of your app.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

1. adding className to elements, and importing CSS that has styling referencing those classes
  - the benefit of this is that it's using a format that you're already used to, and you separate out styling from the component itself.
2. using style={styleObj} or style{{background: blue}}
  - this allows you to have very specific control of your styles, and the styling can be defined right where you're using the components.
3. styled-components
  - the benefit of using this is that you can have all of your styling inside a component, and you can extend that styling by basing a new component based on a previously defined styled component.