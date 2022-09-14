function czytajwiecej()
{
    var kropki = document.getElementById("kropki");
    var wiecej = document.getElementById("wiecej");
    var przycisk = document.getElementById("przycisk");

    if(kropki.style.display ==="none")
    {
        kropki.style.display = "inline";
        przycisk.innerHTML= "CzytajWiecej";
        wiecej.style.display = "none";
    }
    else
    {
        kropki.style.display="none";
        przycisk.innerHTML="CzytajMniej";
        wiecej.style.display="inline";
    }
}
