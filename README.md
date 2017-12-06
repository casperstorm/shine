# Shine - Cryptocurrency News

[![Build Status](https://www.bitrise.io/app/5c6947b54617b4a3/status.svg?token=IJ8ayRR_6Y44s3HezfQz4A&branch=master)](https://www.bitrise.io/app/5c6947b54617b4a3)

<img src="./assets/marketing/marketing.png" width="80%">

Shine is a app cryptocurrency news aggregator for iOS and Android.
Currently based upon the API from [CryptoPanic](https://cryptopanic.com/).

## Prerequisite
Before using Shine, you need to aquire an [API token from CryptoPanic](https://cryptopanic.com/about/api/), in order to fetch the data.
Once this has been aquirred, you can create the needed environment file: 

```
touch src/config/.env.production
```

Inside `.env.production`, add the following:

```
API_URL=https://cryptopanic.com/api/posts/?auth_token={API_TOKEN}
```

## Running
```
yarn install
yarn ios # or yarn android
```

## Testing
```
yarn test:coverage
open coverage/index.html
```
This will open a page which will display a code coverage report.

## Storybook

This project has [Storybook](https://github.com/storybooks/storybook)

```
yarn storybook
yarn ios # or yarn android
```

## Acknowledgement
[Rasmus Nielsen](http://rasmusnielsen.dk/) — design ✨

## License

MIT
