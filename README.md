Welcome to PlusTalk!

Project Introduction:

This project was originally started at a hackathon in March 2023, alongside collaborator Ricky Titanti (UI Designer for the PlusTalk App) but due to my then inexperience with react, and getting busy with University, I was unable to continue developing it until June 2023.

This project is my first website ever built (played around in some HTML/CSS previously but never took web development serious until now). To experienced developers some of the code may seem sloppy or unoptimized but I am using this project to grow and learn.

About:

PlusTalk aims to teach users different languages by teaching users various phrases based on specific categories (lessons), such as "Greetings & Introductions", "Asking & Answering Questions", etc...

Languages currently available - Spanish, Portuguese, Hindi & Italian

Resources used to build: Videos from The Net Ninja's Material UI tutorial on youtube is what I initially used to start the project, to set up basic react router and using card components. Eventually moved on to the React Documentation & Stack Overflow to solve any errors as they came up. React Documentation was used for the Accordion style functionality displayed on each language page to toggle each lesson, and also to toggle each card.

Commands for running: "Npm start" - start general frontend (localhost: default) "json-server --watch data/UserCreatedNotes.json --port 8000" to load json-server

***Create A Note feature from Create button on Spanish page is currently being worked on, this part REQUIRES JSON SERVER COMMAND TO RUN

^^Still figuring out how to connect to backend(repo not on GitHub) via API, that is one of the most important tasks I seek to do

Folder Description:

Components are in /src/Components file, separated based on type

/Banner - Components related specifically to top of banner /Create Account - Components for the create.js/login.js page /Language - Images/ Images made into components for use among the project /Learning (Most Populated folder) - all the components for rendering the various lessons, such as translations, the indivdual cards, and the nav bar (/Horizontal) /Login Components - similar to Create Account

File type explanation: Some files (Mainly the ones in /CreateCard) are in TypeScript. I want to move all the components into TypeScript in the future (because I want to implement type checking feature to catch bugs and in general make code more robust). As of right now though, all the other files are in .jsx or .js because I have only recently found out about TypeScript (As of 7/17/2023).

Contact Info: I look forward to connecting with more developers of all experience levels & I am eager for any advice regarding how to improve as a developer, LinkedIn is "https://www.linkedin.com/in/leonardolujan/" or on GitHub profile page.