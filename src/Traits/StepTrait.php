<?php

namespace RS\Traits;

trait StepTrait {

    public function setStep($step) {
        return $this->setAttribute('step', $step);
    }

    public function getStep() {
        return $this->getAttribute('step');
    }

}