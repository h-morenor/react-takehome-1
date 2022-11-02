# Code Labs Academy Takehome Challenge

## Challenge Overview

Write a simple [React](https://facebook.github.io/react/) based web app.

The goal of this challenge is to evaluate your abilities and method for creating a straightforward web application given a set of screens and an API feed. We will also evaluate the output of the generated **HTML, CSS, and JS**.

It's expected that this task will take 2-4 hours.

## The Challenge

To render the app, you'll need to create a collection of React components using the provided screens as a guide. Additionally, you must request for a JSON feed, filter the data, and render the relevant fields.

Include any tests or other documentation you produced as part of your solution, along with a `README` file that contains setup instructions.

Add the following details to your `README` as well:

- Is there anything we can do to make your submission better?
- If you had more time, what would you do differently?

## Details

Using React, you will need to build the following 3 pages:

- A "Home" page
- A "Series" page
- A "Movies" page

Please create components for each part of the page (eg. header, content, footer, etc).
Assets are provided in the `assets` folder.

The pages should also be usable on mobile and tablet devices.

You can assume that you do not have to support legacy browsers without features such as `fetch` or `flexbox`.

### "Home" Page

Refer to the [screens/1-home.jpg](./screens/1-home.jpg) screen.

This will be your `index.html` screen.

You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.

### "Series" and "Movies" Pages

Refer to the [screens/2-series.jpg](./screens/2-series.jpg) and [screens/3-movies.jpg](./screens/3-movies.jpg) screens.

For each page you will need to fetch this JSON feed [feed/sample.json](https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json), then:

- Display the first 20 `entries`
- Where the entry has a `releaseYear` attribute value >= `2010`
- Sorted by the `title` attribute value in ascending alphanumeric order

For the "Series" page filter on:

- Where the entry has a `programType` attribute value of `series`

For the "Movies" page filter on:

- Where the entry has a `programType` attribute value of `movie`

The attributes you should use to display the entries are:

- `title`
- `images` → `Poster Art` → `url`

You will also need to handle the loading and error states of fetching the JSON feed:

- "Loading" state [screens/1.1-loading.jpg](./screens/1.1-loading.jpg)
- "Error" state [screens/1.2-error.jpg](./screens/1.2-error.jpg)

## FAQ

### What language, framework, build tool... should I use?

You may use whatever you like as long as the solution is built using [React](https://facebook.github.io/react/) or an equivalent library.

We prefer it if you did not use any third party CSS frameworks.

We also prefer the use of minimal dependencies.

## Useful Links

- [Google Fonts - Raleway](https://fonts.google.com/?selection.family=Raleway)
- [React](https://facebook.github.io/react/)
