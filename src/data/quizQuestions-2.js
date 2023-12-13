export const quizQuestions_2 = {
  questions: [
    {
      question: 'Which method in a React component is called after the component is rendered for the first time?',
      choices: ['componentDidMount', 'componentWillMount', 'componentDidUpdate', 'componentWillUnmount'],
      correctAnswer: 'componentDidMount',
    },
    {
      question: 'Which hook is used to perform side effects in function components?',
      choices: ['useState', 'useEffect', 'useReducer', 'useContext'],
      correctAnswer: 'useEffect',
    },
    {
      question: 'What is the purpose of React Router?',
      choices: ['To interface with APIs', 'To manage state globally', 'To handle navigation and routing in a React app', 'To link components together'],
      correctAnswer: 'To handle navigation and routing in a React app',
    },
    {
      question: 'What is the correct syntax for a functional component?',
      choices: ['function MyComponent() { return <div /> }', 'class MyComponent extends React.Component { render() { return <div /> } }', 'MyComponent() => { return <div /> }', 'ReactFunction MyComponent() { return <div /> }'],
      correctAnswer: 'function MyComponent() { return <div /> }',
    },
    {
      question: 'What does the "props" object in a React component contain?',
      choices: ['Internal state', 'Functions and methods', 'External data passed to the component', 'Configuration settings'],
      correctAnswer: 'External data passed to the component',
    },
    {
      question: 'How do you update the state of a component in React?',
      choices: ['this.state = {}', 'this.setState()', 'setState = {}', 'state.set()'],
      correctAnswer: 'this.setState()',
    },
    {
      question: 'What is a higher-order component in React?',
      choices: ['A component that takes other components as arguments', 'The main component in an application', 'A component that renders other components', 'A function that returns a component'],
      correctAnswer: 'A component that takes other components as arguments',
    },
    {
      question: 'In React, what is the difference between state and props?',
      choices: ['State is mutable and props are immutable', 'There is no difference', 'Props are mutable and state is immutable', 'Props are used for functions and state for classes'],
      correctAnswer: 'State is mutable and props are immutable',
    },
    {
      question: 'What is the use of the "key" prop in a list in React?',
      choices: ['To ensure each element is unique', 'To improve performance by helping with list re-rendering', 'For accessibility purposes', 'To identify which items are interactive'],
      correctAnswer: 'To improve performance by helping with list re-rendering',
    },
    {
      question: 'In which lifecycle method should you make AJAX requests in a class component?',
      choices: ['componentDidMount', 'componentWillMount', 'render', 'componentDidUpdate'],
      correctAnswer: 'componentDidMount',
    }
  ]
};
