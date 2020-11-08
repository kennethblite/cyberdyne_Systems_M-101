(function(jQuery) {
jQuery.fn.fadeInSequence = function(fadeInTime, timeBetween)
{
    //Default Values
    timeBetween = typeof(timeBetween) == 'undefined' ? 0 : timeBetween;
     fadeInTime = typeof(fadeInTime) == 'undefined' ? 500 : fadeInTime;
 
    //The amount of remaining time until the animation is complete.
    //Initially set to the value of the entire animation duration.
    var remainingTime = jQuery(this).size() * (fadeInTime + timeBetween);
 
    var i=0; //Counter
    return jQuery(this).each(function()
    {
        //Wait until previous element has finished fading and timeBetween has elapsed
        jQuery(this).delay(i++*(fadeInTime+timeBetween));
 
        //Decrement remainingTime
        remainingTime -= (fadeInTime+timeBetween);
 
        if(jQuery(this).css('display') == 'none')
        {
            jQuery(this).fadeIn(fadeInTime);
        }
        else //If hidden by other means such as opacity: 0
        {
            jQuery(this).animate({'opacity' : 1}, fadeInTime);
        }
 
        //Delay until the animation is over to fill up the queue.
        jQuery(this).delay(remainingTime+timeBetween);
 
    }); 
 
};
})(jQuery);


(function(jQuery) {
jQuery.fn.fadeOutSequence = function(fadeOutTime, timeBetween)
{
    //Default Values
    timeBetween = typeof(timeBetween) == 'undefined' ? 0 : timeBetween;
     fadeOutTime = typeof(fadeOutTime) == 'undefined' ? 500 : fadeOutTime;
 
    //The amount of remaining time until the animation is complete.
    //Initially set to the value of the entire animation duration.
    var remainingTime = jQuery(this).size() * (fadeOutTime + timeBetween);
 
    var i=0; //Counter
    return jQuery(this).each(function()
    {
        //Wait until previous element has finished fading and timeBetween has elapsed
        jQuery(this).delay(i++*(fadeOutTime+timeBetween));
 
        //Decrement remainingTime
        remainingTime -= (fadeOutTime + timeBetween);
 
        if(jQuery(this).css('display') == 'none')
        {
            jQuery(this).fadeOut(fadeOutTime);
        }
        else //If hidden by other means such as opacity: 0
        {
            jQuery(this).animate({'opacity' : 0}, fadeOutTime);
        }
 
        //Delay until the animation is over to fill up the queue.
        jQuery(this).delay(remainingTime + timeBetween);
 
    }); 
 
};
})(jQuery);
