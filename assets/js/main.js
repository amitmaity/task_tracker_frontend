var uid = localStorage.getItem("uid");
var username = localStorage.getItem("username");
var csrf_token = localStorage.getItem("csrf_token");

$(document).ready(function () {
  var dataSet = [];
  $.ajax({
    url: "http://192.168.33.10/task_tracker_d8/web/get_incomplete_tasks/" + uid,
    type: "GET",
    returnType: "json",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/hal+json"
    },
    success: function (result) {
      result.forEach(function (t) {
        var row = [t.nid, t.title, t.body, t.field_status, t.field_time_spent];
        dataSet.push(row);
      });
      $('#example').DataTable({
        data: dataSet,
        columns: [
          {title: "Id"},
          {title: "Title"},
          {title: "Description"},
          {title: "Status"},
          {title: "Time Spent"}
        ]
      });
    }
  });
});