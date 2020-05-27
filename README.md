This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Conceptual description

This is a single page application which displays a list of the world F1 champions by year since 2005 to present. On click of an element of the list, the page navigates to a new list which contains all the winning drivers of that year. 

## Technical specifications

This application is built with React, specifically using functional components and it is tested using Jest and React Testing Library.
For styling I chose Sass because of its awesome variable and nesting features that help keep the code clean and DRY.

## Process report

### Day 1

In the first day I dedicated a few hours to set up the project, understanding the api, setting up the Git repo and a Trello board to keep track of my tasks. It was a bit overwhelming because I wanted to "get it right" from the start so I ended up trying to do too many things in the same time... After realizing that's not helping, I let go of the "doing it right from the start" thoughts and I set up the project in my editor using create-react-app, and created the first component, the MainPage (landing page). 

I had to research tables because it had been a long time since I last worked with one, and then I built a simple table in my new component. I then proceeded to try to populate it with data, which implied reading about Fetch, useEffect and an article on how to fetch data using functional components. First try was a disaster because I was not familiar with useEffect and ended up re-rendering my component a million times. I researched it and it seems that the effect hook runs when the component mounts but also when the component updates. Because I was setting the state after every data fetch, the component updates and the effect runs again. What I had to do was to provide it with an empty array as second argument to avoid activating it on component updates but only for the mounting of the component. And voila! My table has data.

Learning of the day: tables and useEffect

### Day 2

In the second day I started working on the second table, the table that displays the winners of the season(year). The table looks almost the same as the first one, so I start thinking about making it a reusable component. Lord knows how much thought I dedicated to this when I should have been working on the rest of the requirements, lesson learned. The second table went smoother than the first, now that I was more familiar with the data fetching in React. 

I also created a handleClick function, that passes the season to the function that fetches the winners data because we need the winners of the season that the user clicks on from the first table. The connection between the 2 tables is made in the App component, as that is where all the state is kept.

But something was not right, could another day pass without me creating a reusable component? No siree, on this day I created my first reusable component(for this application, I'm not a noob hehe.....he), the PageTitle component. I decided to make it reusable because it was used on 2 different pages and could probably be used on more if there were more requirements :D.

By this point stuff was working and being displayed, but it was very ugly. So, I added some css to both tables and noticed that again, I was repeating myself(need...reusable....component...). End of day: got both tables working and looking pretty. 

Lessons learned: when starting a new project, try to do everything in a simple way and get it working, and only then check for refactoring. Thinking about refactoring while still trying to build something is counter productive and stressful. 

### Day 3

In the third day of this project, I got stuck in trying to create a reusable function for fetching the data... It went horribly wrong, and I realized hey, not everything needs to be abstracted(is this a word?). It's simpler to work with what I have than get tangled in an unnecessary refactoring. Also, it can be damn difficult to know when to apply DRY or not...

I finally created a reusable table component!! It was just a table row reusable component though :) The thing is that the MainTable needs to have clickable rows that lead to the next table, so every row needs to be inside a Link to be able to route. So, that threw my reusable table idea out the window. It was becoming way too time consuming to be worth it at this point so I decided to move forward with what I have. I added it as an improvement/nice-to-have on my Trello board. 

Lessons learned: mentioned above

### Day 4

This was a productive day. I improved my reusable table row, by adding a function that loops over the data it receives and generates a td for every element. For this, I passed the props in the form of an array. What I did first was use the props object and loop over the keys... BAD!!! I needed to be careful with what props I passed because it would display all of them, so I had to add stupid conditions and it was overall terrible. 

The thing is, because of the format of the data that I was getting, things were looking pretty bad. For the MainTable component I was getting an array of objects that also contained an array, and the array also contained an object, the stuff of nightmares. So, after doing some research I discovered a pattern: fetch the data, transform the data, use the transformed data in app. I was fetching data twice, so I created 2 transform functions that returned a simple array of objects which contained the data that I wanted. I chose the easy way, to extract the Driver object and simply add the extra data that I needed into it, and bam! The whole process of passing data to the app is so much cleaner. 

I was also working on the last requirement, to highlight the champion among the winners table. I took a much too convoluted path for this one, when it was in fact quite simple as I was to discover in the future. What I did was write a function to find which amount of points is the max, and check if the driver object contained the max amount of points, and if yes, the champion value would become true...Then that would be passed to the TableRow that would activate a certain class for it and make it green. Was not too great and it overcomplicated the already long transform function.

Lessons learned: handling data!! 

### Day 5

Today I was planning to write tests, but before that, I fixed some issues that were bugging me... I had some troubles with naming my functions and variables, nothing seemed good enough, and I ended up renaming most of it multiple times... I hope it will be inteligible. I need some advice on this.

Also, I discovered an easier solution to highlighting the champion... It seems the data also returns the position of the winner in the championship... So I used that in a conditional and bam! Got what I needed without any extra functions :) 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
