var i;
coins_count = 4
coin_speed = 0.6;


for (i = 0; i < coins_count; i++) {
  var div = document.createElement("div");
  div.style.width = "64px";
  div.style.height = "64px";
  //div.style.background = "#F8F8F8";
  div.style.color = "#777";
  div.style.float = "left";
  div.style.margin = "0px";
  div.style.padding = "16px";
  div.innerHTML = "coin  "+i;
  div.id = "icon" + i;
  document.getElementById("main").appendChild(div);
  div.style.opacity = "0";
}


function create_coin(div_cont, my_delay = 1000){
  var animation_registration = lottie.loadAnimation({
    container: div_cont,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "icon0.json",
    rendererSettings: {
      scaleMode: 'noScale',
      clearCanvas: true,
      progressiveLoad: true,
      hideOnTransparent: true, }
  })
  animation_registration.setSpeed(coin_speed);
  function my_play() {
    animation_registration.play();
  }
  setTimeout(my_play,my_delay);
}

//create_coin(icon0)
//drop_coin(icon2,5000)

function drop_coin (target,drop_delay){
  function d(){
    target.setAttribute("class","animation-target");
  }
  setTimeout(d,drop_delay)
}

function create_and_drop(my_target, my_drop_delay, my_spin_delay){
  create_coin(my_target, my_spin_delay);
  drop_coin(my_target, my_drop_delay);

}
create_and_drop(icon0, 500, 500)
create_and_drop(icon1, 700, 1000)
create_and_drop(icon2, 900, 1500)
create_and_drop(icon3, 1100, 2000)
