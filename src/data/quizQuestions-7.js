export const quizQuestions_7 = {
  questions: [
    {
      question: 'What is the main use of the "create-react-app" tool?',
      choices: ['To create new React components', 'To set up a new React project with a default template', 'To manage state in React applications', 'To connect React applications with databases'],
      correctAnswer: 'To set up a new React project with a default template',
    },
    {
      question: 'In React, which method is commonly used for performing side effects after rendering?',
      choices: ['componentDidMount', 'componentWillMount', 'useEffect', 'getDerivedStateFromProps'],
      correctAnswer: 'useEffect',
    },
    {
      question: 'What is the primary purpose of the "useState" hook in React?',
      choices: ['To create a new state variable in a functional component', 'To link state between different components', 'To store data in local storage', 'To update the DOM directly'],
      correctAnswer: 'To create a new state variable in a functional component',
    },
    {
      question: 'How can you pass a parameter to an event handler or callback in JSX?',
      choices: ['Using an arrow function', 'By calling the function directly', 'Using the bind method', 'Both A and C'],
      correctAnswer: 'Both A and C',
    },
    {
      question: 'What does the "useCallback" hook return?',
      choices: ['A memoized version of the callback function', 'A new instance of the callback function each time', 'The result of the callback function', 'An optimized version of the component'],
      correctAnswer: 'A memoized version of the callback function',
    },
    {
      question: 'Which is a correct method to update the state based on the previous state in React?',
      choices: ['this.setState({ value: this.state.value + 1 })', 'this.setState((prevState) => ({ value: prevState.value + 1 }))', 'this.state.value++', 'this.setValue(this.value + 1)'],
      correctAnswer: 'this.setState((prevState) => ({ value: prevState.value + 1 }))',
    },
    {
      question: 'What is the purpose of React’s synthetic event system?',
      choices: ['To handle DOM manipulations', 'To create custom events', 'To ensure consistency of events across different browsers', 'To enhance performance by using native events'],
      correctAnswer: 'To ensure consistency of events across different browsers',
    },
    {
      question: 'How can you optimize performance for a list of elements in React?',
      choices: ['Using the "key" prop effectively', 'Reducing the number of elements', 'Using PureComponent', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      question: 'What is the difference between a controlled component and an uncontrolled component in React?',
      choices: ['Controlled components have no state, uncontrolled components have state', 'Controlled components handle form data with React, uncontrolled components manage form data with the DOM', 'Controlled components cannot have defaultProps, uncontrolled components can', 'There is no difference in React'],
      correctAnswer: 'Controlled components handle form data with React, uncontrolled components manage form data with the DOM',
    },
    {
      question: 'In React, which lifecycle method should be used for setting up a subscription?',
      choices: ['componentDidMount', 'componentWillUnmount', 'shouldComponentUpdate', 'componentDidUpdate'],
      correctAnswer: 'componentDidMount',
    }
  ]
};
