
app.controller('MyController', function ($scope,$document, $anchorScroll,$window, $timeout,$compile) {

	/*Collapse Start*/
	 $scope.oneAtATime = true;
	$scope.status={
		isFirstOpen:true,
		isFirstClose:false,
		isFirstClose1:false,
		isFirstClose2:false,
		isFirstClose3:false,
		isFirstClose4:false
	};
	/*Collapse End*/

            /*Sidebar hide show start*/            
            // $scope.IsHidden = true; 
            $scope.ShowHide = function () 
            {  
               $scope.e= document.getElementById("myDIV");
            // angular.element(".sidebar right offcanvas-nav").css('right');   
              if($scope.e.style.right == '-370px')
              {               	 
             	 $scope.e.style.right = "0px"; 
              	 angular.element(".fa-bars").fadeOut("slow"); 
              }
              else if($scope.e.style.right == '0px')
              {               	 
                $scope.e.style.right = "-370px"; 
              	angular.element(".fa-bars").fadeIn("slow"); 
              }

            };
            /*Sidebar hide show end*/

            /*Social btn hide show start*/
            $scope.newClass = "";
            $scope.className = "SocialBtn";
            $scope.LoginClass="HideLogin";
            $scope.ShowSocialBtn=function(){  

            	if($scope.className == "SocialBtn")
            	{
            		$scope.className = "Socialbox";
            		$scope.newClass="nav-is-visible";
            		 $scope.LoginClass="HideLoginDiv";
            	}           

            	else if($scope.className == "Socialbox")
            	{
            		$scope.className = "SocialBtn";
            		$scope.newClass = "";
            		$scope.LoginClass="HideLogin";
            	}

            };
            /* Social btn hide show end*/

            /*Map section start*/
            $scope.map = {
            	center: {
            		latitude: 21.2334329,
            		longitude: 72.86372
            	},
            	zoom: 15
            	
            };
            $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 21.2334329,
        longitude: 72.86372
      }
      
    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });
    $timeout(function () {
      $scope.marker.coords = {
        latitude: 21.2334329,
        longitude: 72.86372
      };
      $scope.dynamicMoveCtr++;
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 21.2334329,
          longitude: 72.86372
        };
        $scope.dynamicMoveCtr++;
      }, 2000);
    }, 1000);
           /* Map section end*/

            /*Twitter section start*/
            if(angular.element('.tweet').length!=0){
        
            	angular.element('.tweet').twittie({
            		username: 'phoenixcoded',
            		dateFormat: '%b. %d, %Y',
            		template: '<div class="circle mb20">{{avatar}}</div><p>{{tweet}}</p> <time class="date">{{date}}</time>',
            		count: 10
            	},
            	$scope.abc=function(){

            		angular.element('.tweet ul').addClass("tweet_slider");
            		angular.element('.tweet li').addClass("item");
            		angular.element('.tweet_slider').owlCarousel(
            		{
            			dots: false,
            			loop:true,
            			margin:20,
            			responsiveClass:true,
            			responsive:
            			{
            				0:{
            					items:1,
            					nav:true
            				},
            				400:{
            					items:1,
            					nav:true
            				},
            				700:{
            					items:1,
            					nav:true
            				},
            				1000:{
            					items:1,
            					nav:true,
            					loop:true
            				}
            			}
            		});
            	}


            	);
			}
			 /*Twitter section  end*/

			/*Menu hide/show on scroll  start*/	
			$scope.ost = 0;
		    $(window).scroll(function() {
		    	
		    	$scope.m=angular.element($window);
		        $scope.cOst = $scope.m.scrollTop();
		        if($scope.cOst == 0)
		        {
		        	
		        	angular.element('#navbar').addClass("top-nav-collapse");
		        } else if($scope.cOst > $scope.ost)
		        {
		        	
		        	angular.element('#navbar').addClass("top-nav-collapse").removeClass("default");
		        } else 
		        {
		        	
		        	angular.element('#navbar').addClass("default").removeClass("top-nav-collapse");
		        }
		        $scope.ost = $scope.cOst;
		    });
		   /* Menu hide/show on scroll end*/

		 /*Preloader Starts*/ 
		angular.element($window).bind('load', function() {
			
		  angular.element('#btry-loader').fadeOut('slow',function(){
			             
			            angular.element($window).remove();
			        });
		});  
       /*Preloader Ends*/


       /*Magnific Pop-Up Js start*/
    angular.element('#video').magnificPopup({

        type: 'iframe',
        closeOnBgClick: false, 
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        }, 
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
	 /*Magnific Pop-Up Js end*/
	 
    
   /* Contact form start*/
    $scope.send_form=function()
    {
    	
    	$scope.CFName;
    	$scope.CNO;
    	$scope.CEmail;
    	$scope.CMessage;
    
    	//Firstname
    	$scope.CFName=$scope.ContactFName;
		
		if ($scope.CFName == undefined || $scope.CFName == "") {
			$scope.first_name=angular.element('#first_name');
			$scope.first_name.focus();
			$scope.first_name.attr("placeholder", "Name is must required..");
			return false;
		}
		// //Contact number		
		$scope.CNO=$scope.ContactNO;		
		$scope.no=angular.isNumber($scope.CNO);

		if ($scope.CNO == undefined || $scope.CNO == "") {
			$scope.contact_no=angular.element('#contact_no');
			$scope.contact_no.focus();
			$scope.contact_no.attr("placeholder", "Contact number is must required..");
			return false;
		}
		else if($scope.no== false)
		{
				alert('Please enter the phone number in digit');
			    $scope.contact_no.attr("placeholder", "Phone number must in digit");
				return false;
			
		}
		// //Email		
		$scope.CEmail=$scope.ContactEmail;
	
		if ($scope.CEmail == undefined || $scope.CEmail == "") {
			$scope.contact_email=angular.element('#contact_email');
			$scope.contact_email.focus();
			$scope.contact_email.attr("placeholder", "Email address is must required");
			return false;
		}
		else
		{
			
			$scope.atpos = $scope.CEmail.indexOf("@");
			$scope.dotpos = $scope.CEmail.lastIndexOf(".");
			if ($scope.atpos<1 || $scope.dotpos<$scope.atpos+2 || $scope.dotpos+2>=$scope.CEmail.length) {
				alert("Not a valid e-mail address");
				$scope.contact_email.focus();
				$scope.contact_email.attr("placeholder", "Please enter valid email address");
		    return false;
			}
		}
		//Message
		$scope.CMessage=$scope.ContactMessage;
	
		if ($scope.CMessage == undefined || $scope.CMessage == "") {
			$scope.contact_message=angular.element('#contact_message');
			$scope.contact_message.focus();
			$scope.contact_message.attr("placeholder", "Message field is required");
			return false;
		}
		
		//Datastring pass to mail.php
		$scope. dataString = '&Name=' + $scope.CFName + '&contact_no=' + $scope.CNO + '&email=' + $scope.CEmail + '&message=' + $scope.CMessage;
		$scope. form = $(this);
		$scope.form.serialize();
		$.ajax({
		type: "POST", url: "http://appestia-angular.phoenixcoded.com/creative/assets/controllers/mail/mail.php",	data: $scope.dataString, success: function() {
			alert('Thanks for your contact. Our team contact you soon as possible');
			$("#submit_contact").attr('disabled','true');
			}
		});

    };
   /* Contact form end*/

    /*Subscriber mail chimp start    */
    $scope.subscriber_email=function()
    {

    	$scope.SubEmail;
    	$scope.SubEmail=$scope.SubscribeEmail;
	
		if ($scope.SubEmail == undefined || $scope.SubEmail == "") {
			
			angular.element('#subscriber_email').focus();
			return false;
		}
		else
		{
			
			$scope.atpos = $scope.SubEmail.indexOf("@");
			$scope.dotpos = $scope.SubEmail.lastIndexOf(".");
			if ($scope.atpos<1 || $scope.dotpos<$scope.atpos+2 || $scope.dotpos+2>=$scope.SubEmail.length) {
				alert("Not a valid e-mail address");				
		    	return false;
			}
		}

	
		// //Datastring pass to mail.php
		$scope.dataString = '&subscriber_email=' + $scope.SubEmail;
		$scope.form = $(this);
		$scope.form.serialize();
		$.ajax({
		type: "POST", url: "http://appestia-angular.phoenixcoded.com/creative/assets/controllers/mail/mailchimp.php",	data: $scope.dataString, success: function() {
			alert('You are subscribe with our newsletter');
			$(".btn-subscribe").attr('disabled','true');
			}
		});
    };
   /* Subscriber mail chimp End*/

   /*Angular scroll animation start*/	
	$scope.animation = {};
	$scope.animation.current = 'fadeInLeft';
	$scope.animation.previous = $scope.animation.current;
	
   		$scope.animateElementIn = function($el) {   			
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};
	$scope.animateElementInUp = function($el) {   			
		$el.removeClass('not-visible');
		$el.addClass('animated ' +  'fadeInUp');
	};
   /*Angular scroll animation  end*/

   /* Modal JS Start */
       /** Sign in / Sign up form switching (in modal)
       *********************************************************/
	angular.element(".form-switch a").bind("click", function(e){		
		         $scope.form = e.target.hash;
		        e.preventDefault();
		        angular.element($scope.form + '> a').click();
	       });

       /* Switch to Sign In/Sign Up Form when Modal open (For separate Sign In/Sign Up button)
       ****************************************************************************************/
       $scope.openLoginModel=function(){	       	
	       	$scope.OpenForm2=function(){	       		
	       	}	       
       };
	   $scope.openSignUpModel=function(){	     				
				$scope.OpenForm1=function(){	       		
	       	}
		};

	/* Modal JS Ends */


  /*Backstretch slider start*/
  $scope.images = [
    'assets/images/banner/slide_1.jpg'/*tpa=http://appestia-angular.phoenixcoded.com/creative/assets/controllers/assets/images/banner/slide_1.jpg*/,
        'assets/images/banner/slide_2.jpg'/*tpa=http://appestia-angular.phoenixcoded.com/creative/assets/controllers/assets/images/banner/slide_2.jpg*/,
        'assets/images/banner/slide_3.jpg'/*tpa=http://appestia-angular.phoenixcoded.com/creative/assets/controllers/assets/images/banner/slide_3.jpg*/
  ];
 /* Backstretch slider End*/




}).value('duScrollOffset', 50);

