# README.md

## Tools used in this project
* Lit Framework (OpenWC)
* 

## Components + Hierarchy

* `site-desktop.js`
  * `desktop-environment.js`
  * `desktop-taskbar.js`
    * `taskbar-start.js`
    * `taskbar-item.js`
    * `taskbar-clock.js`
* `site-store.js` - State management store for all components

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
