$(document).ready(function() {
                                                                                                                                        

    // FOR STICKY NAVIGATION
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
                $('nav').addClass('sticky-header');
        } else {
            $('nav').removeClass('sticky-header');
        } 
    }, {
        offset: '100px'
    });








});



















  
  
  