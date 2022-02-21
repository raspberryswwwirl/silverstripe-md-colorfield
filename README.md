# SilverStripe Material Design Color Field

While this is a proof-of-concept to illustrate how to implement color swatch generation/selection based on the [Material Design color system](https://material.io/design/color/the-color-system.html#tools-for-picking-colors), it's a thank you to the SilverStripe community--especially those in the SilverStripe Slack channels--for all of the help getting this concept to work.

*(Tear this thing apart, maybe see what you can do to implement it in React, or send me feedback on how to improve this concept).*

This implementation makes use of the [TinyColor](https://github.com/bgrins/TinyColor) library to render color and calculate contrast ratios for text displayed on those colors. [Vue](https://vuejs.org/) provides the user interaction and state management to workaround some odd behaviour with SS FormField states.

By design, a color set is composed of a "Base Color" and "Color Variants"--the variants themselves are generated from the base color. While the base color should be persisted to its own db field, the variant colors must be persisted to a second db field. In the future, this is likely to be replaced with some sort of json serialization to a single field, but for this proof-of-concept, these values are persisted separately. This has some benefits in that the values can be pre-defined separately in your `config.yml` or `theme.yml`

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
