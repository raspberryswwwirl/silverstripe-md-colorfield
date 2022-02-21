<?php

namespace RS\Extension;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class LeftAndMainExtension extends Extension {
    public function init() {
        // @todo load these from the config.yml
        Requirements::javascript('_resources/app/_resources/dist/assets/rs-md-colorfield.js',    ['type'=>'module']); // Generate the type="module" attribute
        Requirements::javascript('_resources/app/_resources/dist/assets/rs-vendor.js',  ['type'=>'module']); // Generate the type="module" attribute

        Requirements::css('_resources/app/_resources/dist/assets/rs-md-colorfield.css');
    }
}