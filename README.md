# inferno-base
This project is boilerplate code intended to be used as a base for modern lightweight web projects based on the Inferno library. It includes an *extremely* basic working structure as a starting point / showcase.

### Tech
This project uses:
- inferno / inferno-router / inferno-redux as a React ecosystem alternative
- webpack for jsx parsing, minification, compression and bundling with cache busting via filename hashing
- eslint based on airnbn rules to enforce good coding practices

### Installation
Install the dependencies and devDependencies.
```sh
$ cd inferno-base
$ npm install
```

### Development
To run the project locally using the webpack-dev-server:
```sh
$ npm start
```

### Building
To generate assets for a production server:
```sh
$ npm run build
```
Then check the **build** folder for them. You can also serve them locally using **http-server** for testing purposes:
```sh
$ npm install -g http-server
$ npm run serve
```

### Contributing
If you wish to contribute, you are welcome to open issues and PRs on the github project.

### Todos
- improve eslint config

### Credits
- Author: Thiago L. Lima

### License
MIT
