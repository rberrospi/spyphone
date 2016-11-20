
var app=angular.module('creativeVideo', ['ngAnimate','angularRipple','uiGmapgoogle-maps','angular.backtop','duScroll','angular-scroll-animate','ui.bootstrap','ngCovervid','angular-parallax']);


/*Directive for Scrollabar in sidebar*/
app.directive('scrollable', function ($window) {
  return {
   
    link: function (scope, elem) {      
  // On window resize => resize the app
        scope.initializeWindowSize = function() {
          
          var m = angular.element($window);
     var windowHeight=m.innerHeight();
             var a=elem[0].parentElement.parentElement.children[0];
             var p=windowHeight - a.clientHeight - 5;
             elem.height(p);
               elem.mCustomScrollbar({
                autoHideScrollbar: false,
                theme: 'dark-thick',
                advanced:{
                 updateOnContentResize: true
               }
               
             });
        };
        
       
        scope.initializeWindowSize();
   }
 };
});

/*Directive for owl carousel*/
app.directive('wrapOwlcarousel', function () {  
    return {  
        restrict: 'A',
        link: function (scope, element) {
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options);  
        }  
    };  
});  

/*Directive for  rest window hight */
app.directive('videoBanner', function ($window) {  

  return {
    link: function () {
     
     var m = angular.element($window);
     var windowHeight=m.innerHeight();

     if (m.innerWidth() >= 1600) {
       
      angular.element('#header').css('min-height', windowHeight);
    }
 }       
};  
});

/*Directive for comma counter*/
app.directive("countToComma", ["$timeout","$window", function(a) {

    return {
        replace: !1,
        scope: !0,
        link: function(b, c, d) {

            var executed = false;

            $(window).scroll(function() {

                if(!executed)
                {

                    var counter=$('.CounterS');
                    var hT = counter.offset().top,
                        hH = counter.outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();
                    if (wS > (hT+hH-wH)){

                        executed = true;
                        var e, f, g, h, i, j, k, l = c[0],num,
                            m = function() {

                                num=d.countToComma.replace(/\,/g,''),
                                    d.countToComma=num,
                                    f = 30,
                                    i = 0,
                                    b.timoutId = null,
                                    j = parseInt(d.countToComma) || 0,
                                    b.value = parseInt(d.value, 10) || 0,
                                    g = 1e3 * parseFloat(d.duration) || 0,
                                    h = Math.ceil(g / f),
                                    k = (j - b.value) / h,
                                    e = b.value

                            },
                            n = function() {

                                b.timoutId = a(function() {

                                    e += k,
                                        i++,
                                        i >= h ? (a.cancel(b.timoutId),
                                            e = j,
                                            l.innerText = j.toLocaleString()) : (l.innerText = Math.round(e).toLocaleString(),
                                            n())
                                }, f)
                            },

                            o = function() {

                                b.timoutId && a.cancel(b.timoutId), m(), n()
                            };
                        return d.$observe("countTo", function(a) {

                            a && o()
                        }),
                            d.$observe("value", function() {

                                o()
                            }), !0
                    }
                }
            });

        }
    }
}]);

/*Directive for  counter*/
app.directive("countTo", ["$timeout","$window", function(a) {

    return {
        replace: !1,
        scope: !0,

        link: function(b, c, d) {
            var executed = false;
            $(window).scroll(function() {

                if(!executed)
                {

                    var counterS=$('.CounterS');
                    var hT = counterS.offset().top,
                        hH = counterS.outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();
                    if (wS > (hT+hH-wH)){

                        executed = true;
                        var e, f, g, h, i, j, k, l = c[0],num,
                            m = function() {

                                if(d.countTo % 1 == 0 )
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                                else if(d.countTo.match(","))
                                {

                                    num=d.countTo.replace(/\,/g,''),
                                        d.countTo=num,
                                        f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }
                                else if(d.countTo % 1 !== 0)
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseFloat(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                            },
                            n = function() {

                                b.timoutId = a(function() {

                                    e += k,
                                        i++,
                                        i >= h ? (a.cancel(b.timoutId),
                                            e = j,
                                            l.innerText = j) : (l.innerText = Math.round(e),
                                            n())
                                }, f)
                            },



                            o = function() {
                                b.timoutId && a.cancel(b.timoutId), m(), n()
                            };
                        return d.$observe("countTo", function(a) {

                            a && o()
                        }), d.$observe("value", function() {

                            o()
                        }), !0
                    }
                }
            });

        }
    }
}]);

