
var datatext = [];

function submitForm(){
  checkCookie();
  validateForm();
  var data = document.getElementById('personalform');
  var i;
  for(i = 0 ; i < data.length;i++){
    datatext.push(data.elements[i].value);

  }
}

function saveForm(){
  document.getElementsByTagName("INPUT")[0].setAttribute("value", "TEST");
}
function validateForm() {
    var firstname = document.forms["personalform"]["fname"].value;
    var lastname = document.forms["personalform"]["lname"].value;
    var houseno = document.forms["personalform"]["housenumber"].value;
    var street = document.forms["personalform"]["street"].value;
    var city = document.forms["personalform"]["city"].value;
    var province = document.forms["personalform"]["province"].value;
    var zipcode = document.forms["personalform"]["zipcode"].value;
    var phonenumber = document.forms["personalform"]["phonenumber"].value;
    var cellphonenumber = document.forms["personalform"]["cellphonenumber"].value;
    var bday = document.getElementById("Day").selectedIndex;
    var bmonth = document.getElementById("Month").selectedIndex;
    var byear = document.getElementById("Year").selectedIndex;

    var retesthouseno = /^[A-Za-z]+$/;
    var rezipcode =/^[0-9]{5}$/;
    var rephoneno = /^\+662?([0-9]{1})\)?[-]?([0-9]{3})[-]?([0-9]{3})$/
    var recellphoneno = /^\+66?([0-9]{2})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

    if (firstname == "") {
        alert("You have to fill out the firstname");
        return false;
    }

    if (lastname == "") {
        alert("You have to fill out the lastname");
        return false;
    }

    if (retesthouseno.test(houseno)){
        alert("house number must contain numeric number");
        return false;
    }

    if (city == "") {
        alert("You have to fill out the city");
        return false;
    }

    if (province == "") {
        alert("You have to fill out the province");
        return false;
    }

    if (rezipcode.test(zipcode)) {
        alert("zipcode must include 6 number");
        return false;
    }



    if (rephoneno.test(phonenumber)) {
        alert("please fill in the correct format phone number like +662-xxx-xxx");
        return false;
    }

    if (recellphoneno.test(cellphonenumber)) {
        alert("please fill in the correct format cellphone number like +66xx-xxx-xxxx");
        return false;
    }
}

function cancleForm(){
  document.getElementsById('fname').clear();
}

function checkCookie() {
    var user=getCookie("firstname");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        alert("We have collect your name for cookies");
       user = document.forms["personalform"]["fname"].value;
       if (user != "" && user != null) {
           setCookie("firstname", user, 30);
       }
    }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
