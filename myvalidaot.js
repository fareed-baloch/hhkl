function myformValidator(event) {
  event.preventDefault();

  var update = document.getElementById("update").checked;
  var complaint = document.getElementById("complaint").checked;
  var advice = document.getElementById("advice").checked;

  var name = document.getElementById("name");

  var email = document.getElementById("email");

  var messageBox = document.getElementById("messageBox");

  var query = "";

  if (update === false && complaint === false && advice === false) {
    alert("Please select type of query");
    return false;
  }

  if (update === true) {
    query = "update";
  }
  if (complaint === true) {
    query = "complaint";
  }
  if (advice === true) {
    query = "complaint";
  }

  // check name if less than two chracters
  if (name.value.length <= 2) {
    alert("name cannot be less than 2 chracters");
    name.focus();
    return false;
  }
  // https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript

  // check if name contains number
  var namematches = !/[^a-zA-Z]/.test(name.value);
  if (namematches === false) {
    alert(" Name can only contain chracters ");
    return false;
  }

  if (messageBox.value.length < 30) {
    alert("A minmum of 30 chracters is required");
    return false;
  }

  alert("you have succesfully submitted your form");
  window.location.href =
    "mailto:info@housesRus.com?subject=" + query + "&body=" + messageBox.value;

  /*name can not be number*/
  /*email format*/
  return true;
}
