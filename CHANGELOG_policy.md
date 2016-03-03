1. [What is a release?](#what-is-a-release)
1. [How is versioning handled per release?](#how-is-versioning-handled-per-release)
1. [How are releases tracked?](#how-are-releases-tracked)
1. [How can I be notified of releases?](#how-can-i-be-notified-of-releases)

---

### What is a release?

In the context of the React Webapp Generator package, a release is defined by one or more commits that fix identified bugs and/or add new functionality to the product.

There is no defined cadence to the product release cycle, though [verified bugs](https://github.com/enigma-io/generator-enigma/labels/bug) will be fixed on an ASAP basis and a PATCH release will be cut if sufficient other changes cannot immediately be rolled into a MINOR release.

[back to top](#react-webapp-generator-changelog-policy)

---

### How is versioning handled per release?

This software follows the [semantic versioning 2.0](http://semver.org/spec/v2.0.0.html) mechanism for communicating the level of change between official releases. The most important bits are:

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> MAJOR version when you make incompatible API changes, <br />
> MINOR version when you add functionality in a backwards-compatible manner, <br />
> and PATCH version when you make backwards-compatible bug fixes.

This format results in a version string like `"1.0.1"` which can be interpreted to mean: the first minor patch onto the first major release.

During active development, a modifier may be added to the end of the version string like `"2.0.0-alpha"`. The contributor team may opt to release an evaluation version to collect feedback. Version strings with modifiers should not be used in a production setting and are not subject to Service Level Agreements (SLAs).

[back to top](#react-webapp-generator-changelog-policy)

---

### How are releases tracked?

The contributor team will update the project's master [CHANGELOG.md](CHANGELOG.md) file when the qualifications for a release are met and the contents are chosen. Each release will be [tagged in GitHub](https://github.com/enigma-io/generator-enigma/releases).

The CHANGELOG format is as follows:
```markdown
### <version> (<date>)
#### Breaking Changes
Prose-style explanation of the change
[<issue or PR title>](<issue or PR link>) <commit SHA>

...

#### New Functionality
1. Prose-style explanation of the functionality
   [<issue or PR title>](<issue or PR link>) <commit SHA>

1. ...

#### Bugfixes
- [<issue or PR title>](<issue or PR link>) <commit SHA>
- ...
```

A `####` header may be omitted if there are no relevant changes in the release.

[back to top](#react-webapp-generator-changelog-policy)

---

### How can I be notified of releases?

Use Github's [Watch](https://help.github.com/articles/watching-repositories/) feature for the `enigma-io/generator-enigma` repository to receive notifications for issues and releases.

[back to top](#react-webapp-generator-changelog-policy)
