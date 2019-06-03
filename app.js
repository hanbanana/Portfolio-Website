function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  $("img").on("click", function () {
    document.getElementById("mySidenav").style.width = "0";
});



// $("#headImg").on("click", function () {
//     document.getElementById("mySidenav").style.width = "0";
// });