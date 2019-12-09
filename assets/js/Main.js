var CaliMain = {

  Init: false,

  IsMobile: false,

  /*
   * Initialise main
   */
  Initialise: function() {

    // Fade in elements
    setTimeout(function() {
      $(".about_btn_cont").addClass("about_btn_fade_in");
      $(".cali_header_img").addClass("blur_header");
    }, 500);

    if (!CaliMain.Init) {

      // Determine if this is mobile
      CaliMain.IsMobile = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/);

      // Fix mobile height issues 
      CaliMain.MobileHeightFix();

      // Load the video content
      CaliMain.LoadVideoContent();

      // Get the body
      var $body = $("body");

      // Scroll functionality
      $body.on("click", "[data-scroll]", function() {
        var $scrollTo = $("#" + $(this).attr("data-scroll"));

        if (CaliMain.IsMobile) {
          // Mobile solution
          $(".cali_header_img").after($scrollTo);
        } else {
          // Scroll to
          var topValue = $scrollTo.offset().top + $("body").scrollTop();
          $("html, body").animate({
            scrollTop: topValue
          }, 2000);
        }
      });

      // Back to top btn
      $body.on("click", ".back_to_top", function() {
        $([document.documentElement, document.body]).animate({
          scrollTop: 0
        }, 2000);
      });

      // Page wheel
      $body.on("wheel", ".gallery_images_cont, #videosection", function(event) {
        scrollAmt = event.originalEvent.deltaY;
        this.scrollTop += (scrollAmt * 2);
      });

      // Video img click
      $body.on("click", "[data-parts]", function(event) {
        var partsText = $(this).attr("data-parts");
        var parts = partsText.split("|,|");

        if (parts && parts.length > 0) {

          if (parts.length === 1) {
            window.open(parts[0]);
          } else {

            // Create a drop down menu
            var dropDownItems = [];
            var iterator = 1;

            // For each party create a drop down item
            $(parts).each(function() {
              var partItem = this;
              dropDownItems.push(
                "<a href='" + partItem + "' target='_blank'>Part " +
                (iterator++) +
                "</a>"
              );
            });

            var dropDownMenu = "<div class='dropdown_menu'>";
            for (i = 0; i < dropDownItems.length; i++) {
              dropDownMenu += dropDownItems[i];
            }
            dropDownMenu += "</div>";

            var $dropDownMenu = $(dropDownMenu);
            $dropDownMenu.css("top", event.clientY + "px");
            $dropDownMenu.css("left", event.clientX + "px");
            $body.append($dropDownMenu);

            $body.off(".videoDropHandler").on("click.videoDropHandler", function() {
              $(".dropdown_menu").remove();
              $body.off(".videoDropHandler");
            });
          }
        }
      });

      CaliMain.Init = true;
    }

  },

  /*
   * Fix mobile height issues
   */
  MobileHeightFix: function() {

    if (CaliMain.IsMobile) {
      var innerHeight = window.innerHeight;
      var $contentSections = $(".content_section:not(.no_content_props)");
      $contentSections.css("height", innerHeight + "px");
      $contentSections.css("max-height", innerHeight + "px");

      $(window).resize(function() {
        var innerHeight = window.innerHeight;
        $contentSections.css("height", innerHeight + "px");
        $contentSections.css("max-height", innerHeight + "px");
      });
    }
  },

  /*
   * Load video content
   */
  LoadVideoContent: function() {

    var videos = [
      {
        title: "Jungle Special 05/12/2019",
        image: "https://i.imgur.com/ALlUADO.png",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/1003125213369606/",
          "https://www.facebook.com/djcali.musicpage/videos/2489038027860106/"
        ]
      },
      {
        title: "DJ Cali Show 28/11/2019",
        image: "https://i.imgur.com/1urjdcD.jpg",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/2094659430637154/",
          "https://www.facebook.com/djcali.musicpage/videos/2618366498220893/"
        ]
      },
      {
        title: "DJ Cali Show 21/11/2019",
        image: "https://i.imgur.com/VjUkVsO.png",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/774856676320989/",
          "https://www.facebook.com/djcali.musicpage/videos/528446237738416/"
        ]
      },
      {
        title: "DJ Cali's Jump Up Pyjama Party 15/11/2019",
        image: "https://i.imgur.com/VjUkVsO.png",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/565993894175083/",
          "https://www.facebook.com/djcali.musicpage/videos/985188541828575/"
        ]
      },
      {
        title: "DJ Cali Show 14/11/2019",
        image: "https://i.imgur.com/M6r9WJ1.jpg",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/505975283331985/",
          "https://www.facebook.com/djcali.musicpage/videos/556501661802914/"
        ]
      },
      {
        title: "DJ Cali Show 7/11/2019",
        image: "https://i.imgur.com/Us6jpOg.jpg",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/574705159992354/"
        ]
      },
      {
        title: "Halloween Special ft. DJ Kara 31/10/2019",
        image: "https://i.imgur.com/Ozi8qK4.png",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/913810758990981/",
          "https://www.facebook.com/djcali.musicpage/videos/2694482050612967/",
          "https://www.facebook.com/djcali.musicpage/videos/924623254587050/",
        ]
      },
      {
        title: "DJ Cali Show 24/10/2019",
        image: "https://i.imgur.com/M4TViVk.jpg",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/1403762899781410/",
          "https://www.facebook.com/djcali.musicpage/videos/549795665772562/",
          "https://www.facebook.com/djcali.musicpage/videos/803632423403335/",
        ]
      },
      {
        title: "DJ Cali's 21st Birthday 17/10/2019",
        image: "https://i.imgur.com/3VyAxGT.jpg",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/456571408399914/",
          "https://www.facebook.com/djcali.musicpage/videos/397251997620584/",
          "https://www.facebook.com/djcali.musicpage/videos/833689193713773/",
          "https://www.facebook.com/djcali.musicpage/videos/2246237168815615/",
        ]
      },
      {
        title: "The Full Moon Pyjama Party 13/10/2019",
        image: "https://i.imgur.com/PsoOuLM.png",
        parts: [
          "https://www.facebook.com/djcali.musicpage/videos/2408624232719911/"
        ]
      },
    ];

    var $videosCont = $(".videos_cont");

    $(videos).each(function() {
      var videoItem = this;

      var partsText;

      if (videoItem.parts.length > 1) {
        partsText = "";
        for (var i = 0; i < videoItem.parts.length; i++) {
          partsText += videoItem.parts[i] + "|,|";
        }
        partsText = partsText.substring(0, partsText.length - 3);
      } else {
        partsText = videoItem.parts[0];
      }

      var $video = $("<div class='video_item'>" +
        "<img src='" + videoItem.image + "' alt='Missing...' data-parts='" + partsText + "'/>" +
        "<div class='video_details'>" +
        "<div class='video_title'>" +
        videoItem.title +
        "</div>" +
        "</div>" +
        "</div>"
      );

      $videosCont.append($video);
    });
  }

}