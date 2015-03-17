/**
 * Created by eugen on 3/16/15.
 */
( function( $ ) {

    $.fn.equalHeights = function ( target, options, callback ) {
        var maxHeight = 0;
        var $comparedEls = $(this);
        $comparedEls.each(function(){
            var currentEl = $(this);
            var currentHeight = currentEl.height();
            if (currentHeight > maxHeight ) { maxHeight = currentHeight; }
            if (typeof callback == 'function') { callback.call(currentEl); }
        });
        $comparedEls.height(maxHeight);
        return maxHeight;
    }

    $.fn.scrollTo = function( target, options, callback ){
        if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
        var settings = $.extend({
            scrollTarget  : target,
            offsetTop     : 50,
            duration      : 500,
            easing        : 'swing'
        }, options);
        return this.each(function(){
            var scrollPane = $(this);
            var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
            var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top;
            scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
                if (typeof callback == 'function') { callback.call(this); }
            });
        });
    }
} )( jQuery );