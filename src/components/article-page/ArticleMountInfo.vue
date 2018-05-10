<template>
  <div class="item-page__mount-info">
                    <ul class="item-page__mount-info__list">
                        <li class="item-page__mount-info__list__item">Гора: {{info.name}}</li>
                        <li class="item-page__mount-info__list__item">Країна:{{info.country}} </li>
                        <li class="item-page__mount-info__list__item">Система:{{info.system}} </li>
                        <li class="item-page__mount-info__list__item">Висота: {{info.height}} м.</li>
                    </ul>
                </div>
</template>

<script>
export default {
    name: "ArticleMountInfo",
    data() {
        return {};
    },
    props: {
        info: {
            type: Object,
            default: () => {
                return {
                    name: {
                        type: String,
                        default: ""
                    },
                    country: {
                        type: String
                    },
                    system: {
                        type: String
                    },
                    height: {
                        type: Number
                    }
                };
            }
        }
    }
};
</script>

