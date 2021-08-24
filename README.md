# UserList

An Angular 12 project generated with Angular CLI, using SCSS, NgRx (for the Redux pattern) and RxJS. 

Features:

    - Home page with link to user list
    - User list page
    - User Detail page which fetches user by ID and displays user information with several options to call/email/show location, etc...

The app was built in a responsive way to cater for different platforms. No additional UI (e.g. Angular Material) framework was used for simplicity's sake but the inclusion of one, would make the site's design look neater.

## Development server / Running the App

- Clone the project from this repo: `git clone https://github.com/matthewmicallef/user-list.git`
- Access the project directory: `cd user-list`
- Run `npm i` to install the required packages.
- Run `ng serve -o` to launch the app. This should navigate you to `http://localhost:4200/`. 

The app will automatically reload if any of the source files are changed.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.