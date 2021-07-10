//MOUSE
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

//MOUSE

(function() {
    // Init
    var container = document.getElementById("outer"),
        inner = document.getElementById("inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 3);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 3);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //----------------------------------------------------
  
    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
    //----------------------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //----------------------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //--------------------------------------------------------
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  })();

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function openLinkNav() {
    document.getElementById("linkNav").style.height = "20%";
  }
  
  function closeLinkNav() {
    document.getElementById("linkNav").style.height = "0";
  }

function toggleWebDropdown() {
  document.getElementById("webDropdown").classList.toggle("show");
  document.getElementById("webClose").classList.toggle("down")
}
function toggleLogoDropdown() {
  document.getElementById("logoDropdown").classList.toggle("show");
  document.getElementById("logoClose").classList.toggle("down")
}
function toggleGenDropdown() {
  document.getElementById("genDropdown").classList.toggle("show");
  document.getElementById("genClose").classList.toggle("down")
}

//GSAP

var tl = gsap.timeline({repeat: -1})

tl.to(".bo", {rotate: 2, ease: "power2.in"});
tl.to(".bo", {rotate: 0, ease: "power2.out"});

//GSAP


function onClick(img) {
  document.getElementById("img01").src = img.src;
  document.getElementById("modal01").style.display = "flex";
};

//TRANSITIONS 

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return }

  var anchors = document.getElementsByTagName('a');

  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname) {
      continue;
    }

    anchors[idx].addEventListener('click', function(event) {
      var fader = document.getElementById('fader'),
          anchor = event.currentTarget;

      var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
      };
      fader.addEventListener('animationend', listener);

      event.preventDefault();
      fader.classList.add('fade-in');
    });
  }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

//Transitions

function removeFade() {
  var somethingGreat = document.getElementById("somethingGreat");
  somethingGreat.classList.remove('fadeInOut');
}

function addFade() {
  var somethingGreat = document.getElementById("somethingGreat");
  somethingGreat.classList.add('fadeInOut');
}



function switchPageWeb(){
  var whatidoMain = document.getElementById('whatidoOptions');
  var webDevInfo = document.getElementById('whatidoWebDev');
  var brandInfo = document.getElementById('whatidoBranding');
  whatidoMain.classList.replace('selected-yes','selected-no')
  webDevInfo.classList.replace('selected-no','selected-yes')

}
function switchPageBranding(){
  var whatidoMain = document.getElementById('whatidoOptions');
  var webDevInfo = document.getElementById('whatidoWebDev');
  var brandInfo = document.getElementById('whatidoBranding');
  whatidoMain.classList.replace('selected-yes','selected-no')
  brandInfo.classList.replace('selected-no','selected-yes')

}
function goBack() {
  var whatidoMain = document.getElementById('whatidoOptions');
  var webDevInfo = document.getElementById('whatidoWebDev');
  var brandInfo = document.getElementById('whatidoBranding');
  webDevInfo.classList.replace('selected-yes','selected-no');  
  brandInfo.classList.replace('selected-yes','selected-no');
  whatidoMain.classList.replace('selected-no','selected-yes');
}



function mobile_switchPageWeb(){
  
var whatidoMain_mobile = document.getElementById('whatidoOptionsMobile');
var webDevInfo_mobile = document.getElementById('whatidoWebDevMobile');
var brandInfo_mobile = document.getElementById('whatidoBrandingMobile');
  whatidoMain_mobile.classList.replace('selected-yes','selected-no')
  webDevInfo_mobile.classList.replace('selected-no','selected-yes')

}
function mobile_switchPageBranding(){
  
var whatidoMain_mobile = document.getElementById('whatidoOptionsMobile');
var webDevInfo_mobile = document.getElementById('whatidoWebDevMobile');
var brandInfo_mobile = document.getElementById('whatidoBrandingMobile');
  whatidoMain_mobile.classList.replace('selected-yes','selected-no')
  brandInfo_mobile.classList.replace('selected-no','selected-yes')

}
function mobile_goBack() {
  
var whatidoMain_mobile = document.getElementById('whatidoOptionsMobile');
var webDevInfo_mobile = document.getElementById('whatidoWebDevMobile');
var brandInfo_mobile = document.getElementById('whatidoBrandingMobile');

  webDevInfo_mobile.classList.replace('selected-yes','selected-no');  
  brandInfo_mobile.classList.replace('selected-yes','selected-no');
  whatidoMain_mobile.classList.replace('selected-no','selected-yes');

}

