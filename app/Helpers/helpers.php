<?php

if (! function_exists('parentGroupNormalize')) {
    function parentGroupNormalize($string) {
        $array = explode('_', $string);
        $normalize = '';
        for ($i=0;$i<count($array);$i++) {
            $normalize .= ucfirst($array[$i]);
            if ($i + 1 !== count($array)) $normalize .= ' ';
        }
        return $normalize;
    }
}

