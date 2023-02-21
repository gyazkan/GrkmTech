$(document).ready(function(){
    $(".language-area").on("click", function(){
      if($(this).attr("data-click-state") === "0" ){
          $(this).attr("data-click-state" , "1")
          $(".language-area-body").addClass("d-block")
      }
      else {
        $(this).attr("data-click-state" , "0") 
        $(".language-area-body").removeClass("d-block")
      }
    })
})




  // $(document).ready(function(){
  //   $(".carousel").carousel({
  //     interval: false,
  //     pause: true
  //   });
    
  //   $( ".carousel .carousel-inner" ).swipe( {
  //     swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
  //       this.parent( ).carousel( 'next' );
  //     },
  //     swipeRight: function ( ) {
  //       this.parent( ).carousel( 'prev' );
  //     },
  //     threshold: 0,
  //     tap: function(event, target) {
  //       window.location = $(this).find('.carousel-item.active a').attr('href');
  //     },
  //     excludedElements:"label, button, input, select, textarea, .noSwipe"
  //   } );
    
  //   $('.carousel .carousel-inner').on('dragstart', 'a', function () {
  //     return false;
  //   });  
    
  // });





  var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("language-area-all-boody");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


  


// $(document).mouseup(function(e) 
// {
//     var container = $(".select-selected");

//     if (!container.is(e.target) && container.has(e.target).length === 0) 
//     {
//         $(".select-selected").removeClass("select-arrow-active")
//         $(".select-items").addClass("select-hide")
//     }
// });