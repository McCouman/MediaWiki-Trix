(function($){ $.fn.bounceBox = function(){ this.css({ bottom : -this.outerHeight(), marginLeft : -this.outerWidth()/2, position : 'fixed', left : '50%' }); return this; } $.fn.bounceBoxShow = function(){ this.stop().animate({bottom:0},{easing:'easeOutBounce'}); this.data('bounceShown',true); return this; } $.fn.bounceBoxHide = function(){ this.stop().animate({bottom:-this.outerHeight()}); this.data('bounceShown',false); return this; } $.fn.bounceBoxToggle = function(){ if(this.data('bounceShown')) this.bounceBoxHide(); else this.bounceBoxShow(); return this; } })(jQuery);