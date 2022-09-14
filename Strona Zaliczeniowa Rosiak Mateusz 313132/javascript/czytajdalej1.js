function czytajwiecej1()
{
    var kropki1 = document.getElementById("kropki1");
    var wiecej1 = document.getElementById("wiecej1");
    var przycisk1 = document.getElementById("przycisk1");

    if(kropki1.style.display ==="none")
    {
        kropki1.style.display = "inline";
        przycisk1.innerHTML= "CzytajWiecej";
        wiecej1.style.display = "none";
    }
    else
    {
        kropki1.style.display="none";
        przycisk1.innerHTML="CzytajMniej";
        wiecej1.style.display="inline";
    }
}
