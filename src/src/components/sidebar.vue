<template>
<div>
    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallClass">
        <li class="sidebar-menu-item px-3 active" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-on mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2 active" :class="sidebarSmallClass">Home</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Trending</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Subscriptions</p>
        </li>
    </ul>

    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallClass">
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Library</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">History</p>
        </li>
    </ul>

    <div class="sidebar-sign-in px-4 py-3" :class="sidebarSmallHideClass">
        <p class="sign-in-text">Sign in to like videos, comment, and subscribe.</p>
        <button class="btn btn-outline-primary btn-lg sign-in no-radius no-hover-color" type="button">
        <span class="yt-icon blue">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12,0 C18.62375,0 24,5.37625 24,12 C24,18.62375 18.62375,24 12,24 C5.37625,24 0,18.62375 0,12 C0,5.37625 5.37625,0 12,0 Z M12,10.63625 C13.66,10.63625 15,9.29625 15,7.63625 C15,5.97625 13.66,4.63625 12,4.63625 C10.34,4.63625 9,5.97625 9,7.63625 C9,9.29625 10.34,10.63625 12,10.63625 Z M12,12.40875 C8.33375,12.40875 5.455,14.18125 5.455,15.8175 C6.84125,17.95 9.26875,19.3625 12,19.3625 C14.73125,19.3625 17.15875,17.95 18.545,15.8175 C18.545,14.18125 15.66625,12.40875 12,12.40875 Z"></path></g></svg>
        </span>
        Sign In
        </button>
    </div>

    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallHideClass">
        <li class="px-3"><h5 class="mx-3 sidebar-menu-title">Best of youtube</h5></li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/bRjaQ4eT0Q9nUZr1egi5Lr2a7FUn0fwbEVEftmduCIvAFkV4kWMN2lKI8KK9zeriF29JRIEQnQ=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Music</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/ruOIdsjthojpZjjCIk5j70pveWZtDci2291MAxZi08BHRFA4Avs-TA4OjeTHeFjvprPt5i54=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Sports</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/aSg2e86z1QeOHz6UFPQ7CLh-lVaSA-Y06WFoDcgBxmORS7KlHb6ujSOcraW_Id3MrWBOh8pMAQ=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Gaming</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/OAiKZsFeb-CqCIhi5SWxJL0hIioaTpxJj14tFjT5MhoP9WUsO1L5bId2e0MD5ZTC1CNG68E5=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">News</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Live</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <img src="https://yt3.ggpht.com/BU3FCCsxgMe2dleBfhYori80LYe5qMHBFt4q-SX5w2b7VdFVhMYG5syeYtkBxuwzjYI6zyyE=s88-c-k-c0x00ffffff-no-rj" class="yt-rounded img-fluid">
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">360° Video</p>
        </li>
    </ul>

    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallHideClass">
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Browse Channels</p>
        </li>
    </ul>

    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallHideClass">
        <li class="px-3"><h5 class="mx-3 sidebar-menu-title">More from youtube</h5></li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Live</p>
        </li>
    </ul>

    <ul class="sidebar-menu px-0 py-2 mx-0 my-2" :class="sidebarSmallHideClass">
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Settings</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Report History</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Help</p>
        </li>
        <li class="sidebar-menu-item px-3" :class="sidebarSmallClass">
        <div class="yt-icon yt-icon-off mx-3" :class="sidebarSmallClass">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope yt-icon"><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g></svg>
        </div>
        <p class="sidebar-menu-item-text m-0 p-2" :class="sidebarSmallClass">Send feedback</p>
        </li>
    </ul>

    <div class="sidebar-sign-in px-4 py-3" :class="sidebarSmallHideClass">
        <div class="guide-block mb-3">
        <a href="#" class="guide-link">About</a>
        <a href="#" class="guide-link">Press</a>
        <a href="#" class="guide-link">Copyright</a>
        <a href="#" class="guide-link">Contact us</a>
        <a href="#" class="guide-link">Creators</a>
        <a href="#" class="guide-link">Advertise</a>
        <a href="#" class="guide-link">Developers</a>
        </div>
        <div class="guide-block mb-3" :class="sidebarSmallHideClass">
        <a href="#" class="guide-link">Terms</a>
        <a href="#" class="guide-link">Privacy</a>
        <a href="#" class="guide-link">Policy & Safty</a>
        <a href="#" class="guide-link">How YouTube works</a>
        <a href="#" class="guide-link">Test new features</a>
        </div>

        <div class="guide-block" :class="sidebarSmallHideClass">
        <a href="#" class="copyright-link">© 2021 Google LLC</a>
        </div>
    </div>
</div>
</template>

<script>
    module.exports = {
        props: {
            sidebarSmallClass: Object,
            sidebarSmallHideClass: Object,
        }
    };  
</script>