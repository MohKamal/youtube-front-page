<template>
    <div class="card col-md-3 col-sm-12 p-0 m-1">
        <div :class="VideoCardSmallLarge">
            <img :src="'dist/static/img/' + video.thumbnail" class="img-fluid preview-img">
            <div class="vd-lenght"><p>04:15</p></div>
            <div class="vd-option vd-option-1 hidden">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
            </div>
            <div class="vd-option vd-option-2 hidden">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
            <div class="col-md-3 col-s-2 p-0 text-center">
                <a href="#" class="">
                    <img :src="'dist/static/img/' + video.logo" class="img-fluid profil-img">
                </a>
            </div>
                <div class="col-md-9 col-s-10 p-0">
                    <h5 class="card-title">{{ video.title | truncate(25, '...') }}</h5>
                    <a href="#" class="card-username">{{ video.username }}
                        <svg v-if="video.musical" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="username-icon"><g viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></g></svg>
                        <svg v-if="video.verified" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="username-icon"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                    </a>
                    <p class="card-details">{{ video.views }} views <span class="dot-divider"></span> {{ video.time }} ago</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            video: Object,
            VideoCardSmallLarge: Object,
        }
    };
</script>