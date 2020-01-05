!function(t,e){"use strict";var i="addEventListener",o="getElementsByClassName",n="createElement",s="classList",d="appendChild",l="dataset",a="embed-lightbox-iframe",h="embed-lightbox-is-loaded",r="embed-lightbox-is-opened",c="embed-lightbox-is-showing",m=function(t,i,n){var s=n||{};this.trigger=t,this.elemRef=i,this.rate=s.rate||500,this.el=e[o](a)[0]||"",this.body=this.el?this.el[o]("embed-lightbox-body")[0]:"",this.content=this.el?this.el[o]("embed-lightbox-content")[0]:"",this.href=t[l].src||"",this.paddingBottom=t[l].paddingBottom||"",this.onOpened=s.onOpened,this.onIframeLoaded=s.onIframeLoaded,this.onLoaded=s.onLoaded,this.onCreated=s.onCreated,this.init()};m.prototype.init=function(){var t=this;this.el||this.create();var e,o,n,s,d,l,a=(e=function(e){e.preventDefault(),t.open()},o=this.rate,function(){d=this,s=[].slice.call(arguments,0),l=new Date;var t=function(){var i=new Date-l;i<o?n=setTimeout(t,o-i):(n=null,e.apply(d,s))};n||(n=setTimeout(t,o))});this.trigger[i]("click",a)},m.prototype.create=function(){var t=this,o=e[n]("div");this.el=e[n]("div"),this.content=e[n]("div"),this.body=e[n]("div"),this.el[s].add(a),o[s].add("embed-lightbox-backdrop"),this.content[s].add("embed-lightbox-content"),this.body[s].add("embed-lightbox-body"),this.el[d](o),this.content[d](this.body),this.contentHolder=e[n]("div"),this.contentHolder[s].add("embed-lightbox-content-holder"),this.contentHolder[d](this.content),this.el[d](this.contentHolder),e.body[d](this.el),o[i]("click",function(){t.close()});var l=function(){t.isOpen()||(t.el[s].remove(c),t.body.innerHTML="")};this.el[i]("transitionend",l,!1),this.el[i]("webkitTransitionEnd",l,!1),this.el[i]("mozTransitionEnd",l,!1),this.el[i]("msTransitionEnd",l,!1),this.callCallback(this.onCreated,this)},m.prototype.loadIframe=function(){var t,i,o=this;this.iframeId=a+"-"+this.elemRef,this.body.innerHTML='<iframe src="'+this.href+'" name="'+this.iframeId+'" id="'+this.iframeId+'" onload="this.style.opacity=1;" style="opacity:0;border:none;" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" height="166" frameborder="no"></iframe>',t=this.iframeId,i=this.body,e.getElementById(t).onload=function(){this.style.opacity=1,i[s].add(h),o.callCallback(o.onIframeLoaded,o),o.callCallback(o.onLoaded,o)}},m.prototype.open=function(){this.loadIframe(),this.paddingBottom?this.content.style.paddingBottom=this.paddingBottom:this.content.removeAttribute("style"),this.el[s].add(c),this.el[s].add(r),this.callCallback(this.onOpened,this)},m.prototype.close=function(){this.el[s].remove(r),this.body[s].remove(h)},m.prototype.isOpen=function(){return this.el[s].contains(r)},m.prototype.callCallback=function(t,e){"function"==typeof t&&t.bind(this)(e)},t.ReviewsIframeLightbox=m}("undefined"!=typeof window?window:this,document);
if (!document.getElementById("EmbedSocialIFrame")) {
    var jsEmbed = document.createElement("script");
	if (document.body) {
		jsEmbed.id = "EmbedSocialIFrame", jsEmbed.src = "https://embedsocial.com/cdn/iframe.js", document.body.appendChild(jsEmbed);
	} else {
		jsEmbed.id = "EmbedSocialIFrame", jsEmbed.src = "https://embedsocial.com/cdn/iframe.js", document.getElementsByTagName("head")[0].appendChild(jsEmbed);	
	}
}
if (!document.getElementById("EmbedSocialIFrameLightboxCSS")) {
    var cssEmbed = document.createElement("link");
    cssEmbed.id = "EmbedSocialIFrameLightboxCSS", cssEmbed.rel = "stylesheet", cssEmbed.href = "https://embedsocial.com/cdn/iframe-lightbox.min.css";
    document.getElementsByTagName("head")[0].appendChild(cssEmbed);
}
if (!document.getElementById("EmbedSocialPopup")) {
    var jsEmbed = document.createElement("script");
    jsEmbed.id = "EmbedSocialPopup", jsEmbed.src = "https://embedsocial.com/cdn/popup.min.js", document.getElementsByTagName("body")[0].appendChild(jsEmbed)
}
if (!document.getElementById("EmbedSocialPopupCSS")) {
    var cssEmbed = document.createElement("link");
    cssEmbed.id = "EmbedSocialPopupCSS", cssEmbed.rel = "stylesheet", cssEmbed.href = "https://embedsocial.com/cdn/popup.min.css";
    document.getElementsByTagName("head")[0].appendChild(cssEmbed);
}
EMBEDSOCIALREVIEWSFEED = {
    getEmbedData: function(reviewsRef, albumDiv) {
		var iframes = albumDiv.getElementsByTagName('iframe');
        if (iframes.length <= 0) {
		    var ifrm = document.createElement("iframe");
	    	var srcIfrm = "https://embedsocial.com/api/reviews/widget/"+reviewsRef;
		    ifrm.setAttribute("src", srcIfrm);
		    ifrm.setAttribute("id", 'embedIFrame_'+reviewsRef+Math.random().toString(36).substring(7));
		    ifrm.style.width = "100%";
		    ifrm.style.height = "100%";
		    ifrm.style.border = "0";
		    ifrm.setAttribute("scrolling","no");
		    ifrm.setAttribute("class", "embedsocial-reviews-feed-iframe");
		    albumDiv.appendChild(ifrm);
		    EMBEDSOCIALREVIEWSFEED.initResizeFrame();
		}
    },
    initResizeFrame: function() {
        if(document.getElementById("EmbedSocialIFrame") && "function" === typeof iFrameResize) {
            iFrameResize ({
                messageCallback : function(messageData){ 
                    if (messageData.message.action == "create") {
                        EMBEDSOCIALREVIEWSFEED.createLightBox(messageData.message);
                    }
					if (messageData.message.action == "create_popup") {
						EMBEDSOCIALREVIEWSFEED.createPopupBox(messageData.message);
					} 
                }
            }, '.embedsocial-reviews-feed-iframe');
        } else {
            setTimeout(EMBEDSOCIALREVIEWSFEED.initResizeFrame, 200);
        }
    },
    initResizeLightbox: function(reviewsRef, type) {
        if(document.getElementById("EmbedSocialIFrame") && "function" === typeof iFrameResize) {
			if (type != 'slider') {	
				iFrameResize ({
		            messageCallback : function(messageData){ 
	 					if (messageData.message.action == "close") {
		                    EMBEDSOCIALREVIEWSFEED.closeLightBox(messageData.message.reviewsRef);
		                }
		            },
 					sizeHeight: false,
		        }, '#embed-lightbox-iframe-' + reviewsRef);		
			} else {
				iFrameResize ({
		            messageCallback : function(messageData){ 
	 					if (messageData.message.action == "close") {
		                    EMBEDSOCIALREVIEWSFEED.closeLightBox(messageData.message.reviewsRef);
		                }
		            },
		        }, '#embed-lightbox-iframe-' + reviewsRef);		
			}
        } else {
            setTimeout(function() {EMBEDSOCIALREVIEWSFEED.initResizeLightbox(reviewsRef, type); }, 200);
        }
    },
	initPopupIframe: function() {
        if(document.getElementById("EmbedSocialIFrame") && "function" === typeof iFrameResize) {
            iFrameResize ({
                sizeHeight: false,
                sizeWidth: false
            }, '.embedsocial-iframe-story-popup');
        } else {
            setTimeout(EMBEDSOCIALREVIEWSFEED.initPopupIframe, 200);
        }
    },
	createPopupBox: function(data) {
        var showPopup = true;
        if (data.popupOnce === 'Yes') {
            var delay = 300000;
            if (window.localStorage !== undefined) {
                var lastShown = window.localStorage.getItem('review_popup_last_shown');
                if (lastShown) {
                    if (Date.now() - lastShown < delay) {
                        showPopup = false;
                    } 
                    if (Date.now() - lastShown >= delay) {
                        showPopup = true;;
                        window.localStorage.setItem('review_popup_last_shown', Date.now());
                    } 
                } else {
                    window.localStorage.setItem('review_popup_last_shown', Date.now());
                }
            }
        } else {
            showPopup = true;
        }
        if (showPopup) {
            if(document.getElementById("EmbedSocialPopup") && "object" === typeof embedsocialPopup) {
                embedsocialPopup.show({
                    message: data.widgetSrc,
                    timeout: data.timeoutHide,
                    position: data.position,
                    targetPosition: '.embedsocial-reviews',
                    drag: false,
                    onOpened: function () {
                        EMBEDSOCIALREVIEWSFEED.initPopupIframe();
                    },
                });
            } else {
                setTimeout(function() {EMBEDSOCIALREVIEWSFEED.createPopupBox(data)}, 200);
            }
        }
    },
    createLightBox : function(data) {
		var page = 1;	
		if (data.page) {
			page = data.page
		}
		var iframeSrc = "https://embedsocial.com/api/get_lightbox_reviews/" + data.reviewsRef + "/" + data.index + "/" + page;	
		if (data.src) {
			iframeSrc = data.src;
		}
        if (!document.getElementById("embed-lightbox-" + data.reviewsRef)) {
            var divLightbox = document.createElement("a");
            divLightbox.setAttribute("class", "embedsocail-iframe-lightbox-link");
            divLightbox.setAttribute("id", "embed-lightbox-" + data.reviewsRef);
            divLightbox.setAttribute("data-src", iframeSrc);
            document.body.appendChild(divLightbox);
        } else {
            divLightbox = document.getElementById("embed-lightbox-" + data.reviewsRef); 
            divLightbox.setAttribute("data-src", iframeSrc);
            divLightbox.innerHTML = '';         
        }

		var type = 'slider';
		if (data.type) {
			type = data.type;
		}

        [].forEach.call(document.getElementsByClassName("embedsocail-iframe-lightbox-link"), function(el) {
            el.lightbox = new ReviewsIframeLightbox(el, data.reviewsRef, {
                onLoaded: function(iframe) {
                    EMBEDSOCIALREVIEWSFEED.initResizeLightbox(data.reviewsRef, type);

					if (type == 'collect') {
						function lightBoxIframeResize() {
		                    var windowHeight = window.innerHeight || document.documentElement.clientHeight;  
		                    var el = document.getElementById('embed-lightbox-iframe-' + data.reviewsRef);
		                    if (windowHeight > 1800) {
		                        windowHeight = 1800;
		                    }
		                    el.style.height = parseInt(windowHeight * 0.90) + 'px';
		                };
		                lightBoxIframeResize();
		                window.addEventListener('resize', lightBoxIframeResize);
					}
                }
            });
        });

		if (data.type) {
			[].forEach.call(document.getElementsByClassName("embed-lightbox-iframe"), function(el) {
				el.className = "embed-lightbox-iframe embed-lightbox-iframe-" + data.type;
			});

		    [].forEach.call(document.getElementsByClassName("embed-lightbox-backdrop"), function(el) {
				el.className = "embed-lightbox-backdrop embed-lightbox-" + data.type;
			});
		}

        EMBEDSOCIALREVIEWSFEED.openLightBox(data.reviewsRef);
    },
    openLightBox : function(reviewsRef) {
        document.getElementById("embed-lightbox-" + reviewsRef).click();
        document.getElementsByClassName('embed-lightbox-body')[0].addEventListener("click", function(event) {
            var targetElement = event.target || event.srcElement;
            if (targetElement.classList.contains('embed-lightbox-is-loaded')) {
                EMBEDSOCIALREVIEWSFEED.closeLightBox(reviewsRef);
            }
        });
		document.addEventListener("keydown", function(e) {
            var e = window.event ? window.event : el;
            if (document.getElementById("embed-lightbox-iframe-" + reviewsRef)) {
				var keys = [37, 39, 27];
                if (keys.indexOf(e.keyCode) > -1) {
                    EMBEDSOCIALREVIEWSFEED.navigationLightBox(reviewsRef, e.keyCode);
                }
            }
        });
    },
    closeLightBox : function(reviewsRef) {
        document.getElementsByClassName("embed-lightbox-backdrop")[0].click();
		[].forEach.call(document.getElementsByClassName("embed-lightbox-body"), function(el) {
            el.className = "embed-lightbox-body";
        });
    },
    navigationLightBox : function(reviewsRef, code) {
        var iframe = document.getElementById("embed-lightbox-iframe-" + reviewsRef);
        iframe.iFrameResizer.sendMessage({"navigationCode" : code});
    }
}

var embedsocialAlbumsReviews = document.getElementsByClassName("embedsocial-reviews");
for (i = 0; i < embedsocialAlbumsReviews.length; i++) {
    var embedsocialAlbumReviewsRef = embedsocialAlbumsReviews[i].getAttribute("data-ref");
    EMBEDSOCIALREVIEWSFEED.getEmbedData(embedsocialAlbumReviewsRef , embedsocialAlbumsReviews[i]);
}
window.addEventListener('load', function() {
var embedsocialAlbumsReviews = document.getElementsByClassName("embedsocial-reviews");
for (i = 0; i < embedsocialAlbumsReviews.length; i++) {
    var embedsocialAlbumReviewsRef = embedsocialAlbumsReviews[i].getAttribute("data-ref");
    EMBEDSOCIALREVIEWSFEED.getEmbedData(embedsocialAlbumReviewsRef , embedsocialAlbumsReviews[i]);
}
});
