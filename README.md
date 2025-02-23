<!-- Please update value in the {}  -->

<h1 align="center">Random quote generator</h1>

<div align="center">
   Solution for a challenge from  <a href="http://legacy.devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://ch-random-quote-generator-h-yoshikawa44.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/solutions/CoYDLZwFt5LqHxsD6xe7">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/8Y3J4ucAMQpSnYTwwWW8">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview
random quote
![overview](/screenshots/overview.png)

author quote list
![overview - author-quote-list](/screenshots/author-quote-list.png)

random quote will display the quote data randomly.

author quote list displays a list of citation data for the specified author.
It is an infinite scrolling list with 10 quotes at a time.

It also supports the display of skeleton screens and error alerts, albeit in a simplified way.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

Base
- [Node.js](https://nodejs.org/)：22.13.1
- [TypeScript](https://www.typescriptlang.org/)：5.7.3
- [React](https://reactjs.org/)：19.0.0
- [Next.js](https://nextjs.org/)：15.1.7

Other major libraries
- [emotion](https://emotion.sh/)
- [emotion-icons](https://github.com/emotion-icons/emotion-icons)
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
- [ky](https://github.com/sindresorhus/ky)
- [ky-universal](https://github.com/sindresorhus/ky-universal)
- [@tanstack/react-query](https://tanstack.com/query/v5)

API
- [QuoteSlate API](https://quoteslate.vercel.app/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/8Y3J4ucAMQpSnYTwwWW8) was to build an application to complete the given user stories.

- [x] User story: I can see a random quote
- [x] User story: I generate a new random quote
- [x] User story: When I select quote author, I can see a list of quotes from them
- [x] User story: I can see quote genre under the author

## How To Use

<!-- For example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:h-yoshikawa44/random-quote-generator.git
or
git clone https://github.com/h-yoshikawa44/random-quote-generator.git

# Install dependencies
npm install

# Run the app
npm run dev
```

## learned/improved
- How to implement a skeleton screen
- How to use Grid layout to prevent the footer from coming up when there is little content.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Material UI](https://material-ui.com/)
- [CSSでスケルトンスクリーンを表現する](https://tech.arc-one.jp/skeleton-screen)
- [gapの余白指定が便利！ gridとflexでできる新しいCSSレイアウト手法](https://ics.media/entry/210628/)
- [JavaScriptでn個ずつ配列を分割する](https://yucatio.hatenablog.com/entry/2019/12/10/222311)

## Contact

- Website：[h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub：[@h-yoshikawa44](https://github.com/h-yoshikawa44)
- Twitter：[@yoshi44_lion](https://twitter.com/yoshi44_lion)
