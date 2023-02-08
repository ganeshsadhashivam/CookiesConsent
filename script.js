const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=Coding; max-age=" + 60 * 60 * 24 * 30;
  //if the above cookie set
  if (document.cookie) {
    //hide cookie box once cookie set
    cookieBox.classList.add("hide");
  } else {
    //if cookie can't be set alert an error
    alert("Cookie can't be set!");
  }

  //hide the cookie box if the cookie is set and not expired
  let checkCookie = document.cookie.indexOf("CookieBy=Coding"); //checking our set cookie
  //if cookie is set hide the cookie box else show it
  checkCookie != -1
    ? cookieBox.classList.add("hide")
    : cookieBox.classList.remove("hide");
};
