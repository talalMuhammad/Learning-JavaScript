localStorage.setItem("FirstName", "Muhammad");
localStorage.setItem("Location", "Pakistan");

console.log(localStorage.getItem("Location"));

localStorage.removeItem("FirstName");

sessionStorage.setItem("Name", "Ahmed");
sessionStorage.setItem("Location", "Karachi");

console.log(sessionStorage.getItem("Location"));

sessionStorage.removeItem("Name");
