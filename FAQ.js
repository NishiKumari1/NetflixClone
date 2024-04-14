let flag=0;
function openAns(n){
    let element=document.getElementsByClassName("ans")
    let plusIcon=document.getElementsByClassName("fa-plus")
    let crossIcon=document.getElementsByClassName("fa-xmark")
    if(flag == n)
    {
        element[n-1].style.display="none";
        plusIcon[n-1].style.visibility="visible";
        crossIcon[n-1].style.visibility="hidden";
        flag=0;
        return;   
    }
    for(i=0;i<6;i++)
    {
        if(i == n-1)
        {
            element[n-1].style.display="flex";
            plusIcon[n-1].style.visibility="hidden";
            crossIcon[n-1].style.visibility="visible";
            flag=n;
        }
        else{
            element[i].style.display="none";
            plusIcon[i].style.visibility="visible";
            crossIcon[i].style.visibility="hidden";
        }
    }
   
}