const getCookie = (cname) => {
  var name = cname + "=";
  var allCookies = document.cookie.split(";");
  for (var i = 0; i < allCookies.length; i++) {
    var c = allCookies[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const langCookie = "besna_lang";

let newLanguage = "";
const currentLanguage = getCookie(langCookie);
console.log("current:");
console.log(currentLanguage);
const expireDays = 30;
var d = new Date();
d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
var expires = "expires=" + d.toUTCString();
if (currentLanguage === "en") {
  document.cookie = `${langCookie}=jp;${expires}`;
  newLanguage = "jp";
} else {
  document.cookie = `${langCookie}=en;${expires}`;
  newLanguage = "en";
}
console.log(newLanguage);
if (newLanguage === "en") {
  window.location.replace("https://emu-chimes-xt8c.squarespace.com/eng/");
}
window.location.replace("https://emu-chimes-xt8c.squarespace.com/");
