import MediaPlayer from '@eycopia/mediaplayerjs';
import AutoPlay from '@eycopia/mediaplayerjs/lib/plugins/AutoPlay';
import AutoPause from '@eycopia/mediaplayerjs/lib/plugins/AutoPause';
import Ads from '@eycopia/mediaplayerjs/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video, plugins: [
        new AutoPlay(), new AutoPause(), new Ads()
    ]
});

const playB: HTMLElement = document.getElementById('playBoton');
playB.onclick = () => player.togglePlay();

const muteB: HTMLElement = document.getElementById('muteBoton');
muteB.onclick = () => player.toggleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error)
    });
}