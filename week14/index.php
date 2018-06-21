<?php

$num = $_REQUEST['num'];
if (!$num) die('Parameter "num" is required.');

$output_num = '';
switch ($num) {
    case 0:
        $output_num = 'zero';
        break;
    case 1:
        $output_num = 'one';
        break;
    case 2:
        $output_num = 'two';
        break;
    case 3:
        $output_num = 'three';
        break;
    case 4:
        $output_num = 'four';
        break;
    case 5:
        $output_num = 'five';
        break;
}
echo $output_num.'<br>';

$script = file_get_contents(__FILE__);
$script = highlight_string($script);

echo $script;
