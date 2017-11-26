# Shine - Cryptocurrency News

[![Build Status](https://www.bitrise.io/app/5c6947b54617b4a3/status.svg?token=IJ8ayRR_6Y44s3HezfQz4A&branch=master)](https://www.bitrise.io/app/5c6947b54617b4a3)

<img src="./assets/marketing/marketing.png" width="80%">

Shine is a app cryptocurrency news aggregator for iOS and Android.
Currently using data from [cryptopanic.com](https://cryptopanic.com/), provided through their API.

## Running
```
git clone git@github.com:casperstorm/shine.git
cd shine && yarn install
```
Then run either `yarn ios` or `yarn android` to launch the app on the desired platform.

## Testing
```
yarn test:coverage
open coverage/index.html
```
This will open a page which will display a code coverage report.

## Acknowledgement
[Rasmus](http://rasmusnielsen.dk/)— for the design.

## License

MIT
