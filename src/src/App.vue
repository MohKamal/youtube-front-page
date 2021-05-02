<template>
    <div id="app-root">
        <navbarDesktop v-on:hamburger="hamburger"></navbarDesktop>
        <navbarMobile></navbarMobile>
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 p-0 bg-white desktop" :class="hamburgerClass" id="sidebar">
                    <sidebar :sidebarSmallClass="sidebarSmallClass" :sidebarSmallHideClass="sidebarSmallHideClass" ></sidebar>
                </div>

                <div class="main p-s-0" :class="mainClass">
                    <div id="slider" ref="slider" class="row py-3 px-5 filter-wrapper mb-4">
                        <button class="arrow arrow-left" @click="moveLeft" ref="sliderLeftArrow" id="sliderLeftArrow">
                            <span class="yt-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g></svg>
                            </span>
                        </button>
                        <button class="arrow arrow-right" @click="moveRight" ref="sliderRightArrow" id="sliderRightArrow">
                            <span class="yt-icon">
                                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g></svg>
                            </span>
                        </button>
                        <filters></filters>
                    </div>
                    <div class="row ml-2 m-sm-0 p-4 p-s-0">
                        <videoCard v-for="video in videos" :video="video" :key="video.id" :VideoCardSmallLarge="VideoCardSmallLarge" @mouseout.native="outCard" @mouseover.native="overCard"></videoCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navbarDesktop from './components/navbar-desktop.vue'
import navbarMobile from './components/navbar-mobile.vue'
import filters from './components/filters.vue'
import sidebar from './components/sidebar.vue'
import videoCard from './components/video-card.vue'
import { getAllVideos } from './services/videoManager.js'

export default {
    data: function() {
        return {
            OpenHamburger: true,
            videos: [],
            showOptionsValue: false,
        }
    },
    created: function() {
        // Alias the component instance as `vm`, so that we
        // can access it inside the promise function
        var vm = this;
        // Fetch our array of posts from an API
        getAllVideos().then(response => {
            vm.videos = response.data
        });
    },
    computed: {
        hamburgerClass() {
            return {
                'hamburger-open': this.OpenHamburger,
                'hamburger-close': !this.OpenHamburger,
            }
        },
        sidebarSmallClass() {
            return {
                'small': !this.OpenHamburger,
            }
        },
        sidebarSmallHideClass() {
            return {
                'small-hide': !this.OpenHamburger,
            }
        },
        VideoCardSmallLarge() {
            return {
                'card-preview': this.OpenHamburger,
                'card-preview-large': !this.OpenHamburger,
            }
        },
        mainClass() {
            return {
                'col-md-10': this.OpenHamburger,
                'col-md-11': !this.OpenHamburger,
                'flex-to-95': !this.OpenHamburger
            }
        }
    },
    methods: {
        hamburger(event) {
            this.OpenHamburger = !this.OpenHamburger;
        },
        moveRight: function(event) {
            var wrapper = this.$refs.slider;
            var filters = wrapper.children.filters.children[0];
            var last = filters.children[filters.children.length - 1];
            var arrow = this.$refs.sliderRightArrow;
            if((last.offsetLeft + last.offsetWidth) > arrow.offsetLeft - 10) {
                //event.target.classList.remove('hidden');
                for(let i=0; i < filters.children.length; i++) {
                    filters.children[i].style.left = (filters.children[i].offsetLeft -10) + 'px';
                }
            } else {
                //event.target.classList.add('hidden');
            }
        },
        moveLeft: function(event) {
            var wrapper = this.$refs.slider;
            var filters = wrapper.children.filters.children[0];
            var first = filters.children[0];
            var arrow = this.$refs.sliderLeftArrow;
            if(first.offsetLeft < (arrow.offsetLeft + arrow.offsetWidth) - 10) {
                //event.target.classList.remove('hidden');
                for(let i=0; i < filters.children.length; i++) {
                    filters.children[i].style.left = (filters.children[i].offsetLeft + 10) + 'px';
                }
            }else {
                //event.target.classList.add('hidden');
            }
        },
        overCard: function(event) {
            var elm = event.target;
            if(elm) {
                if(elm.classList.contains('preview-img')) {
                    var wrapper = elm.parentElement;
                    for(let i=0; i < wrapper.children.length; i++) {
                        if(wrapper.children[i].classList.contains('vd-option')) {
                            wrapper.children[i].classList.remove('hidden');
                        }
                    }
                }
            }
        },
        outCard: function(event) {
            var elm = event.target;
            if(elm) {
                if(elm.classList.contains('preview-img')) {
                    var wrapper = elm.parentElement;
                    for(let i=0; i < wrapper.children.length; i++) {
                        if(wrapper.children[i].classList.contains('vd-option')) {
                            wrapper.children[i].classList.add('hidden');
                        }
                    }
                }
            }
        }
    },
    components: {
        navbarDesktop,
        navbarMobile,
        sidebar,
        videoCard,
        filters
    },
    mounted: function() {
        var wrapper = this.$refs.slider;
        var filters = wrapper.children.filters.children[0];
        var lastposition = 0;
        for(let i=0; i < filters.children.length; i++) {
            filters.children[i].style.left = lastposition + 'px';
            lastposition += filters.children[i].offsetWidth + 10;
        }
    }
}
</script>