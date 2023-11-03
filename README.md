# Netflix GPT

- create-react-app netflix-gpt
- Configured Tailwind CSS(npm install -D tailwindcss
  npx tailwindcss init)
- In tailwind.config we write(/** @type {import('tailwindcss').Config} \*/
  module.exports = {
  content: [
  "./src/**/\*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  })
- In index.css we write (@tailwind base;
  @tailwind components;
  @tailwind utilities;)

- Start building process (npm run start)

# Features

-Login/Sign UP

- Sign In/ Sign UP Form
- redirect to Browse page

-Browse page(after authentication)

- Header
- Main movie

  - Trailer
  - Movie title & description
  - Movie suggestions
    - Movies List

- NetflixGPT
  -Search Bar
  -Movie Suggestion
