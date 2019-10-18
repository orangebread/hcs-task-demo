## Getting Started

Prereqs:
 - Requires nodejs and mongo to be installed


### Run Server in /api `npm start`
Server running on `http://localhost:3001/api`

### Run App in / `npm start`
App running on `http://localhost:3000`

## Documentation

Notes:
 - Front end is in React/Redux
 - Configs are included for sake of demo, usually more environment specific
 - Branching strategies where applicable
    - Usually would branch from develop for features and then merging through a PR
    - Release to master from develop are tagged and done manually

### Bootstrap my project with create-react-app

### RESTful API service
    1) Build user/authentication component
        a. Build the auth middleware
        b. Build user model and controller
        c. Add crud logic
        d. Test endpoints with Postman

    2) Build tasks component 
        a. Add auth middleware to task routes
        b. Build out model and crud logic
        c. Test endpoints with user bearer token

### Front end app
    1) Build a basic html login page with styles
    2) Start hooking up logic for registration/login and storing token
    3) Added request interceptors for checking jwt 
    4) Added components to build out the Todo page
