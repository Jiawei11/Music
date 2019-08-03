<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/main.css">
</head>

<body>
    <div align="center" id="header">
        Order Music
    </div>

    <div id="Control">
        <span id="OrderMusicList">
            歌單項目:
            <p>
                <?php
                    include_once('./assets/Music/pdolink.php');
                    $sql = $db->query('select * from song');

                    while($row = $sql->fetch(PDO::FETCH_ASSOC)){
                ?>
                        歌名:<?php echo $row['m_name']; ?> <a href="<?php echo $row['m_href'];?>">點我撥放</a>
                <?php
                    }
                ?>
            </p>
        </span>

        <span id="NowPlaying">

        </span>
    </div>
</body>

</html>