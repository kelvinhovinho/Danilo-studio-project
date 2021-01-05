$(document).ready(function(event){
    $('.btn').click(function(){
        var name =$('#mce-FNAME').val();
        if(name==""){
            alert("please provide a name");
        }else{
            alert(`${name} we have received your message. Thank you for reaching out to us.`);
        }   
    }); 
    $('.portfolio').hover(function(){
        $('.one').toggle();
    });
    document.getElementById("image1").addEventListener("click", function() {
        document.querySelector("#image1").style.display = "none";
        document.querySelector("#design").style.display = "block";
      });
      document.querySelector("#design").addEventListener("click", function() {
        document.querySelector("#design").style.display = "none";
        document.querySelector("#image1").style.display = "block";
      });
    document.getElementById("image2").addEventListener("click", function() {
        document.querySelector("#image2").style.display = "none";
        document.querySelector("#development").style.display = "block";
      });
    document.querySelector("#development").addEventListener("click", function() {
        document.querySelector("#development").style.display = "none";
        document.querySelector("#image2").style.display = "block";
      });
    document.getElementById('image3').addEventListener('click',function(){
        document.querySelector('#image3').style.display='none';
        document.querySelector('#product').style.display='block';
    });
    document.querySelector("#product").addEventListener("click", function() {
        document.querySelector("#product").style.display = "none";
        document.querySelector("#image3").style.display = "block";
      });
});