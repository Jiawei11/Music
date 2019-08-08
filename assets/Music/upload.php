<?php
    $data = file_get_contents('php://input');
    $fn = 'test.mp3';
    $file = fopen($fn,'w+');
    fwrite('../mp3/' . $file,$data);
    fclose($file);