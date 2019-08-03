<?php
    $db = new PDO('mysql:host=localhost;dbname=music','root','');
    $db->exec('set names utf8');