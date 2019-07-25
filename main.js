//Android VS Apple

// Event listeners
document.getElementById('android-btn').addEventListener('click', androidStyle)
document.getElementById('apple-btn').addEventListener('click', appleStyle)

//Event functions
function androidStyle() {
  document.getElementById('img').src = "images/Android-Logo.jpg";
  document.getElementById('siteLink').innerHTML = "Android Home";
  document.getElementById('siteLink').style.backgroundColor = "#a4c93b";
  document.getElementById('siteLink').href = "https://www.android.com/";
  document.getElementById('main').style.backgroundColor= "#a4c93b"
}

function appleStyle() {
  document.getElementById('img').src = "images/Apple-Logo.jpg";
  document.getElementById('siteLink').innerHTML = "Apple Home";
  document.getElementById('siteLink').style.backgroundColor = "#b6bcca";
  document.getElementById('siteLink').href = "https://www.apple.com/";
  document.getElementById('main').style.backgroundColor= "#b6bcca";
}