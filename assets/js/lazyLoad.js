
$(document).ready(function() {
    var lazyImages = $("img[data-src]");

    function lazyLoadImage(image) {
        var imgSrc = $(image).attr("data-src");
        $(image).attr("src", imgSrc).removeAttr("data-src");
    }

    if ("IntersectionObserver" in window) {
        var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    lazyLoadImage(entry.target);
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImages.each(function() {
            lazyImageObserver.observe(this);
        });
    } else {
        // Fallback for browsers that do not support IntersectionObserver
        lazyImages.each(function() {
            lazyLoadImage(this);
        });
    }
});

