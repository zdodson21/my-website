# README.md

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command.
  - `sh start-build.sh` runs `build` then `start:build` commands back to back.
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project
- `format` fixes linting and formatting errors

## Tools used in this project
* Framework
  * [Lit](https://lit.dev/) / [OpenWC](https://open-wc.org/)
    * HTML
    * CSS
    * JavaScript
* Web Hosting
  * [Vercel](https://vercel.com/home) 

## Components + Hierarchy

* `site-desktop.js` - Head component for whole project.
  * `desktop-environment.js` - Container for all desktop related items.
    * `environment-item.js` - Items that appear on desktop with custom icons and names. Can be folders or "app" shortcuts.
    * `environment-window.js` - Application window, will provide interface for variety of "apps" and folder system.
  * `desktop-taskbar.js` - Head taskbar component.
    * `taskbar-start.js` - Start button, opens `start-menu.js`.
      * `start-menu.js` - Houses apps and other things that can be opened.
        * `menu-item.js` - Item in start menu.
    * `taskbar-item.js` - Open application that will appear in taskbar.
    * `taskbar-clock.js` - Working clock that appears in bottom right of taskbar.
* `site-store.js` - State management store for all components.

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
