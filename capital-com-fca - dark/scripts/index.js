var i;
icons_count = 16
for (i = 0; i < icons_count; i++) {
  var div = document.createElement("div");
  div.style.width = "240px";
  div.style.height = "240px";
  div.style.background = "#121212";
  div.style.color = "#777";
  div.style.float = "left";
  div.style.margin = "12px";
  div.style.padding = "24px";
  div.style.borderRadius = "8px";
  div.innerHTML = "Icon  "+i;
  div.id = "icon" + i;
  document.getElementById("main").appendChild(div);
  var animation_registration = lottie.loadAnimation({
    container: document.getElementById("icon" + i),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "icon" + i + ".json",
    rendererSettings: {
      scaleMode: 'noScale',
      clearCanvas: true,
      progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
      hideOnTransparent: true, }
  });
}


