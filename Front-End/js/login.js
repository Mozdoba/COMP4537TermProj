/* eslint-disable no-unused-vars */
const isProduction = () => {
  return !document.URL.includes("localhost");
};

const DELETE = "DELETE";
const endPointRoot = isProduction()
  ? "https://michealozdoba.com/4537/termproject/API/V1"
  : "4537/termproject/API/V1";
const GET = "GET";
const HTTP_STATUS_CODE_CONFLICT = 409;
const HTTP_STATUS_CODE_OK = 200;
const POST = "POST";
const PUT = "PUT";
const xhttp = new XMLHttpRequest();

const login = () => {
  const password = document.getElementById("inputPassword").value;
  const username = document.getElementById("inputUsername").value;
  authenticate(username, password);
};

const authenticate = (username, password) => {
  xhttp.open(POST, `${endPointRoot}/login`, true);
  xhttp.setRequestHeader("Content-Type", "application/json");

  const payload = {
    username: username,
    password: password,
  };

  xhttp.send(JSON.stringify(payload));

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == HTTP_STATUS_CODE_OK) {
      const response = JSON.parse(this.response);
      localStorage.setItem("user-id", response[0].ID);
      localStorage.setItem("token", response[0].Token);
      window.location.href = "/home";
    }

    // TODO: handle user doesn't exist
    if (this.readyState == 4 && this.status == HTTP_STATUS_CODE_CONFLICT) {
      const response = JSON.parse(this.response);
      renderResponse(response.message, false);
    }

    if (this.readyState == 4 && this.status == 500) {
      const response = JSON.parse(this.response);
      renderResponse("Server error", false);
    }
  };
};

const renderResponse = (message, isSuccess) => {
  const responseMessage = document.getElementById("response-message");
  responseMessage.innerHTML = message;

  if (isSuccess) {
    responseMessage.classList.add("response-success");
    responseMessage.classList.remove("hide");

    setTimeout(() => {
      responseMessage.classList.add("hide");
      responseMessage.classList.remove("response-success");
    }, 3500);
    return;
  }

  responseMessage.classList.add("response-error");
  responseMessage.classList.remove("hide");

  setTimeout(() => {
    responseMessage.classList.add("hide");
    responseMessage.classList.remove("response-error");
  }, 3500);
};
