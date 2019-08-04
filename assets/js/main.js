window.onload = () => {
    var music = document.getElementById('music');
    var order = document.querySelectorAll('#Order');
    var musicQueue = [];

    music.addEventListener('ended', () => {
        music.setAttribute('src', './assets/mp3/Super.mp3');
        music.play();
    })

    order.forEach((res) => {
        res.addEventListener('click', () => {
            res.setAttribute('disabled', '');

            // 間隔10秒
            setInterval(() => {
                res.removeAttribute('disabled');
            }, 10000)
        })
    })

}