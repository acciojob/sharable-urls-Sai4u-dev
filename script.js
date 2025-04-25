document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  const baseURL = "https://localhost:8080/";
  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

  document.getElementById("url").textContent = baseURL + queryString;
});
