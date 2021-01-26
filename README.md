# About This App
> This was originally a project I did for an internship application. I liked it so, I decided to do it again and do it better for a portfolio piece.

- ** NOTE: I am not a designer at all, so please disregard my design skills!

> This is a 'toy' app that fetches movie data from the OBDM API. After you search for a movie title, you will have the option to 'nominate' a movie for an award. When a movie is nominated it will disable the 'nominate' button for that movie, add it to the Nominations section as well as being persisted in local storage. You have a limit of 5 nominations, once reached it will disable all 'nominate' buttons and display a banner message. Search results are auto-submitted after a 1s delay.

> This application is built on React using CSS for styling. For testing I used React-Testing-Library, Jest, and the User-Event library

- [Live site here](https://movie-award-nominations.netlify.app/)

- API used: [OMDB Free Movies API](http://www.omdbapi.com/)

# Run This App Locally (Development)
- clone the repo to your local machine
- Using a terminal, CD into the app directory and run 'npm install or yarn install' to add dependencies.
- To run the application run 'npm or yarn start'

# Dependencies
- [dotenv](https://www.npmjs.com/package/dotenv) to store data in a .env file
- [@testing-library/user-event]() to simulate user events in testing.
- [Axios](https://www.npmjs.com/package/axios) for fetching data from the API