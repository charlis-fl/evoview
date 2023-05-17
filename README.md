# React Boilerplate

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/3119576/156113885-e2ba33d7-b14d-49dc-86c5-c905f2b2c7d3.png">

## Table of content

1. [How to deploy this template](#how-to-deploy-this-template)
   1. [Prerequisites for deployment](#prerequisites-for-deployment)
   2. [Known issues](#know-issues)
   3. [With a script](#deploy-with-script)
   4. [Manually without a script](#deploy-manually-without-a-script)
   5. [Post deployment tasks](#post-deployment-tasks)
2. [Features and methodologies implemented](#features-and-methodologies-implemented)
   1. [Redux + Redux Toolkit](#redux--redux-toolkit)
   2. [Component Driven Development](#component-driven-development)
   3. [Domain Driven Design (DDD)](#domain-driven-design-ddd)
   4. [Router](#router)
   5. [Mock Service Worker (MSW)](#mock-service-worker-msw)
   6. [Unit/Integration Tests](#unitintegration-tests)
   7. [Test Driven Development (TDD)](#test-driven-development-tdd)
   8. [Trunk based development](#trunk-based-development)
   9. [Why we write tests and what should be the test composition?](#why-we-write-tests-and-what-should-be-the-test-composition)
   10. [Storybook](#storybook)
   11. [CircleCI](#circleci---heroku)
   12. [Cypress](#cypress)
   13. [Internationalization (i18n)](#internationalization-i18n)
3. [Features to be implemented (Tasks to be done)](#features-to-be-implemented-tasks-to-be-done)
4. [How to contribute](#how-to-contribute-)

## How to deploy this template

This template repository is still work in progress and requires as much feedback as possible.

### Prerequisites for deployment:
1. Terraform [installed](https://learn.hashicorp.com/tutorials/terraform/install-cli)
2. Heroku CLI [installed](https://devcenter.heroku.com/articles/heroku-cli)

#### Variables/credentials that you need to prepare with instruction how to get those:
1. CircleCI API token: [https://circleci.com/account/api](https://circleci.com/account/api)
2. Heroku CLI login - make sure you are logging into account that the project is supposed to be deployed to. Heroku account has to have credit card added for script to work properly.
3. Name of a Slack channel to which you'd like to publish automated messages
4. Slack mentions: Slack Member IDs of users that are supposed to be tagged for automated messages - to get this ID simply open their Profile on slack -> click on ellipsis to see more options -> Click `Copy Member ID`. IDs has to be comma separated.
5. Chromatic token - to get this token you need to create a new project on [Chromatic](https://www.chromatic.com/docs/setup)
6. API url for both staging and production environments

### Know issues
1. If the name of the pipeline or app is too long(more than 30 characters), terraform will fail without any meaningful message.

### Deploy with script

The script is in experimental state and works only on macOS. It should handle all deployment tasks for you.
You will have to provide some details and credentials to deploy this template.

Simple run from root catalog of the project
```
cd ./terraform
./script.sh
```
and provide it with necessary data.

#### Disclaimer: currently there is no rollback functionality so if anything goes wrong, or you provide incorrect data just `git reset --hard` to revert to the previous state and start from scratch.

### Deploy manually without a script

Let's start by setting up variables in `./terraform/terraform.tfvars`, replace the name of variable keeping the quotation marks:
1. `%HEROKU_ACCOUNT_EMAIL%` - your Heroku account email
2. `%HEROKU_API_KEY%` - your Heroku API key
3. `%PIPELINE_NAME%` - name of the pipeline, this should be just the name of the project/repo
4. `%STAGING_APP_NAME%` - name of the staging app, preferably name of the pipeline with `-uat` suffix
5. `%REACT_APP_API_URL_UAT%` - url of the staging app API endpoint
6. `%PROD_APP_NAME%` - name of the production app, preferably name of the pipeline with `-prod` suffix
7. `%REACT_APP_API_URL_PROD%` - url of the production app API endpoint

Now we can run terraform to setup the environment.

```
terraform init
terraform plan
terraform apply -state=out.json
```

Next we need to setup environment variables on CircleCI for your app. Follow this [guide](https://circleci.com/docs/env-vars#setting-an-environment-variable-in-a-project) and add below entries:
1. `E2E_TEST_ENVIRONMENT_URL` - url to staging version of the frontend app
2. `HEROKU_API_KEY` - your Heroku API key generated with `heroku authorizations:create`
3. `SLACK_WEBHOOK` - webhook url for our organisation's Slack
4. `SLACK_MENTIONS` - Slack Member IDs of users that are supposed to be tagged for automated messages - to get this ID simply open their Profile on slack -> click on ellipsis to see more options -> Click `Copy Member ID`. IDs has to be comma separated.
5. `SLACK_CHANNEL` - name of the Slack channel to which you'd like to publish automated messages
6. `CHROMATIC_PROJECT_TOKEN` - to get this token you need to create a new project on [Chromatic](https://www.chromatic.com/docs/setup)
7. `HEROKU_APP_NAME` - name of the Heroku staging app

We need to make small adjustment to `package.json` file and replace `%TO_BE_REPLACED_WITH_UAT_URL%` with url of staging application for local testing purposes.

Last step is to create `.env` file from `.env.example` file and populate with values
```
cp .env.example .env
```

Most of them are self-explanatory. To get `ROLLBAR_ACCESS_TOKEN` you need to log in to Heroku and copy value from `Pipeline -> Staging project -> Settings -> Config Vars`

### Post deployment tasks

Once the deployment was successful, and you verified that pipeline is working fine feel free to delete `/terraform` folder.

Additionally, once you get yourself familiar with `storybook` and `cypress` you can also remove folders:
1. `/src/stories` - contains example provided by storybook
2. `/cypress/integration/*` - contains cypress examples of E2E tests

## Features and methodologies implemented

### Redux + Redux Toolkit

This boilerplate comes with preconfigured redux store utilizing `Redux Toolkit`. You can find simple reducer example in `/src/common/store/appSlice.ts` and more complex in `/src/features/account/authSlice.ts`

For more documentation and first steps please refer to official [documentation](https://redux-toolkit.js.org/introduction/getting-started).

#### Redux Toolkit Query (RTK)

Additionally, the project is using by default Redux Toolkit Query which is a all-in-one solution for data fetching, caching and storing.
You should use it in the project for all data fetching related tasks. (NOTE: axios is **not** included on purpose)

You can find working example of Query in `/src/features/account/userService.ts`

To implement new slice follow the example provided - the key is to use method `injectEndpoints` instead of `createApi` for new services.

More information on code splitting [here](https://redux-toolkit.js.org/rtk-query/usage/code-splitting).

[Documentation of Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)

### Component Driven Development

Thanks to storybook we can also utilise approach of Component Driven Development in the project when necessary.

>Component-Driven Development (CDD) is a development methodology that anchors the build process around components. It is a process that builds UIs from the “bottom up” by starting at the level of components and ending at the level of pages or screens.

This comes down to focusing on writing and styling atomic components at the beginning of the project and later - when new atomic or composed components are introduced.
Thanks to that you can focus on what's important when implementing components - styling.

More about this approach [here](https://www.chromatic.com/blog/component-driven-development/).

### Domain Driven Design (DDD)

In the boilerplate DDD has been implemented and showcased in `/src/fetaures` folder.

In short the code should be split based on domain it describes(`account`, `home`, etc.) rather than by function of particular files inside like `Views` or `Controllers`.
This creates a structure with clear separation of concerns between domains.
Each domain should be a standalone package that exposes some "`API`" in the form of for example `index.ts` exporting only the bits that should be consumed by domains higher in the hierarchy.

[This](https://betterprogramming.pub/divide-code-by-domains-and-features-and-keep-it-scalable-bb5bd66cf3d2) article talking more in depth about this approach.

### Router

Router and Routing setup is strictly inherited from the Domain Driven Design described above.
Therefore, every feature/domain should have its own `routes.ts` files to ensure proper code splitting and separation between domains.

If there is nesting of features/domains necessary please check example in `/src/features/routes.tsx` combined with `/src/features/routes/account/routes.tsx`.


### Mock Service Worker (MSW)

> Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests.

It allows you to focus on writing Unit tests rather than spending time mocking axios/redux-toolkit-query/fetch or whatever library you would be using for requests.

Alternatively you can use it to mock `API` requests for the time of development - before they are ready from Backend Team side. You can find example of such usage in `Sign in` and `Sign up` screens in the projects. Remember to run project using `npm run start:msw`.
It can also come in handy to test pessimistic scenarios such as `401`, `503` etc.

Basic setup for `MSW` is already provided. You can use `MSW` either in the browser or in node process. Both use cases are implemented in the project:
1. Browser: run `npm run start:msw`
2. Node: run `npm run test` already uses `msw` as per setup in `/src/setupTests.ts`

For more information how to define mocks and how to use `msw` please refer to official [documentation](https://mswjs.io/docs/basics).

Troubleshooting:
If you encounter problems feel free to run [`setup`](https://mswjs.io/docs/getting-started/integrate/browser) one more time. It should already be done by `/terraform/script.sh` but might have failed in certain situations.
(NOTE: Do **NOT** commit file added by `msw` to git repository - `/public/mockServiceWorker.js`. It has been added to `.gitignore`)

### Unit/Integration Tests

Boilerplate comes with `jest` and `react-testing-library` with necessary plugins installed.

Additionally, in `/src/common/utils` you will find `test.tsx` file with helpers to wrap `React Components` and inject necessary functionality to properly test them.
You can find example usage of said helpers in `/src/features/web/web.test.tsx`

Remember that you can(and probably should) also utilise Mock Service Worker(`MSW`) in your tests.

### Test Driven Development (TDD)

For *core* logic within the application you should follow TDD process which requires you to start with writing a **failing** test and then by implementing correct functionalities make it pass.

Note that the test that you write in the first place should fail in the beginning - it is to ensure you are not creating a false-positive test cases that give you no confidence in the written code later on.

### Trunk based development

>Trunk-based development is a software development methodology that encourages developers to integrate their code early and often. It is a strategy that promotes short-lived branches and encourages developers to commit their code to the main branch as often as possible.

In our case we encourage everyone to commit straight to `main` branch few times a day. 
Other methodologies described above and below should allow you to confidently do so without worrying about breaking the application.

Working in TDD for core application logic and storybook's/chromatic's built in snapshot testing for UI components combined with cypress E2E tests should give you enough confidence in deploying your code to UAT.

Feel free to also refer to our [coding-guidelines](https://github.com/founderandlightning/coding-guidelines/blob/master/General/README.md#trunk-based-development-policy)

### Why we write tests and what should be the test composition?

Currently, there are no specific metrics that you have to follow in your project. We do not require particular code coverage with any type of tests.

That being said we rely on your judgement on how much and which tests are required for the project to run flawlessly and be immune to regression bugs.

Boilerplate provides you with tools to write Unit, Integration and E2E tests. You can also gain confidence on parts of the system by simply following Component Driven Development when implementing simple, logic-less UI components. - there is probably no point in covering those with Unit tests since you will be focusing on styling element primarily.

### Storybook

- Initial setup of storybook is already available
- Config for CircleCI already includes setup to have Storybook automatically deployed to Chromatic. Follow [this instructions](https://www.chromatic.com/docs/setup) to set it up.
- Example stories and components are available in the `src/stories` and `src/common/designSystem/*` folders and are a good starting point if you are new to Storybook.

### CircleCI <-> Heroku

This template is supplied with CircleCI configuration that should be a good starting point and should work out of the box.

- Template for CircleCI currently consist of:
   - job to build, run unit tests and then deploy to Heroku
   - job to run end-to-end tests
   - job to build the storybook and deploy to Chromatic
- When promoting to production from staging(UAT) a script `check:status` will run verifying status of last commit. If it's not all green it will reject release of build to production.
  - it is possible - but not recommended - to skip this check by changing environment variable on Heroku production app `CHECK_COMMIT_STATUS` to `false`.

### Cypress

- Initial setup for Cypress is configured along with eslint rules and separate tsconfig.
- There are example test cases in the `cypress/integration` folder that are a good starting point.

### Internationalization i18n

Currently, there is no framework implemented to support i18n out of the box but there are already some good practices showcased.

In principle, you should not hardcode any text in your application. Instead, you should use `lang.ts` file in `src/common/` to define all strings. 

The example code implemented as part of this boilerplate already utilises this strategy, and you can take a look how the `lang.ts` file is organised - it helps to mimic and organise the file to resemble DOM.

If at any point in the future the app requires i18n support you can easily switch to any of the existing frameworks and simply supply it with `lang.ts` file.

## Features to be implemented (Tasks to be done)

- SASS/Styled-Components/TailwindCSS

## How to contribute 🎉
You're more than welcome to contribute to the boilerplate. Follow below steps to start contributing.

- Pick a task from the above list and once you finished working raised a Pull Request towards the main branch.
