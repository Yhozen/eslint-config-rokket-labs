module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-drimo`
  extends: ['drimo'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
