function randomMove()
{
    let coordonateleMutarii={
        liniaSelectata:0,
        coloanaSelectata:0,
        x:0,
        y:0,
    }
    // patratul selectat
    // 1 pentru linie
    // 2 pentru coloana
    let linieSauColoana=random([1,2]);
    if(linieSauColoana==1)
    {
        let linia1sau5=random([1,5]);
        if(linia1sau5==1)
        {
            coordonateleMutarii.liniaSelectata=1;
            coordonateleMutarii.coloanaSelectata=random([1,2,3,4,5]);
        }
        else if(linia1sau5==5)
        {
            coordonateleMutarii.liniaSelectata=5;
            coloanaSelectata=random([1,2,3,4,5]);
        }
    }
    else
    {
       let coloana1sau5=random([1,5]);
       if(coloana1sau5==1)
        {
            coordonateleMutarii.liniaSelectata=random([1,2,3,4,5]);
            coordonateleMutarii.coloanaSelectata=1;
        }
        else if(coloana1sau5==5)
        {
            coordonateleMutarii.liniaSelectata=random([1,2,3,4,5]);
            coordonateleMutarii.coloanaSelectata=5;
        }
    }
    // patratul mutat
    if((coordonateleMutarii.liniaSelectata==1 && coordonateleMutarii.coloanaSelectata==1) || (coordonateleMutarii.liniaSelectata==5 && coordonateleMutarii.coloanaSelectata==5))
    {
        let patrat51SauPatrat15=random([1,2]);
        if(patrat51SauPatrat15==1)
        {
            coordonateleMutarii.x=5;
            coordonateleMutarii.y=1;
        }
        else if(patrat51SauPatrat15==2)
        {
            coordonateleMutarii.x=1;
            coordonateleMutarii.y=5;
        }
    }
    else if((liniaSelectata==1 && coloanaSelectata==5) || (liniaSelectata==5 && coloanaSelectata==1))
    {
        let patrat11SauPatrat55=random([1,2]);
        if(patrat11SauPatrat55==1)
        {
            coordonateleMutarii.x=1;
            coordonateleMutarii.y=1;
        }
        else if(patrat11SauPatrat55==2)
        {
            coordonateleMutarii.x=5;
            coordonateleMutarii.y=5;
        }
    }
    return coordonateleMutarii;
}