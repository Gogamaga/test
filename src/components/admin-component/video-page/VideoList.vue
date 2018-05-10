<template>
<div class="container-fluid">
    <Button :label="'налаштування'" @handleClick="toSetting"/>
  <div class="row">
      <div class="col-lg-3">
          <div class="video-list__card" v-for="video in videos" :key="video.id"  @click="handeleChoiseVideo(video.id)">
              <div class="video-list__card__image-container">
                <video-player :src="video.src" :poster="video.poster" :setting='settingForList' />
              </div>
          <div class="video-list__card-title">
            <p  class="">{{video.title}}</p>
          </div>
          </div>
          
      </div>
      <div class="col-lg-9 ">
          <div class="row justify-content-center" >
            <video-player :src="choiceVideo.src" :poster="choiceVideo.poster" :setting="settingForMainPlayer" />
          </div>
      </div>
  </div>
  
</div>  
</template>

<script>
import { videos } from "./videos";
import setting from "./settingVideoPlayer";
import VideoPlayer from "./VideoPlayer";
import Button from "@/components/admin-component/Button";
export default {
    name: "VideoList",
    data() {
        return {
            videos,
            settingForList: setting.settingForList,
            settingForMainPlayer: setting.settingForMainPlayer,
            choiceVideo: {
                src: "https://www.youtube.com/watch?v=eFCiycex5MA",
                poster: "https://i.ytimg.com/vi/ic869w93roI/maxresdefault.jpg"
            }
        };
    },
    components: {
        VideoPlayer,
        Button
    },

    methods: {
        handeleChoiseVideo(id) {
            this.choiceVideo = this.videos.reduce((prev, video) => {
                if (video.id === id) {
                    prev = { ...video };
                }
                return prev;
            }, {});
        },
        toSetting() {
            this.$router.push("/admin/dashboard/player/setting");
        }
    }
};
</script>
<style>
.video-list__card {
    height: 200px;
}
.video-list__card__image-container {
    width: 100%;
    height: max-content;
    overflow: hidden;
}
</style>
