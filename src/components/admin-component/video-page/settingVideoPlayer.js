import mediaelement from "mediaelement/full";

export default {
  settingForList() {
    const playerId = this.id;
    this.player = new MediaElementPlayer(document.querySelector(`#${this.id}`), {
      playText: "play",
      videoWidth: "100%",
      videoHeight: document.querySelector(`.${this.id}`).offsetWidth / 1.77,
      features: [""],
      showPosterWhenPaused: true,
      hideVideoControlsOnPause: true,
      clickToPlayPause: false,
      controlsTimeoutDefault: 0,
      success(media) {}
    });
    this.player.setSrc(this.src);
    this.player.setPoster(this.poster);
    this.player.media.load();
    const controls = document.querySelector(`.${this.id} .mejs__controls`);
    document.querySelector(`.${playerId}`).addEventListener("mouseenter", e => {
      const halfTimeVideo = this.player.media.duration;
      this.player.media.setCurrentTime(halfTimeVideo / 2);
      this.player.media.play();
      this.player.media.setMuted(true);
      this.player.media.addEventListener("timeupdate", e => {
        if (this.player.media.currentTime > halfTimeVideo / 2 + 5) {
          this.player.pause();
        }
      });
    });

    document.querySelector(`.${this.id}`).addEventListener("mouseleave", e => {
      this.player.pause();
    });
  },
  settingForMainPlayer() {
    this.player = new MediaElementPlayer(document.querySelector(`#${this.id}`), {
      playText: "play",
      videoWidth: "100%",
      videoHeight: document.querySelector(`.${this.id}`).offsetWidth / 1.77,
      useDefaultControls: false,
      playText: "Play"
    });
    this.player.setSrc(this.src);
    this.player.setPoster(this.poster);
    this.player.media.load();
    const videoWraper = document.querySelector(`.${this.id}`);
    videoWraper.classList.add("mytheme-mejs-container");
  }
};
