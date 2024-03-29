<?php

namespace RS\Traits;

/**
 * Enables classes to be created statically
 *
 * @example MyCass::create(...)
 */
trait CreatableTrait {
    public static function create(...$args) {
        $class = static::class;
        return new static(...$args);
    }
}
