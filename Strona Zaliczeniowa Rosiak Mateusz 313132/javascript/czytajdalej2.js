function czytajwiecej2()
{
    var kropki2 = document.getElementById("kropki2");
    var wiecej2 = document.getElementById("wiecej2");
    var przycisk2 = document.getElementById("przycisk2");

    if(kropki2.style.display ==="none")
    {
        kropki2.style.display = "inline";
        przycisk2.innerHTML= "CzytajWiecej";
        wiecej2.style.display = "none";
    }
    else
    {
        kropki2.style.display="none";
        przycisk2.innerHTML="CzytajMniej";
        wiecej2.style.display="inline";
    }
}
