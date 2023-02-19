# Introduction

The main motivation of this project is to solve the challenge proposed in the file
[Reto Frontend.pdf](Reto%20Frontend.pdf) available at the root of this same project.

Therefore, this document will explain how to use this project, as well as the structure that has been followed and the
reasons behind the different decisions that have been made during development.

## Installing the Project

The project has been developed using the latest v18 LTS version of Node, and it is recommended to run it with this 
version to avoid compatibility issues.

If your system has another version of Node installed, it is recommended to use NVM to have multiple versions of Node
available simultaneously.

The remaining versions of the packages and dependencies are fixed in the `yarn.lock` file, which has been included with
at the root of the project.

To download these dependencies while respecting these versions, simply run the `yarn install` command in the root of the
project.

## Environment

Since the project is a tryout, no environment configuration (i.e. `.env` files) is required.

All environment variables such as endpoints or API keys for services like Chromatic are written directly in the code.

## Available Commands

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about 
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

In these tests, the logic behind the components, pages, services and entities is tested exclusively, since **Storybook
is used for the Visual Regression Tests**.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the
build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `yarn storybook`

Runs Storybook in the development mode. Open [http://localhost:6000](http://localhost:6000) to view it in your browser. 

Components will reload when you make changes.

Stories have been defined to cover all the visual cases that the components supports. Non-visual tests such as that
links are set properly or that services are called when appropriate are covered with `yarn test`.

### `yarn build-storybook`

Builds Storybook for "production" to the `storybook-static` folder. The build is minified and the filenames include the
hashes.

### `yarn chromatic`

Builds Storybook and uploads it to Chromatic. Chromatic is a Visual Regression Testing Service.

For each build it will make captures all the stories and compare them with the previous version. If the images are
different, a story-by-story confirmation will be requested that the changes that have occurred are expected.

The builds, screenshots and stories of different versions can be checked on the page:
https://www.chromatic.com/builds?appId=63f12c5b4039a4f5bcca0f59

### ¿Where is `yarn lint`?

The challenge asks for a command to launch the linting, since both `yarn start` and `yarn build` launch it
automatically, this command has not been included separately.

## Used Dependencies

### JavaScript Framework

At the request of the challenge, [React](https://reactjs.org/) has been used as the JavaScript framework.

To speed up the setup of the project, the [Create React App](https://create-react-app.dev/) library has been used, which
offers predefined commands and configurations.

Although it allows for detailed configuration of all aspects of React and the other libraries used for building the
application, default configurations have always been used to save time.

#### HTTP Client

To make HTTP requests, the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) has been chosen. This
API is native in all web browsers and also has support in Node starting from v18.

It is fully capable of making requests while keeping the code clean, saving space in the bundle by not having to include
libraries such as Axios or Ajax.

#### Cache

To cache the data requested from external services in the browser, the native
[LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) has been used.

The reasons are the same as for the HTTP client. There are plugins for Redux and libraries that offer this
functionality, but this native API is fully capable, reduces the bundle size, and also reduces the cost of preparing the
project to solve the challenge in a short time.

### CSS Framework

The challenge gave total freedom in the visual part, therefore, SCSS has been used together with
[TailwindCSS](https://tailwindcss.com/) to generate the necessary visual components for the application.

In addition, to save some development time and achieve greater visual impact with less effort, 
[DaisyUI](https://daisyui.com/) has been used, which is a component library that works on top of TailwindCSS.

The [BEM](https://getbem.com/) naming convention has been followed along with React module styles to keep the CSS code
clean and organized, as well as the Mobile First Pattern to generate simpler Cascading Style Sheets for less capable
devices (i.e. mobile devices).

### Unit Testing

[Jest](https://jestjs.io/) has been used for Unit Testing along with 
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

As mentioned earlier, these tests have been developed exclusively to only test the logic of the application, leaving
Visual Regression Testing to Storybook.

### Visual Regression Testing

Stories have been created for all components with visual purpose, so we can test them individually in a sandbox mode
using the [Storybook](https://storybook.js.org/) library.

Additionally, the [Chromatic](https://www.chromatic.com/) service has been used to turn all these stories into visual
regression tests.

## Directories

For this project, a series of sub-folders have been created in the `src` directory to categorize the code based on its
functionality.

The SOLID principles have been followed, and inspiration has been taken from DDD and Hexagonal Architecture to make the
separation of concerns.

### `src/Components`

This directory stores components whose main purpose is to visually represent the data that the application handles.

None of these components will use services without the user interaction.

### `src/Contexts`

This directory stores the application's contexts, which are used as a simple and alternative solution to Redux for
storing the Global State of the application.

### `src/Entities`

Directory where the application's domain entities are stored.

These entities contain the validation rules, as well as methods associated with the manipulation of the entity's own
information which has been extracted to the entities themselves to keep the components cleaner.

#### `src/Entities/VO`

Directory where the Value Objects used as small aggregates within the entities are stored.

### `src/Pages`

Directory where the components associated with each of the application's pages are stored.

These components are associated 1:1 with a URL and consume a service to obtain data from the application during
their loading.

### `src/Services`

Directory where external services such as API calls are located.

These services make use of the native Fetch and LocalStorage APIs to fulfill their function.

Since each service is associated with only one entity and to save some development time, the transformation of
infrastructure data to domain entities has been delegated to these services. In a larger-scale application, it is ideal
to separate Repositories from Transformers.

### Suffixes

Although tests and stories are generally located within the `__tests__` and `__stories__` directories, for this
challenge, I have been decided to store the respective tests, stories, and also styles for components and services
together with them, as they have all been paired 1:1 and also allow for easier visualization of the entire code set
belonging to a single component or service.

In larger applications, many components and services work very closely together, and cannot be tested separately.
Additionally, many modules end up being reused, so it makes no sense for them to be paired with their components.

#### `*.js`

This is the main component, page, service or entity file. It contains the logic (and markup in the case of components)
that is transpiled to build the final application.

#### `*.stories.js`

These files contain the stories belonging to the component with the same name. These stories are used by
Storybook to create a sandbox where these components can be tested freely and by Chromatic to perform Visual Regression
Tests.

Pages do not have stories, as they do not have their own visual representation.

#### `*.test.js`

These files contain Unit Tests that cover the logic of all components, pages, services, and entities. They are directly
associated with the *.js file with the same name.

#### `*.module.scss`

These files contain the styles associated with the component with the same name. Pages do not have styles since their
only function is to consume a service to obtain data to pass to a component.
