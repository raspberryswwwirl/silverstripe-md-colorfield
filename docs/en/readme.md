# Example Usage

The following sample is taken from an development project where this field is being used as part of a larger theme configuration experiment.

```
<?php

namespace RS\Extension;

use RS\FormField\MaterialColorPickerField;
use SilverStripe\Core\Config\Config;
use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\HiddenField;
use SilverStripe\ORM\DataExtension;
use SilverStripe\SiteConfig\SiteConfig;

class SiteConfigThemeExtension extends DataExtension {
    private static $db = [
        'ColorPrimary'              => 'Varchar(7)', // Store full HEX values, e.g. #FF00FF
        'ColorPrimaryVariants'      => 'Varchar(255)', // Serialized JSON array of HEX strings
        'ColorSecondary'            => 'Varchar(7)', // Store full HEX values, e.g. #FF00FF
        'ColorSecondaryVariants'    => 'Varchar(255)',// Serialized JSON array of HEX strings
        'ColorAccent'               => 'Varchar(7)', // Store full HEX values, e.g. #FF00FF
        'ColorAccentVariants'       => 'Varchar(255)' // Serialized JSON array of HEX strings
    ];

    # +------------------------------------------------------------------------+
    # CMS
    # +------------------------------------------------------------------------+
    public function updateCMSFields(FieldList $fields)
    {
        // Define a set of default HEX colors, ideally in your theme.yml
        $color_primary_fallback     = '#724A7D';
        $color_secondary_fallback   = '#1A8BA8';
        $color_accent_fallback      = '#38FFA2';

        $fields->removeByName([
            'ColorPrimary',
            'ColorPrimaryVariants',
            'ColorSecondary',
            'ColorSecondaryVariants',
            'ColorAccent',
            'ColorAccentVariants' 
        ]);

        // Group field pairs together for the Base Color and the Variant selections
        $fields->addFieldsToTab('Root.Theme',[

            // Primary
            FieldGroup::create('Primary Color',[
                $field_materialcolor_primary = MaterialColorPickerField::create('ColorPrimary', '', $this->owner->ColorPrimary ?: $color_primary_fallback),
                $field_materialcolor_primary_variants = HiddenField::create('ColorPrimaryVariants', 'Primary Color Variants', $this->owner->ColorPrimaryVariants),
            ]),

            // Secondary
            FieldGroup::create('Secondary Color',[
                $field_materialcolor_secondary = MaterialColorPickerField::create('ColorSecondary', '', $this->owner->ColorSecondary ?: $color_secondary_fallback),
                $field_materialcolor_secondary_variants = HiddenField::create('ColorSecondaryVariants', 'Primary Color Variants', $this->owner->ColorSecondaryVariants),
            ]),

            // Accent
            FieldGroup::create('Accent Color',[
                $field_materialcolor_accent = MaterialColorPickerField::create('ColorAccent', '', $this->owner->ColorAccent ?: $color_accent_fallback),
                $field_materialcolor_accent_variants = HiddenField::create('ColorAccentVariants', 'Accent Color Variants', $this->owner->ColorAccentVariants),
            ]),
        ]);
        
        // Set variant selections and a field pairing to persist those values...
        $field_materialcolor_primary->setSelections( $this->owner->ColorPrimaryVariants, $field_materialcolor_primary_variants->ID() );
        $field_materialcolor_secondary->setSelections( $this->owner->ColorSecondaryVariants, $field_materialcolor_secondary_variants->ID() );
        $field_materialcolor_accent->setSelections( $this->owner->ColorSecondaryVariants, $field_materialcolor_accent_variants->ID() );
    }

    # +------------------------------------------------------------------------+
    # HELPER METHODS
    # +------------------------------------------------------------------------+
    /**
     * Simple helper method to validate HEX values of needed
     * 
     * @return bool
     */
    protected function is_hex($hex) {
        // Must be a string.
        $valid = is_string($hex);
      
        // Hash prefix is optional.
        $hex = ltrim($hex, '#');
      
        // Must be either RGB or RRGGBB.
        $length = strlen($hex);
        $valid = $valid && ($length === 3 || $length === 6);
      
        // Must be a valid hex value.
        return $valid && ctype_xdigit($hex);
    }
}

```