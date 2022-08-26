<?php

namespace RS\Extension;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class LeftAndMainExtension extends Extension {
    public function init() {
        // @todo load these from the config.yml
        Requirements::javascript('_resources/raspberryswwwirl/silverstripe-md-colorfield/client/dist/assets/main.js',    ['type'=>'module']); // Generate the type="module" attribute
        Requirements::javascript('_resources/raspberryswwwirl/silverstripe-md-colorfield/client/dist/assets/vendor.js',  ['type'=>'module']); // Generate the type="module" attribute

        Requirements::css('_resources/raspberryswwwirl/silverstripe-md-colorfield/client/dist/assets/main.css');
    }
}