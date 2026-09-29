# ECommerce
Full-stack e-commerce platform built with React, Spring Boot and MySQL.

# ECommerce
Full-stack e-commerce platform built with React, Spring Boot and MySQL.


E-Commerce Platform — Frontend Local Setup Guide

This guide is for developers setting up the frontend of the E-Commerce project locally.

1. Frontend Technology

The frontend currently uses:

React

TypeScript

Vite

React Router

Axios

CSS

Backend and database setup will be added later.

2. Required Software

Every frontend developer must have:

Git

VS Code

Node.js

npm

Check if Git is installed

git --version

Check if Node.js is installed

node --version

Check if npm is installed

npm --version

If all three commands return a version number, you are ready to continue.

3. Install Node.js

Node.js is required to run the React/Vite project.

Download Node.js from the official website:

https://nodejs.org/

Install the LTS version.

After installation, close and reopen your terminal.

Verify:

node --version
npm --version

Example:

v22.x.x
10.x.x

The exact version may be different depending on the current LTS release used by the project.

4. Install Git

Download Git from:

https://git-scm.com/

After installation, verify:

git --version

5. Clone the Repository

Open Terminal (macOS/Linux) or PowerShell (Windows).

Clone the repository provided by the project lead:

git clone <REPOSITORY_URL>

Example:

git clone https://github.com/YOUR-USERNAME/ECommerce.git

Move into the project:

cd ECommerce

6. Switch to the Development Branch

The project uses:

main
develop

main = stable / production code

develop = shared development code

Always start frontend development from develop.

Run:

git checkout develop
git pull origin develop

Check the current branch:

git branch

You should see:

* develop
  main

7. Go to the Frontend Folder

From the project root:

cd frontend

Your location should now be:

ECommerce/
└── frontend/

Make sure package.json exists:

ls

On Windows PowerShell:

Get-ChildItem

You should see:

package.json
src
public
...

8. Install Frontend Packages

Run:

npm install

This reads package.json and installs all required frontend dependencies.

It will create:

frontend/
└── node_modules/

You do not need to install React globally.

You do not need to commit node_modules to Git.

9. Important Frontend Packages

The project currently uses packages such as:

React

Used to build the UI.

React Router

Used for navigation between pages.

Current routes include:

/
 /categories
 /admin

Axios

Used later to communicate with the Spring Boot backend.

The package is already included in the project dependencies. Running:

npm install

installs it automatically.

10. Start the Frontend

From the frontend folder run:

npm run dev

Vite will show a local URL, normally:

http://localhost:5173/

Open it in your browser.

11. Current Frontend Pages

Home

http://localhost:5173/

Categories

http://localhost:5173/categories

Admin

http://localhost:5173/admin

At the current stage these are frontend pages. Backend integration will be added later.

12. Stop the Frontend

When the development server is running:

Ctrl + C

13. Create a Branch for Your Task

Do not write code directly on develop.

First update develop:

git checkout develop
git pull origin develop

Create a branch for your assigned task:

git checkout -b feature/<task-name>

Examples:

git checkout -b feature/categories-page
git checkout -b feature/product-card
git checkout -b feature/home-page

For a bug:

git checkout -b bugfix/navigation-issue

14. Daily Development Workflow

Before starting work:

git checkout develop
git pull origin develop

Switch to your task branch:

git checkout feature/<task-name>

Start the frontend:

cd frontend
npm run dev

Make your changes and test them locally.

15. Save and Commit Your Changes

From the project root:

git status

Add your changes:

git add .

Commit:

git commit -m "feat: add categories page"

Examples of good commit messages:

feat: add categories page
feat: create reusable product card
fix: correct navigation issue
style: improve home page layout
docs: update frontend setup guide

Avoid commit messages such as:

update
changes
final
test
abc

16. Push Your Branch

Example:

git push -u origin feature/categories-page

Then open GitHub and create a Pull Request:

feature/categories-page
        ↓
      develop

Do not create the Pull Request directly into main unless instructed by the project lead.

17. Update Your Branch

If other developers have added changes to develop:

git checkout develop
git pull origin develop

Return to your branch:

git checkout feature/<task-name>

Then update your branch:

git merge develop

Resolve conflicts if any, test the application, and push again:

git push

18. Frontend Folder Structure

Current structure:

frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Admin.tsx
│   │   └── Categories.tsx
│   │
│   ├── components/
│   ├── routes/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── types/
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── package.json
└── package-lock.json

Use reusable components when adding new features.

19. Important Rules

Do not commit node_modules

It is generated automatically by:

npm install

Do not commit .env files

Do not commit passwords, API keys, tokens, or other secrets.

Do not modify package-lock.json manually

Let npm update it when dependencies are installed or changed.

Do not push directly to main

Use a feature branch and Pull Request.

Do not push directly to develop

Use a feature branch and Pull Request.

20. Common Problems

Problem: npm: command not found

Install Node.js LTS and restart your terminal.

Check:

node --version
npm --version

Problem: npm run dev says package.json is missing

You are probably in the wrong directory.

Go to:

cd frontend

Then:

npm install
npm run dev

Remember:

ECommerce/          → Git commands for the whole project

ECommerce/frontend/ → npm commands

Problem: Module/package not found

Run:

npm install

Then start again:

npm run dev

Problem: Port 5173 is already in use

Stop the existing Vite process with:

Ctrl + C

Then run:

npm run dev

Vite may choose another available port.

Problem: Changes are not appearing

Try:

1. Save the file
2. Refresh the browser
3. Check the terminal for errors
4. Restart the Vite server

21. Quick Setup — Copy/Paste

For a new frontend developer, the normal setup is:

git clone <REPOSITORY_URL>
cd ECommerce
git checkout develop
git pull origin develop
cd frontend
npm install
npm run dev

Then open:

http://localhost:5173/

After confirming the application works, create your task branch:

cd ..
git checkout -b feature/<task-name>

After completing the task:

git add .
git commit -m "feat: describe your change"
git push -u origin feature/<task-name>

Then create a Pull Request targeting:

develop

22. Frontend Setup Checklist

Before starting development:

[ ] Git installed
[ ] Node.js LTS installed
[ ] npm installed
[ ] Repository cloned
[ ] develop branch checked out
[ ] Latest develop pulled
[ ] Entered frontend folder
[ ] npm install completed
[ ] npm run dev works
[ ] Home page opens
[ ] Categories page opens
[ ] Admin page opens
[ ] Feature branch created

23. Current Project Phase

Current phase:

Frontend Foundation

Currently available:

React + TypeScript
Vite
React Router
Axios
Home page
Categories page
Admin page
White + blue UI
GitHub development workflow

Backend and database setup will be documented separately when those parts are finalized.