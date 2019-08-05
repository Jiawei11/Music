<?php
    include_once('./pdolink.php');

    $sql = $db->query('select * from song');

    echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));