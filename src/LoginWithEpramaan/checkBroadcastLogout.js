function checkBroadcastLogout() {
  const cookies = document.cookie.split(";").map(c => c.trim());
  const logoutCookie = cookies.find(c => c.startsWith("broadcast_logout="));

  if (logoutCookie && logoutCookie.split("=")[1] === "true") {
    console.log("Broadcast logout detected!");
    // clear session and redirect
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
  }
}

// 🔄 Check every 10 seconds
setInterval(checkBroadcastLogout, 10000);
