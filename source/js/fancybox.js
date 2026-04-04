$(function () {
  var imgList = $('.recent-post-item img').not('.no-fancybox')
  if (imgList.length === 0) {
    imgList = $('#post-content img').not('.no-fancybox')
  }
  for (var i = 0; i < imgList.length; i++) {
    var $a = $(
      '<a href="' +
        imgList[i].src +
        '" data-fancybox="group" data-caption="' +
        imgList[i].alt +
        '" class="fancybox"></a>'
    )
    var alt = imgList[i].alt
    var $wrap = $(imgList[i]).wrap($a)
    if (alt) {
      $wrap.after('<div class="img-alt">' + alt + '</div>')
    }
  }


Fancybox.bind('[data-fancybox]', {
  Infinite: true,
  Carousel: {
  transition: "slide", 
  },
  Toolbar: {
    display: {
    left: ["infobar"],
    middle: [],
    right: ["share", "slideshow", "fullscreen", "download", "thumbs", "close"],
    },
  },

  Images: {
    Panzoom: {
      maxScale: 4,
    },
  },
});


  var galleryItem = $('.gallery-item')
  var galleryList = []
  galleryItem.each(function (idx, elem) {
    galleryList.push({
      src: $(elem).data('url'),
      opts: {
        caption: $(elem).data('title')
      }
    })
  })
  galleryItem.on('click', function () {
    $.fancybox.open(
      galleryList,
      {
        loop: true,
        transitionEffect: 'slide'
      },
      galleryItem.index(this)
    )
    return false
  })
})
