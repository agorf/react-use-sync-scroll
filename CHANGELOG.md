# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][kac] and this project adheres to
[Semantic Versioning][semver].

## [Unreleased]

### Changed

- Prefix PRs in Changelog and add authors

## [0.1.0] - 2019-10-04

### Added

- [#5](https://github.com/agorf/react-use-sync-scroll/pull/5):
  TypeScript definitions
  ([@mc-petry][])

### Changed

- [#1](https://github.com/agorf/react-use-sync-scroll/pull/1):
  Run sync logic in `window.requestAnimationFrame` for smoother scrolling
  ([@drownbes][])
- [#6](https://github.com/agorf/react-use-sync-scroll/pull/6):
  Bump eslint-utils from 1.3.1 to 1.4.2 to address security vulnerabilities
- [#7](https://github.com/agorf/react-use-sync-scroll/pull/7):
  Bump lodash from 4.17.11 to 4.17.15 to address security vulnerabilities
- Improve README.md file text
- Update demo page for version 0.1.0

### Fixed

- [#3](https://github.com/agorf/react-use-sync-scroll/pull/3):
  `refsRefOk` inverted conditional
  ([@mc-petry][])

## [0.0.6] - 2019-06-20

### Fixed

- Add forgotten `.current` to ref

## [0.0.5] - 2019-06-20 [YANKED]

Yanked release. Accidental copy of [0.0.4][]

## [0.0.4] - 2019-06-20

### Added

- Demo file under docs folder
- ESLint configuration with eslint-plugin-react-hooks
- Keywords in package.json
- npm package version badge in README.md file

### Changed

- Pass refs instead of building them internally
- Remove use of `Array.prototype.keys` for IE compatibility
- Improve README.md file text

## [0.0.3] - 2019-06-20 [YANKED]

Yanked release. Accidental copy of [0.0.2][]

## [0.0.2] - 2019-05-31

### Added

- Use rollup to build dist files

### Changed

- Improve README.md text
- Improve description in package.json

## [0.0.1] - 2019-05-30

### Added

Initial release.

[Unreleased]: https://github.com/agorf/react-use-sync-scroll/compare/0.1.0...HEAD
[0.1.0]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.6...0.1.0
[0.0.6]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.5...0.0.6
[0.0.5]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.4...0.0.5
[0.0.4]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.3...0.0.4
[0.0.3]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/agorf/react-use-sync-scroll/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/agorf/react-use-sync-scroll/releases/tag/0.0.1

[kac]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html
[@drownbes]: https://github.com/drownbes
[@mc-petry]: https://github.com/mc-petry
