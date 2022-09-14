function teksty(name)
{
    var raper1 = ["50 Cent, właściwie Curtis James Jackson III (ur. 6 lipca 1975 w Nowym Jorku) – amerykański raper, aktor i przedsiębiorca. Właściciel firmy produkującej słuchawki SMS Audio. Międzynarodową rozpoznawalność zyskał po wydaniu debiutanckiego albumu Get Rich or Die Tryin’ (2003 r.) oraz drugiej płyty The Massacre dwa lata później. Jako początkujący aktor zadebiutował w 2005 roku w swoim filmie autobiograficznym pt. Get Rich or Die Tryin’. Produkcja w reżyserii Jima Sheridana zdobyła wiele pozytywnych recenzji, dzięki czemu Curtis zaczął otrzymywać propozycje ze świata filmu. Po kolejnych filmach z udziałem rapera, jego popularność w mediach znacząco wzrosła."];

    var raper2 = ["Marshall Bruce „Eminem” Mathers III (ur. 17 października 1972 w St. Joseph), lepiej znany pod pseudonimem Eminem oraz jego alter ego Slim Shady – amerykański raper, producent oraz aktor. Członek amerykańskiej grupy hiphopowej D12 oraz część duetu hiphopowego z Detroit – Bad Meets Evil, który tworzy wraz z Royce da 5'9. Piętnastokrotny zdobywca Nagrody Grammy oraz laureat Oscara[2]. W 2022 wprowadzony do Rock and Roll Hall of Fame."];

    var raper3 = ["Drake, właśc. Aubrey Drake Graham (ur. 24 października 1986) – kanadyjski raper, piosenkarz i aktor. Rozpoczął karierę aktorską rolą Jimmyego Brooksa w serialu Degrassi: Nowe pokolenie. Przez długi czas był blisko związany z Young Money Entertainment, aż do czerwca 2009, kiedy to podpisał oficjalny kontrakt z wytwórnią. 15 czerwca 2010 ukazał się jego pierwszy album studyjny pt. Thank Me Later, który zadebiutował na szczycie Billboard 200, rozchodząc się w pierwszym tygodniu w 447 tys. kopii na terenie Stanów Zjednoczonych."];
    

    if(name == "raper_1") document.getElementById("tekst-raper1").innerHTML = raper1;
    if(name == "raper_2") document.getElementById("tekst-raper2").innerHTML = raper2;
    if(name == "raper_3") document.getElementById("tekst-raper3").innerHTML = raper3;
}