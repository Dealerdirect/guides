# How to create releases on Github

## Introduction

This document outlines how to make a release for Dealerdirect repositories on
Github.

## Overview

### Dependencies

Currently there is only two dependency:

- The git repository for which a release is to be created should be checked out locally
- The [github-changelog-generator] should be (globally) installed
- **_Optional:_** A "cute" release name can be generated using a [Code name Generator][code-name-generator]

### When does this process start

This process starts whenever a release is need for any Dealerdirect [packages][dealerdirect-packages]

### Steps to take

To successfully create a release, the following steps need to be taken:

1. Create a separate release branch
2. Update the changelog (and any other version references)
3. Create a signed, annotated git tag
4. Add github release notes
5. Done.

## Walkthrough

The following assumes any relevant pull request have all been merged.

### 1. Create a separate release branch

- Make sure the local repository is up to date (validate with `git fetch --verbose` or `git pull`)
- Make sure the latest tags have been pulled using `git pull --tags`
- Look up the latest tag (either using `git tag -n9`, `git log --decorate` or an IDE)
- Write down/remember a new version number following the [Semantic Versioning][semver] convention
- Checkout a new version branch (using `git checkout -b release/vX.Y.Z`)

### 2. Update the changelog (and any other version references)

Depending on repository settings and user rights these changes COULD be made
directly to the `master` branch. In such cases it is NOT RECOMMENDED to do so.

- Run the change log generator using `github_changelog_generator --future-release=vX.Y.Z`
  This will update the `CHANGELOG.md` file (or create one if it does not exist).
- Verify the changes made in the `CHANGELOG.md` (using `git diff` or an IDE)
- Make any other release-specific changes (Version bumps, etc.)
- Commit and push all changes
- Create a new pull-request for those changes
- Make sure the pull-request is reviewed and merged to master before proceeding.

### 3. Create a signed, annotated git tag

Instead of creating a git tag through the Github website, a tag is created
locally. This allows for signing a tag with GPG.

- Checkout and update the master branch using `git checkout master && git pull origin master`)
- Create a new (signed and annotated) git tag using `git tag -a -s vX.Y.Z`
- Depending on the release scale (major, minor or patch) The RECOMMENDED is:
  `Release vX.Y.Z -- Release name and/or one-line description.`
- Push the tag using `git push --tags`

### 4. Add github release notes

The following steps all take place in on [the Github website][github]. More
details can be found in [the Github help section regarding releases][github-creating-releases].

- Draft a new release in the desired repository
- Select the tag created in the previous step from the drop-down list
- Add a release title using either the version name or number (depending if the release has been given a name)
- For the release description the output that has been added to the CHANGELOG in
  the second steps MUST be used.
- Publish release

### 5. Done

At this point a new, signed, properly documented release has been created.

[code-name-generator]: http://www.codenamegenerator.com/?prefix=apple&dictionary=metal&suffix=none
[dealerdirect-packages]: https://github.com/DealerDirect "DealerDirect github"
[github-changelog-generator]: https://github.com/skywinder/github-changelog-generator "skywinder/github-changelog-generator"
[github]: https://github.com
[github-creating-releases]: https://help.github.com/articles/creating-releases/
[semver]: http://semver.org/
