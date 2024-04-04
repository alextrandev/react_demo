# React pratice repo

This is a react pratice repo to learn react basic

Please install node module when cloning the repo then run the project:

```bash
npm install;
npm run dev
```

## Components

Create a basic React components and use it in the JSX code of another component.

### Task

1. Create a Basic Component:

   Create a new React component named BasicComponent. This component should be a functional component and can be as simple as a div element with some text content.

2. Use BasicComponent in another component:

   Create a second React component named ParentComponent.
   Import and use the BasicComponent within the JSX code of ParentComponent.

3. Integrate in App component:

   Finally, import and render the ParentComponent in your main App component or any other higher-level component in your React application.

## Display component with data

Create a React component to display the name and title of a user.

### Task

1. Modify the **User** component code to dynamically display the user data from the **userData** object. Replace the placeholder text in the `<h2>` and `<p>` elements with the corresponding values from the **userData** object. Ensure that the user's first name, last name, and title are correctly displayed in the rendered component.

2. When the User component is rendered within the App component, it should display the user's first name and last name in the `<h2>` element and the user's title in the `<p>` element.

## Component props

Practice working with props and creating a configurable, reusable component.

### Task

1. Build a reusable BookInfo component that displays information about a book. The BookInfo component should take two props - "title" and "author." It should output the received data between `<h2>` (title) and `<p>` (author) tags.

2. In the App component, render at least two instances of the BookInfo component.

3. One of those BookInfo components must receive a title of _"The Little Prince"_ and an author of _"Antoine de Saint-Exupéry"_. For the other instance, choose any book title and author of your preference.

## Passing props to children component

To practice component composition and the use of the [children](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) prop (a special prop that allows wrapping a component around another component) in React.

### Task

In this task, you will be working on building a reusable BookCard component that can be employed as a wrapper around any JSX code related to a book.

1. Create a new functional component named BookCard within the BookCard.js file.
2. Ensure that the BookCard component takes a title prop as an input.
3. Output the name prop as a title inside the BookCard component.
4. Allow the BookCard component to be a wrapper around any JSX code by utilizing the children prop.
5. Output the wrapped JSX code below the title.
6. Test the final BookCard component by using it as follows:

```js
<BookCard title="The Art of Programming">
  An insightful journey through the world of programming, exploring both theory and practical applications.
  <button>Read More</button>
</BookCard>
```

## Event handling

Practice event handling in a React app.

### Task

The task involves updating book details (title, author, genre, and reading status) when a button is pressed in the App component. Note that the input fields are currently non-functional, and you're focusing on event handling.

1. Open the provided React project containing the App component.
2. Identify the "Add book" button within the component.
3. Implement an event handler function, handleClick, that is triggered when the "Add book" button is clicked.
4. Inside the handleClick function, update the book details:

- Set the book title to "title".
- Set the author to "author".
- Set the genre to "genre".
- Set the reading status (isRead) to true.

5. Test your implementation by clicking the "Add book" button and confirming that the book details have been successfully modified (use console.log before and after event)

**Important Note:** The current input fields are non-functional, and you are not required to fetch values from them. Focus on practicing event handling.

## useState

This exercise helps practice using the useState hook to manage state in a React functional component, allowing the component to dynamically update and display changes in the UI.

### Task

- Complete the TODOs in the Counter.js file:

  - Use the useState hook to declare a state variable named count with an initial value of 0.
  - Define the increment function to update the count state by incrementing it.
  - Define the decrement function to update the count state by decrementing it.

- Use the Counter Component in App
- Verify that clicking the "Increment" button increases the count and clicking the "Decrement" button decreases the count.

## Passing data to parent component

This exercise helps practice passing data from child to parent components based on user input, reinforcing the concept of props and state in React.

### Task

- Complete the TODOs in the ChildComponent.js file:

  - Use the useState hook to declare a state variable named userInput to store the input value.
  - Define the handleChange function to update the userInput state when the input changes.
  - Add an onChange event to handle changes in the input.
  - Bind the 'userInput' to the handleClick

- In the App.js file, update the handleClick function to receive the user input and set it as the message.
- Verify that clicking the "Send Message to Parent" button, the message is displayed in the parent component.

## Controlled components and conditional rendering

In this project, the main aim is to learn how to build a React app using controlled components and conditional rendering. You'll create Form and View components as child components, and you'll practice how to pass input data from the Form component to the View component when the onChange event is triggered.

### Task

- Complete the TODOs in the **App.js** file:

  - Write a function called `handleChange` to store user input values in the `'details'` variable as an object.
  - Import the **Form** component and provide the `handleChange` function to it.
  - Import the **View** component and provide the `details` object to it.

- Create a **Form.js** component that includes a form element with various inputs and corresponding labels:
  - First name (input type: 'text')
  - Last name (input type: 'text')
  - Phone (input type: 'number')
  - Email (input type: 'email')
  - Role (select with options: 'student', 'teacher', 'other')
- Utilize a single `onChange` event handler on the form element to capture input changes.

- Develop a **View.js** component to display data from the `'details'` object.
- Implement conditional rendering to display the content of the View component **only if the 'details' variable is not null**.

## Conditional rendering and useRef usage

In this project, you create a simple a React application that allows a user to log in and view their profile. The app will display a login prompt component initially. Once the user logs in, the app will display the user's profile component. If user logs out from profile, it will take user back to the login promt component.

### Task

- Import the UserProfile and LoginPrompt components into the App component, and pass the correct functions and/or data to the components.
- Add conditional rendering to display the UserProfile component if the user.isLoggedIn is true, otherwise, display the LoginPrompt component.
- In the LoginPrompt component, use the useRef hook to create a reference to the input element.
- In UserProfile component, include handleLogOut function in the onClick event to log the user out

## List and keys

In this project, you will practice using lists and keys in React to display dynamic data, as well as how to conditionally display content based on certain criteria or the state of your React application. The application you are going to build is a 'Book Lister,' which displays a list of books. Each book will have a title, author, and a description. By default, all book descriptions are hidden, and users can toggle the visibility of the description with an onclick event.

### Task

- Modify `BookList` component. This is where you'll show your list of books.
  - Implement mapping of the books array from `books.js` to render each book using the `Book` component.
  - Ensure each `Book` component receives the necessary props including a `showDescription` prop to determine if the current book's description should be displayed based on its `ID` comparison with `activeBookId`.
- Modify `Book` component:
  - Use the `showDescription` prop to conditionally render the book's description in `Book.js`.
  - Include a button to toggle the visibility of the description. The button text should change based on the description's visibility state. If `showDescription` is `false` then button text is "show description" else "hide description".
