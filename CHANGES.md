# Changes made to original Gitment

- Removed all nodejs-related things
  - Modulize everything by removing webpack
- Removed/modifyed test kit (`/test/*`)
- Removed dependency `mobx`
  - Now using a much smaller alternative, see `on-change.js`
- Changed OAuth CORS server from `https://gh-oauth.imsun.net` to `https://cors-anywhere.herokuapp.com/github.com:443/login/oauth/access_token`
  - Alternative: `https://gh-oauth.openapi.link`
- Extracted all UI strings to separate files, see `/lang/*`
  - Along with a Chinese translation (enabled by default)
- Fixed `undefined` bug on "Issue Page" link
- Necessary modfications on `README.md`
