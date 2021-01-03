$(document).ready(function(event){
    $('.btn').click(function(){
        var name =$('#name').val();
        if(name==""){
            alert("please provide a name");
        }else{
            alert(`${name} we have received your message. Thank you for reaching out to us.`);
        }   
    }); 
    $('.portfolio').hover(function(){
        $('.one').toggle();
    });
});