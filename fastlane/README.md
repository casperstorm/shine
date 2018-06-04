fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
### increment_build
```
fastlane increment_build
```
Increment both projects
### itunes_connect
```
fastlane itunes_connect
```
Deploy a new version to iTunes Connect
### play_store
```
fastlane play_store
```
Deploy a new version to Google Play
### codesigning
```
fastlane codesigning
```
Fetch all certificates and provisioning profiles

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
