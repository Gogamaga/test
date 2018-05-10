<template>
    <div class="video-player" :class="id" style="width:100%">
        <img :src="logo" alt="" class="video-player__logo">
        <video pauseText="пауза" preload="auto"  :id="id" type="video/youtube" controls=false ></video>
    </div>
</template>

<script>
import mediaelement from "mediaelement/full";

import shortid from "shortid";
export default {
    name: "VideoPlayer",
    data() {
        return {
            id: shortid.generate(),
            player: null,
            width: 0
        };
    },
    props: {
        src: {
            type: String,
            default: ""
        },
        poster: {
            type: String,
            default: ""
        },
        setting: {
            type: Function,
            default: function() {}
        },
        logo: {
            type: String,
            default:
                "http://www.logo-designer.co/wp-content/uploads/2017/08/2017-youtube-logo-design-6.png"
        }
    },
    computed: {
        settingPlayer() {
            return this.settingLocal.setting;
        },
        settingLocal() {
            return JSON.parse(localStorage.getItem("setting"));
        }
    },
    created() {},
    mounted() {
        this.player = new MediaElementPlayer(
            document.querySelector(`#${this.id}`),

            this.settingPlayer
        );
        this.player.setSrc(this.src);
        this.player.setPoster(this.poster);
    },
    watch: {
        src() {
            this.player.setSrc(this.src);
            this.player.setPoster(this.poster);
            this.player.media.load();
        }
    }
};
</script>

<style>
@import "mediaelement/build/mediaelementplayer.min.css";
@import "../../../assets/mediaelement-mediaelement-plugins-82f0580/dist/stop/stop.css";
.video-player .mejs__container {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.video-player {
    position: relative;
}
.video-player__logo {
    width: 100px;
    position: absolute;
    top: 5px;
    left: 5px;
    display: block;
    z-index: 10;
    opacity: 0.4;
}
.video-player .mejs__controls {
    background-color: black;
}
.video-player iframe {
    width: 100%;
    height: 100%;
}
/* .video-player .mejs__overlay-button {
    background: url("../../../assets/player/play-button.svg") no-repeat;
} */
/* .video-player .mejs__overlay-button:hover {
    transform: scale(1.1);
}
.video-player .mejs__time-current {
    background-color: red;
}
.video-player .mejs__time-hovered {
    background-color: white;
}
.video-player .mejs__currenttime {
    font-size: 14px;
}
.video-player .mejs__overlay:hover > .mejs__overlay-button {
    background-position: 0;
} */
</style>

