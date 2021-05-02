
var speed = 1;
var direction = 1;
var wrapperId = "slider";

export function init() {
    var wrapper = document.getElementById(wrapperId);
    console.log(wrapper);
    if(wrapper) {
        addArrows();
    }
}

export function move(direction, filterElement) {
    var filterLeftPos = filterElement.offsetLeft,
        filterRightPos = filterLeftPos + filterElement.offsetWidth;
    // When right side of the filter goes too far - change direction:
    if (filterRightPos > document.body.offsetWidth) {
        direction = -1;
    }
    // When left side of the filter goes too far - change direction:
    if (filterLeftPos < 0) {
        direction = 1;
    }
    // Recalculate position:
    filterElement.style.left = (filterLeftPos + speed * direction) + 'px';
}

export function addArrows(wrapper) {
    if(wrapper) {
        var leftArrow = `
        <button class="arrow arrow-left">
            <span class="yt-icon">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g></svg>
            </span>
        </button>`;
        var rightArrow = `
        <button class="arrow arrow-right">
            <span class="yt-icon">
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g></svg>
            </span>
        </button>`;
        
        wrapper.insertBefore(leftArrow, wrapper.firstChild);
        wrapper.insertBefore(rightArrow, wrapper.firstChild);
    }
}