// toggle nav start
document.querySelector('.close_menu').addEventListener('click',() => {
  toggleNav();
})
document.querySelector('.menu_bar').addEventListener('click',() => {
  toggleNav();
})

function toggleNav(){
  const menuBar = document.getElementById('nav_menu');
  menuBar.classList.toggle('open')
}
// toggle nav end

// sticky top 
document.addEventListener('scroll',() => {
  const header = document.querySelector('.nav_container');
  header.classList.toggle('sticky',window.scrollY > 0)
})
/* ----tiny slider start------------ */
let slider = tns({
    container: '.testi_slider',
    items: 1,
    controlsContainer: "#customize_button",
    mouseDrag: true,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 1
      }
    }
  });

/* ----tiny slider end------------ */

// faq section
const according = document.getElementsByClassName('faq');
for(const item of according){
  item.addEventListener('click',function(){
    item.classList.toggle('active')
  })
}

// wow js
new WOW().init();