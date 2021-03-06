import VideoList from "@/components/admin-component/video-page/VideoList.vue";
import VideoWraper from "@/components/admin-component/video-page/VideoWraper.vue";

import VideoPlayerSetting from "@/components/admin-component/video-page/VideoPlayerSetting";

export default {
  path: "player",
  component: VideoWraper,
  children: [
    {
      path: "",
      component: VideoList,
      name: "Admin.Video.List",
      meta: {
        title: "Player"
      }
    },
    {
      path: "setting",
      component: VideoPlayerSetting,
      name: "Admin.Video.Setting",
      meta: {
        title: "Player"
      }
    }
  ]
};
