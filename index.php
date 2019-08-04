<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/main.css">
    <script src="./assets/js/main.js"></script>
</head>

<body>
    <div align="center" id="header">
        Order Music
    </div>

    <div id="Control">
        <span id="OrderMusicList" class="card">
            <span class="card-body" style="flex:0">
                <h5 class="card-title">Already Order Music List</h5>
            </span>
            <ul class="list-group list-group-flush">
                <?php
                    include_once('./assets/Music/pdolink.php');

                    $sql = $db->query('select * from song');

                    while($row = $sql->fetch(PDO::FETCH_ASSOC)){
                ?>
                        <li class="list-group-item" style="font-size:30px;">
                            <?php echo $row['m_name']; ?>
                            <button type="button" id="Order" name="<?php echo $row['m_href']; ?>" class="btn btn-primary">點我播放</button>
                        </li>
                <?php
                    }
                ?>
            </ul>
        </span>

        <span id="NowPlaying">
            <audio controls id="music">
                <source src="./assets/mp3/Game.mp3">
            </audio>
        </span>
    </div>
</body>

</html>