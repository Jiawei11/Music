window.onload = () => {
    var music = document.getElementById('music');
    var source = document.getElementById('source');
    var musicQueue = [];

    music.addEventListener('ended', () => {
        var value = musicQueue.shift()
        document.getElementById('OrderMusicText').innerText = `NowPlaying:  ${value}`;
        document.querySelector('#musicQueue').removeChild(document.querySelector('#musicQueue li'));

        if(musicQueue.length == 0){
            console.log('All Music Queue Empty');
        }
    })

    async = fetch('./assets/music/data.php')
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
                                var name = res.name.split('/');
                                res.setAttribute('disabled','');
                                source.setAttribute('src',res.name);
                                music.load();
                                music.play();
                                if(musicQueue.length == 0){
                                    document.getElementById('OrderMusicText').innerText = `NowPlaying:  ${name[name.length-1]}`;
                                }

                                musicQueue.push(name[name.length-1].split('.')[0])
                                var body = `<li class="list-group-item" style="font-size:30px;">
                                                ${name[name.length-1].split('.')[0]}
                                            </li>`;

                                document.querySelector('#NowPlaying ul').innerHTML += body;

                                setInterval(() => {
                                    res.removeAttribute('disabled');
                                }, 10000)
                            })
                        })
                    });
                    
}