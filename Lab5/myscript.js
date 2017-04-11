$(document).ready(function(){

  var year;
  var form = $("#info");
  var fname = $("#firstname");
  var errorfname =$("#errorfname");
  var lname = $("#lastname");
  var errorlname = $("#errorlname");
  var bday = $("#birthday");
  var errorbday = $("#errorbday");
  var gender = $("#gender:checked");
  var errorgender = $("#errorgender");
  var pvince = $("#province");
  var errorprovince = $("#errorprovince");
  var currentyear = 2560;
  var motto = $("#showmotto");
  var age;
  var newpvice = $("#newprovince");
  var errornwprovince = $("#errornewp");


  fname.blur(validateFName);
  lname.blur(validateLName);
  bday.blur(validateBDay);
  gender.blur(validateGender);
  pvince.blur(validateProvince);
  newpvice.blur(validateProvince);

  $("#submit").click(function(){

    var signName = pvince.val();
    var jsonpvince = {"province":signName}

    $.ajax({
      type:"POST",
      url:"phpscript.php",
      data:jsonpvince,
      success:function(result){
       //alert(result);
       $("#showmotto2").text(result);


      }
    })


    if(validateFName() & validateLName() & validateBDay() & validateProvince() ){
      $("#infofield").hide();
      var age = currentyear-year;
      var signName = pvince.val();
      $("#mottofield").css("font-size", "25px");
      $("#mottofield").css("text-align", "center");

      $("#sign").attr("src","motto_img/"+signName+".png");

      if(age<13){
         $("#bodyinfo").css({'background-image': 'url('+"bg_cartoon.png"+')'});
         $("#mottofield").css("background-color", "#F8DB21");
         $("#mottofield").css("font-family", "childFont");


      }
      else{
        var gender = $('input[name="gender"]:checked').val();
        var male ="ชาย";
        if(male.localeCompare(gender)==0){
          $("#bodyinfo").css({'background-image': 'url('+"male.png"+')'});
          $("#mottofield").css("background-color", "#5F563D");
          $("#mottofield").css("color", "white");

        }
        else{
          $("#bodyinfo").css({'background-image': 'url('+"bg_female.png"+')'});
          $("#mottofield").css("background-color", "#CC475E");

        }
      }


      //loadDoc();

      $("#mottofield").show();
      $("#searchOther").show();
    }
  });


  $("#search").click(function(){
    $("#mottofield").hide();
    $("#sign").hide();
    var signName = newpvice.val();
    var jsonpvince = {"province":signName}

    $.ajax({
      type:"POST",
      url:"phpscript.php",
      data:jsonpvince,
      success:function(result){
       $("#showmotto2").text(result);


      }
    })


    $("#sign").attr("src","motto_img/"+signName+".png");

    if( validateProvinceSearch() ){

      $("#sign").show();
      $("#mottofield").show();
      $("#searchOther").show();
    }
});




  function validateFName(){
    if(fname.val().length<2){
      fname.addClass("error");
      errorfname.addClass("error");
      errorfname.text("ชื่อต้องประกอบด้วยตัวอักษรอย่างน้อย 2 ตัวอักษร");
      return false;
    } else{
      fname.removeClass("error");
      errorfname.removeClass("error");
      errorfname.text("");
      return true;
    }
  }

  function validateLName(){
    if(lname.val().length<2){
      lname.addClass("error");
      errorlname.text("นามสกุลต้องประกอบด้วยตัวอักษรอย่างน้อย 2 ตัวอักษร");
      errorlname.addClass("error");
      return false;
    } else{
      lname.removeClass("error");
      errorlname.removeClass("error");
      errorlname.text("");
      return true;
    }
  }

  function validateBDay(){
    var bd = bday.val();
    year = bd.substring(6,11);
    var re_bday = /^[0-9]{2}\/[0-1]{1}[0-9]{1}\/[1-2]{1}[0-9]{3}$/;

    if(re_bday.test(bd)){
      bday.removeClass("error");
      errorbday.removeClass("error");
      errorbday.text("ตัวอย่าง : วัน/เดือน/ปีพ.ศ");
      return true;

    }else{
      bday.addClass("error");
      errorbday.text("ใส่วันเกิด ในรูปแบบดังนี้ : วัน/เดือน/ปีพ.ศ");
      errorbday.addClass("error");
      return false;
    }
  }

  function validateGender(){
    if(gender.length==0){
      gender.addClass("error");
      errorgender.text("โปรดเลือกเพศของคุณ");
      errorgender.addClass("error");
      return false;
    } else{
      gender.removeClass("error");
      errorgender.removeClass("error");
      errorgender.text("");
      changeStyle()
      return true;
    }
  }


  function validateProvince(){
    var test_province1 = /^(เชียงราย|เชียงใหม่|น่าน|พะเยา|แพร่|แม่ฮ่องสอน|ลำปาง|ลำพูน|อุตรดิตถ์|กาฬสินธุ์|ขอนแก่น|ชัยภูมิ|นครพนม|นครราชสีมา|บึงกาฬ|บุรีรัมย์|มหาสารคาม|มุกดาหาร|ยโสธร|ร้อยเอ็ด|เลย|สกลนคร|สุรินทร์|ศรีสะเกษ|หนองคาย|หนองบัวลำภู|อุดรธานี|อุบลราชธานี|อำนาจเจริญ|กำแพงเพชร|ชัยนาท|นครนายก|นครปฐม|นครสวรรค์|นนทบุรี|ปทุมธานี|พระนครศรีอยุธยา|พิจิตร|พิษณุโลก|เพชรบูรณ์|ลพบุรี|สมุทรปราการ|สมุทรสงคราม|สมุทรสาคร)$/;
    var test_province2 = /^(|สิงห์บุรี|สุโขทัย|สุพรรณบุรี|สระบุรี|อ่างทอง|อุทัยธานี|จันทบุรี|ฉะเชิงเทรา|ชลบุรี|ตราด|ปราจีนบุรี|ระยอง|สระแก้ว|กาญจนบุรี|ตาก|ประจวบคีรีขันธ์|เพชรบุรี|ราชบุรี|กระบี่|ชุมพร|ตรัง|นครศรีธรรมราช|นราธิวาส|ปัตตานี|พังงา|พัทลุง|ภูเก็ต|ระนอง|สตูล|สงขลา|สุราษฎร์ธานี|ยะลา|กรุงเทพมหานคร)$/;
    document.cookie = pvince.val()+".txt";
    if(pvince.val().match(test_province1) || pvince.val().match(test_province2)){
      pvince.removeClass("error");
      errorprovince.removeClass("error");
      errorprovince.text("");
      return true;
    } else{
      pvince.addClass("error");
      errorprovince.text("โปรดใส่ชื่อจังหวัดที่ถูกต้อง");
      errorprovince.addClass("error");
      return false;
    }
  }


  function validateProvinceSearch(){
    var test_province1 = /^(เชียงราย|เชียงใหม่|น่าน|พะเยา|แพร่|แม่ฮ่องสอน|ลำปาง|ลำพูน|อุตรดิตถ์|กาฬสินธุ์|ขอนแก่น|ชัยภูมิ|นครพนม|นครราชสีมา|บึงกาฬ|บุรีรัมย์|มหาสารคาม|มุกดาหาร|ยโสธร|ร้อยเอ็ด|เลย|สกลนคร|สุรินทร์|ศรีสะเกษ|หนองคาย|หนองบัวลำภู|อุดรธานี|อุบลราชธานี|อำนาจเจริญ|กำแพงเพชร|ชัยนาท|นครนายก|นครปฐม|นครสวรรค์|นนทบุรี|ปทุมธานี|พระนครศรีอยุธยา|พิจิตร|พิษณุโลก|เพชรบูรณ์|ลพบุรี|สมุทรปราการ|สมุทรสงคราม|สมุทรสาคร)$/;
    var test_province2 = /^(|สิงห์บุรี|สุโขทัย|สุพรรณบุรี|สระบุรี|อ่างทอง|อุทัยธานี|จันทบุรี|ฉะเชิงเทรา|ชลบุรี|ตราด|ปราจีนบุรี|ระยอง|สระแก้ว|กาญจนบุรี|ตาก|ประจวบคีรีขันธ์|เพชรบุรี|ราชบุรี|กระบี่|ชุมพร|ตรัง|นครศรีธรรมราช|นราธิวาส|ปัตตานี|พังงา|พัทลุง|ภูเก็ต|ระนอง|สตูล|สงขลา|สุราษฎร์ธานี|ยะลา|กรุงเทพมหานคร)$/;
    document.cookie = newpvice.val()+".txt";
    if(newpvice.val().match(test_province1) || newpvice.val().match(test_province2)){
      newpvice.removeClass("error");
      errornwprovince.removeClass("error");
      errornwprovince.text("");
      return true;
    } else{
      newpvice.addClass("error");
      errornwprovince.text("โปรดใส่ชื่อจังหวัดที่ถูกต้อง");
      errornwprovince.addClass("error");
      return false;
    }
  }
});
