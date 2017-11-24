$("form").submit(function (event) {
  // Stop the browser from submitting the form.
  event.preventDefault();
  var cred = {};
  cred.name = $("#username").val();
  cred.pass = $("#password").val();
  $.ajax({
    url: "http://192.168.33.10/task_tracker_d8/web/user/login?_format=json",
    type: "POST",
    data: JSON.stringify(cred),
    returnType: "json",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/hal+json"
    },
    success: function (result) {
      var user = result.current_user;
      var csrf_token = result.csrf_token;
      var logout_token = result.logout_token;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("username", user.name);
      localStorage.setItem("csrf_token", csrf_token);
      localStorage.setItem("logout_token", logout_token);
      window.location = "index.html";
    }
  });
});
