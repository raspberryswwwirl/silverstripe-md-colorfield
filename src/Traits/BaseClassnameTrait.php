<?php

namespace RS\Traits;

use ReflectionClass;
trait BaseClassnameTrait {
    public static function getClassBaseName() {
        $class_name = new ReflectionClass(static::class);
        return $class_name->getShortName();
    }

    public static function getControllerBaseName() {
        return self::getClassBaseName();
    }  
}