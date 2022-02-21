# SilverStripe Material Design Color Field

This is a proof-of-concept field to illustrate how to implement color swatch generation and selection based on the [Material Design color system](https://material.io/design/color/the-color-system.html#tools-for-picking-colors). This implementation makes use of the [TinyColor](https://github.com/bgrins/TinyColor) library to generate each color and calculate contrast ratios for text on those colors. I chose to implement [Vue](https://vuejs.org/) to prototype the user interaction.

**Note:** I didn't want to start injecting this logic into any of the underlying react-enabled fields. There's enough "magic" with these fields maintaining/refreshing their state (and values) after saves in some contexts.

By design, a color set is composed of a "Base Color" and "Color Variants"--the variants themselves are generated from
the base color. While the base color should be mapped to a defined db field, the variant colors must map to a second db field for persistence. This is likely to be replaced with some sort of json serialization to a single field, but for this proof-of-concept, these values are persisted separately.
### Steps to prepare this module for your own use:


## Requirements

* SilverStripe ^4.0


## Installation
```
composer require raspberryswwwirl/silverstripe-md-colorfield:dev-develop
```

## License
See [License](license.md)

We have included a 3-clause BSD license you can use as a default. We advocate for the BSD license as 
it is one of the most permissive and open licenses.

## Documentation
 * [Documentation readme](docs/en/readme.md)

## Maintainers
 * RaspberrySwwwirl <hello@raspberryswwwirl.com>
 
## Bugtracker
Bugs are tracked in the issues section of this repository. Before submitting an issue please read over 
existing issues to ensure yours is unique. 
 
If the issue does look like a new bug:
 
 - Create a new issue
 - Describe the steps required to reproduce your issue, and the expected outcome. Unit tests, screenshots 
 and screencasts can help here.
 - Describe your environment as detailed as possible: SilverStripe version, Browser, PHP version, 
 Operating System, any installed SilverStripe modules.
 
Please report security issues to the module maintainers directly. Please don't file security issues in the bugtracker.
 
## Development and contribution
If you would like to make contributions to the module please ensure you raise a pull request and discuss with the module maintainers.
