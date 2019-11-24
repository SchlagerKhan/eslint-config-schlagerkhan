Due to this bug

-   https://github.com/yarnpkg/yarn/issues/5810

monorepos gives a lot of errors when working with peer dependencies. Therefore, for now we skip all the peer dependencies and include them are directly as dependencies.

--

Also, it is tiresome to include a base config so the react-plugins will be included even if it is a pure NodeJS project.

--

Also, the VSCode Eslint Extension have some trouble with using the the monorepo as a eslint config for itself. Unclear why...
