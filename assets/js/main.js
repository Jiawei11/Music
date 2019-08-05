window.onload = () => {
    var music = document.getElementById('music');
    var source = document.getElementById('source');
    var musicQueue = [];

    music.addEventListener('ended', () => {

    })

    fetch('./assets/music/data.php')
                    .then((res)=> res.json())
                    .then((res)=>{
                        res.forEach((res)=>{
                            var body = `<li class="list-group-item" style="font-size:30px;">
                                            ${res.m_name}
                                            <button type="button" name="./assets/mp3/${res.m_href}" class="btn btn-primary Order">點我播放</button>
                                        </li>`;

                            document.querySelector('#OrderMusicList ul').innerHTML += body;
                        })
                    }).then(()=>{
                        var order = document.querySelectorAll('.Order');
                        order.forEach((res) => {
                            res.addEventListener('click', () => {
                                res.setAttribute('disabled','');
                                source.setAttribute('src',res.name);
                                music.load();
                                music.play();                                

                                setInterval(() => {
                                    res.removeAttribute('disabled');
                                }, 10000)
                            })
                        })
                    });
                    
}