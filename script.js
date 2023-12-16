function deathscreen(){
    document.getElementById("content").className = "death_screen"
    document.getElementById("content").innerHTML = "<link rel='stylesheet' href='style.css'><smilet class=death_screen >:(</smilet> <br><br><p class=death_screen>Your PC ran into a problem. Plase wait a few seconds...<br>If this page is frozen, please call this number : 01 48 42 48</p><audio autoplay preload><source src=windows_10.mp3 type=audio/mp3 /></audio>";
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
  document.getElementById("body").className = "death_screen"

}