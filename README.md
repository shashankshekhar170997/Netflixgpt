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
- Header
- Routing of App
  -Login form
  -signUp form
  -Form validation
- useRef Hook
- Firebase setup
  -Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Implemented Update profile api
- Used TMDB Movies api
- Unsubscribe to the onAuthStateChanged callback
- Added hardcoded value to the constants files
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API.
- Custom hook for Now playing Movies
- Update store with movies Data
- planning for MainContainer & secondary container
- update store with Trailer video Data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build secondary Component
- Implemented MTDB image CDN api with poster_path
- Build Movie list
- Build Movie Card
- Implemented Tailwind CSS
- Created usePopularMovies Custom hook
- GPT Search Feature
- Multi-language feature in our App

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
