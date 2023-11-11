<?php

namespace RS\Traits;

use RS\Utils\Log;
use SilverStripe\View\ArrayData;
use SilverStripe\View\SSViewer;

trait DataListTrait
{

    /**
     * @var ArrayData
     */
    protected $InputDataList;

    /**
     * @var string
     */
    protected $ListID;

    /**
     * Set a list of values rendered into a <datalist> tag (HTMLDataListElement)
     * @param string $id optional datalist id attribute
     * @return FormField
     */
    public function setDataList(ArrayData $list_options, $id = null)
    {
        $this->InputDataList = $list_options;
        if ($id) {
            $this->ListID = $id;
            $this->setAttribute('list', $this->ListID);
            $this->InputDataList->setField('ID', $this->ListID);
        }

        return $this;
    }

    public function getDataList()
    {
        return $this->InputDataList;
    }

    public function DataList()
    {
        $viewer = new SSViewer('RS\\Forms\\DataList');
        return $viewer->process($this->InputDataList);
    }
}
