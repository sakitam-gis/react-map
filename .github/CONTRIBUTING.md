# Contribution Guide

## version

> 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

| Major version | minor version |  Amendment No |
| ------------- | -------------------------- | -------------------- |
| Destructive changes | feature added without destructive changes  | bug fixed |

### version number increment rules are as follows:

- Major Version Number: When you make incompatible API changes

- Minor Version Number: When you've made a downward compatibility feature added

- Revision Number: Fixed when you made a backwards compatible problem.

## Issue specification

- issue is used to submit bug or feature and design related content only, the rest may be closed directly.

- Before submitting an issue, search for relevant content has been submitted.

- Please provider the version number of ``react-map`` used and provide operating system and browser information. 
  It is recommended to use [JSFiddle](https://jsfiddle.net/) or [codepen](https://codepen.io/) to generate an online 
  demo that reproduces the problem more intuitively.

## Pull Request specification

- Please fork one to their own projects, do not build branches directly under the warehouse.

- commit message to # [record] + messages.

- ** Do not submit files packaged in `dist` inside.

- Execute `npm run dev && npm run build` to correctly package the file.

- Please submit a PR before rebase, to ensure the integrity of the commit records.

- Make sure the PR is submitted to the `dev` branch, not the` master` branch.

- If the bug is fixed, please give a description in the PR.


## Development environment

first you need Node.js 7+ and NPM 5+

```shell
git clone https://github.com/sakitam-gis/react-map.git
npm install // or yarn
npm run dev
npm run dist
npm run dist:common
npm run start
```
