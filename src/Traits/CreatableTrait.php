<?php

namespace RS\Traits;

/**
 * Enables classes to be created statically
 * 
 * @example MyCass::create(...)
 */
trait CreatableTrait {
    public static function create(...$args) {
        $class = get_called_class();
        $class = new static(...$args);
        return $class;
    }   
}