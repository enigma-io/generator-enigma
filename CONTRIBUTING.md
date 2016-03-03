1. [Development Process](#development-process)
1. [Bug Reporting](#bug-reporting)
    1. [What is considered a bug?](#what-is-considered-a-bug)
    1. [How do I report a bug?](#how-do-i-report-a-bug)
    1. [How quickly will my bug be fixed?](#how-quickly-will-my-bug-be-fixed)
1. [Feature Requests](#feature-requests)
1. [Pull Requests](#pull-requests)
    1. [Commit Message Format](#commit-message-format)
    1. [Code Syntax and Guidelines](#code-syntax-and-guidelines)

---

### Development Process

This software is developed within the private `enigma-platform` organization and releases are forwarded to the public mirror: [`enigma-io/generator-enigma`](https://github.com/enigma-io/generator-enigma). The CHANGELOG will be updated with each release and a new git tag will be created.

[back to top](#react-webapp-generator-contributor-policy)

---

### Bug Reporting
#### What is considered a bug?

Installation problems, misconfigurations and non-functional code are considered bugs.

#### How do I report a bug?

Create a new entry in the repository [issue tracker](https://github.com/enigma-io/generator-enigma/issues).

#### How quickly will my bug be fixed?

The contributor team is committed to fixing verified bugs as soon as possible. Depending on the complexity of the issue, a release to address it could be cut the same day, pending workload.

[back to top](#react-webapp-generator-contributor-policy)

---

### Feature Requests

If you have an idea for new (universally-applicable) functionality, we welcome such requests in our [issue tracker](https://github.com/enigma-io/generator-enigma/issues). If the request is too specific to your project's implementation, it will likely be rejected.

[back to top](#react-webapp-generator-contributor-policy)

---

### Pull Requests

Community pull requests (PRs) are A-OK. Be advised that they will be considered based on how generally-applicable they are and anything too specific will likely not be accepted. For instance, this project would likely never be opinionated about the Flux pattern and integrating related libraries.

#### Commit Message Format

Commit messages should be written in present tense. For example, "Replace Foo with Bar" instead of "Replaced Foo with Bar".

Adhere to the 50/72 rule when writing commit messages:

1. The title line should be no more than 50 characters
1. Separate the title and body with an empty newline
1. The commit message body can be as long as you want, hard-wrapped at 72 characters per line

Example:

```text
Site / README updates

Adding User Interface Guideline suggestions and tweaking some of the
styles and demos.
```

#### Code Syntax and Guidelines

The `.eslintrc` that ships with this software is a variant of the [AirBnB JS style guide](https://github.com/airbnb/javascript).

[back to top](#react-webapp-generator-contributor-policy)
