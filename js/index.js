//切换选项卡功能
function showdiv(number){
    for(var i=1;i<=5;i++){
        if(i==number){
            var obj=document.getElementById("info"+number);
            obj.style.display="";
        }else{
            var obj=document.getElementById("info"+i);
            obj.style.display="none";
        }
    }
}
