/*---------------------------------------------- 
                 VIDEO
------------------------------------------------*/

        
        $(document).ready(function() {


video_box();
	// Show Video Box
	function video_box() {
		$("#video .open_video").magnificPopup({
			items: {
				src: 'https://www.youtube.com/watch?v=lRhoM30r0vk'
			},

			type: 'iframe',

			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						'</div>', 
                                         patterns: {
							vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: 'https://www.youtube.com/watch?v=lRhoM30r0vk'
					},
				},

				srcAction: 'iframe_src', 
			}
		});
                
                
                
	}



});	