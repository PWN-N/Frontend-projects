🧮 Letters Calculator

A simple and interactive React.js application that calculates the number of characters entered by the user in real time.

The application updates the character count automatically whenever the user types or deletes text.

🚀 Live Demo

Add your deployed project URL here.

📸 Project Preview

Add a screenshot of your application here.

✨ Features

- Real-Time Character Counting: Automatically calculates the number of characters as the user types.
- Dynamic Updates: Updates the count immediately when characters are added or deleted.
- Interactive Input: Allows users to enter any text or phrase.
- Responsive Design: Adapts to different screen sizes.
- Clean UI: Green-themed interface with an illustration and styled input elements.

🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

📂 Project Structure

LettersCalculator/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── LettersCalculator/
│   │       ├── index.js
│   │       └── index.css
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md

⚙️ Installation and Setup

Follow these steps to run the project locally.

1. Clone the repository

git clone https://github.com/PWN-N/Frontend-projects.git

2. Navigate to the project directory

cd Frontend-projects/LettersCalculator

3. Install dependencies

npm install

4. Start the development server

npm start

5. Open in your browser

http://localhost:3000

🧠 Core React Concepts Practiced

This project helped me understand and implement:

- React Class Components
- Component State
- "this.setState()"
- Event Handling using "onChange"
- Controlled and dynamic UI updates
- JSX
- CSS Flexbox and Responsive Design

💡 How It Works

The application uses the input element's "onChange" event to capture the current text.

The ".length" property calculates the total number of characters.

onChangeInput = event => {
  this.setState({
    noOfLetters: event.target.value.length,
  })
}

Whenever the state changes, React automatically re-renders the component and displays the updated character count.

Note: The counter includes spaces and other characters, not just alphabetic letters.

🎯 Learning Outcome

Built this project as part of my React.js learning journey to strengthen my understanding of state management, event handling, and dynamic rendering in React.

---

⭐ If you find this project useful, feel free to explore the repository!
