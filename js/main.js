//Below is jQuery code for a plugin called Backstretch.  This plugin allows you to add a background image to any page or element which will be automatically and dynamically resized.

$( document ).ready(function() {
    $.backstretch("img/Family.Photos.Breck-83b.png");
});

//Below is jQuery code for a plugin called TURNBOX.  This plugin allows for a little interactive box to appear on the right side of the screen that will change when you hover over it.
$( document ).ready(function() {
    $(".sample").turnBox({
        width: 120,
        height: 60,
        axis: "X",
        perspective: 800,
        duration: 200,
        delay: 0,
        easing: "linear",
        direction: "positive",
        type: "real"
    });

    $(".message").turnBox({
        height: automatically
    });
});