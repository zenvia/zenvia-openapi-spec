# Zenvia APIs OpenAPI Specification

[![License](https://img.shields.io/github/license/zenvia/zenvia-openapi-spec.svg)](LICENSE.md)
[![Build Status](https://travis-ci.com/zenvia/zenvia-openapi-spec.svg?branch=master)](https://travis-ci.com/zenvia/zenvia-openapi-spec)
[![Dependencies](https://img.shields.io/david/zenvia/zenvia-openapi-spec.svg)](https://david-dm.org/zenvia/zenvia-openapi-spec)

[![Twitter Follow](https://img.shields.io/twitter/follow/ZENVIA_.svg?style=social)](https://twitter.com/intent/follow?screen_name=ZENVIA_)



## Links

- [Reference Documentation (ReDoc)](https://zenvia.github.io/zenvia-openapi-spec/)
- OpenAPI Raw Files: [JSON](https://zenvia.github.io/zenvia-openapi-spec/openapi.json) [YAML](https://zenvia.github.io/zenvia-openapi-spec/openapi.yaml)

**Warning:** All above links are updated only after Travis CI finishes deployment



## Working on specification

### Install

**1.** Install [Node.js](https://nodejs.org/)

**2.** Clone repo and run `npm install` in the repo root



### Usage

**1.** Starts the development server.

```shell
npm start
```

**2.** Bundles the spec and prepares web_deploy folder with static assets.

```shell
npm run build
```

**3.** Validates the spec.

```shell
npm test
```

**4.** Starts the development server (with the public version of the specification).

```shell
npm run start:public
```

**5.** Bundles the spec (with the public version of the specification) and prepares web_deploy folder with static assets.

```shell
npm run build:public
```


## License

[MIT](LICENSE.md)
