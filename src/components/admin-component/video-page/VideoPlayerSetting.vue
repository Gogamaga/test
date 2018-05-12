<template>
    <div class="container-fluid">
        <Button :label="'до плеєра'" @handleClick="backToPlayer" />
        <div class="row">
            <div class="col-lg-4">
                <v-select @input="onChange" :options="[{label:'1', name:'2'}]" />
                <span>Volume</span>
                <input :value="setting.startVolume" type="range" name="startVolume" id="" min="0" max="1" step="0.1" @input="hadleInput">
                <Input :checked="setting.muted" :label="'Muted'" name="muted" @handleInput="hadleInput" type="checkbox" />
                <Input :checked="setting.showPosterWhenPaused" :label="'ShowPosterWhenPaused'" name="showPosterWhenPaused" @handleInput="hadleInput" type="checkbox" />
                <Input :checked="setting.showPosterWhenEnded" :label="'ShowPosterWhenEnded'" name="showPosterWhenEnded" @handleInput="hadleInput" type="checkbox" />
                <Input :checked="setting.pauseOtherPlayers" :label="'PauseOtherPlayers'" name="pauseOtherPlayers" @handleInput="hadleInput" type="checkbox" />

                <Input :label="'ResponsiveSize'" name="pauseOtherPlayers" @handleInput="visibleSizeInput" type="checkbox" />
                <div v-if="responsiveSize">
                    <Input :value="setting.videoWidth" :label="'Width'" name="videoWidth" @handleInput="hadleInput" type="number" />
                    <Input :value="setting.videoHeight" :label="'Height'" name="videoHeight" @handleInput="hadleInput" type="number" />
                </div>
            </div>
            <div class="col-lg-8">
                <Input :value="styling.logo" :label="'Logo'" name="logo" @handleInput="handleInputStyling" type="text" />
                <Button :label="'O'" @handleClick="handlePlayerVisible" />
                <video-player :poster="'https://i.ytimg.com/vi/ws2U4EUj-CE/maxresdefault.jpg'" v-if="playerVisible" :logo="styling.logo&&styling.logo" :src="'https://www.youtube.com/watch?v=eFCiycex5MA'" :setting="settingPlayer.settingForMainPlayer" />
            </div>
            <Button :label="'зберегти'" @handleClick="saveSetting" />
        </div>
    </div>
</template>

<script>
import shortid from "shortid";
import vSelect from "vue-select";
import Button from "@/components/admin-component/Button";
import Input from "@/components/admin-component/Input";
import VideoPlayer from "@/components/admin-component/video-page/VideoPlayer";
import settingPlayer from "@/components/admin-component/video-page/settingVideoPlayer";
export default {
    name: "VideoPlayerSettinng",
    components: {
        vSelect,
        Button,
        Input,
        VideoPlayer
    },
    data() {
        return {
            settingPlayer,
            responsiveSize: false,
            setting: {
                muted: false,
                startVolume: 0.5,
                showPosterWhenPaused: false,
                showPosterWhenEnded: false,
                videoWidth: 480,
                videoHeight: 270,
                pauseOtherPlayers: true
            },
            styling: {
                logo: ""
            },
            playerVisible: true
        };
    },
    created() {
        const { setting, styling } = JSON.parse(localStorage.getItem("setting"));
        this.setting = setting;
        this.styling = styling;
    },
    methods: {
        onChange(e) {
            console.log(e);
        },
        visibleSizeInput({ target }) {
            if (target.checked) {
                this.responsiveSize = false;
                this.setting = { ...this.setting, videoWidth: "100%", videoHeight: "auto" };
            } else {
                this.responsiveSize = true;
                this.setting = { ...this.setting, videoWidth: 0, videoHeight: 0 };
            }
        },
        handlePlayerVisible() {
            this.playerVisible = !this.playerVisible;
        },
        hadleInput({ target }) {
            const { name, value, checked, type } = target;

            if (type === "checkbox") {
                this.setting[name] = checked;
            } else {
                this.setting[name] = +value;
            }
        },
        handleInputStyling({ target }) {
            const { name, value } = target;
            this.styling[name] = value;
        },
        backToPlayer() {
            this.$router.push({
                name: "Admin.Video.List"
            });
        },
        saveSetting() {
            const setting = JSON.stringify({ setting: this.setting, styling: this.styling });
            localStorage.setItem("setting", setting);
        }
    }
};
</script>
