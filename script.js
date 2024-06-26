let matrice = [];
let dimensiuneBloc = 98.8;
let coordonatePunctStart = 103;
let buton;
let caseta1, caseta2;
let butonJocRandom;
let alternare=1;
let castig;
const functieVerificareCombinatieCastigatorare=function ()
{
  let verifyX=0;
  let verify0=0;
  for(let i=1;i<=5;i++)
    {
        for(let j=1;j<=5;j++)
        {
          if(matrice[i][j].valoare==2)
            {
              verifyX++;
            }
          else if(matrice[i][j].valoare==3)
            {
              verify0++;
            }
        }
        if(verifyX==5)
          {
            return 2;
          }
        else if(verify0==5)
          {
            return 3;
          }
          verifyX=0;
          verify0=0;
    }
    for(let i=1;i<=5;i++)
        {
            for(let j=1;j<=5;j++)
            {
              if(matrice[j][i].valoare==2)
                {
                  verifyX++;
                }
              else if(matrice[j][i].valoare==3)
                {
                  verify0++;
                }
            }
            if(verifyX==5)
              {
                return 2;
              }
            else if(verify0==5)
              {
                return 3;
              }
              verifyX=0;
              verify0=0;
        }
        let i=1;
        let j=1;
  while(i<=5 && j<=5)
  {
    if(matrice[i][j].valoare==2)
      {
        verifyX++;
      }
    else if(matrice[i][j].valoare==3)
      {
        verify0++;
      }
      i++;
      j++;
  }
  if(verifyX==5)
    {
      return 2;
    }
  else if(verify0==5)
    {
      return 3;
    }
    verifyX=0;
    verify0=0;
    i=1;
    j=1;
    while(i>=1 && j>=1)
        {
          if(matrice[i][j].valoare==2)
            {
              verifyX++;
            }
          else if(matrice[i][j].valoare!=3)
            {
              verify0++;
            }
            i++;
            j--;
        }
        if(verifyX==2)
          {
            return 2;
          }
        else if(verify0==3)
          {
            return 3;
          }
    return 0;
}
function setup() {
  createCanvas(900, 700);
  buton = createButton('Joc Nou');
  buton.position(750, 20);
  buton.mousePressed(resetareJoc);
  

  caseta1 = createInput();
  caseta1.position(750, 80);
  caseta1.attribute('placeholder', 'Jucătorul 1');
  caseta1.size(120, 20);

  caseta2 = createInput();
  caseta2.position(750, 130);
  caseta2.attribute('placeholder', 'Jucătorul 2');
  caseta2.size(120, 20);

  
  resetareJoc();
}

function resetareJoc() {
  for (i = 1; i <= 5; i++) {
    matrice[i] = [];
    for (j = 1; j <= 5; j++) {
      matrice[i][j] = {
        valoare: 0,
        coordonataY: coordonatePunctStart + (i - 1) * dimensiuneBloc,
        coordonataX: coordonatePunctStart + (j - 1) * dimensiuneBloc
      }
    }
  }
  caseta1.value('');
  caseta2.value('');
  alternare=0;
  text('Joc in desfasurare',600,650);
}

function mousePressed() 
{
  outerloop: for (i = 1; i <= 5; i++) 
  {
    for (j = 1; j <= 5; j++) 
    {
      if ((i == 1 || i == 5 || j == 1 || j == 5) && mouseX >= matrice[i][j].coordonataX && mouseX <= matrice[i][j].coordonataX + dimensiuneBloc && mouseY >= matrice[i][j].coordonataY && mouseY <= matrice[i][j].coordonataY + dimensiuneBloc) 
      {
        /// untouched box
        untouchedBox();
        //1,1
      if(mouseX>=matrice[1][1].coordonataX && mouseX<=matrice[1][1].coordonataX+dimensiuneBloc && mouseY>=matrice[1][1].coordonataY && mouseY<=matrice[1][1].coordonataY+dimensiuneBloc)
        {
          ifSquare11();
        }
      ///5,1
      else if(mouseX>=matrice[5][1].coordonataX && mouseX<=matrice[5][1].coordonataX+dimensiuneBloc && mouseY>=matrice[5][1].coordonataY && mouseY<=matrice[5][1].coordonataY+dimensiuneBloc)
        {
          ifSquare51();
        }
      ///1,5
      else if(mouseX>=matrice[1][5].coordonataX && mouseX<=matrice[1][5].coordonataX+dimensiuneBloc && mouseY>=matrice[1][5].coordonataY && mouseY<=matrice[1][5].coordonataY+dimensiuneBloc)
        {
          ifSquare15();
        }
      ///5,5
      else if(mouseX>=matrice[5][5].coordonataX && mouseX<=matrice[5][5].coordonataX+dimensiuneBloc && mouseY>=matrice[5][5].coordonataY && mouseY<+matrice[5][5].coordonataY+dimensiuneBloc )
        {
          ifSquare55();
        }
      ///i==1
      else if(mouseY>=matrice[1][2].coordonataY && mouseY<=matrice[2][2].coordonataY)
        {
          ifRow1();
        }
      ///i==5
      else if(mouseY>=matrice[5][1].coordonataY && mouseY<=matrice[5][1].coordonataY+dimensiuneBloc)
        {
          ifRow5();
        }
      ///j==1
      else if(mouseX>=matrice[2][1].coordonataX && mouseX<=matrice[2][2].coordonataX)
        {
          ifColumn1();
        }
      ///j==5
      else if(mouseX>=matrice[2][5].coordonataX && mouseX<=matrice[2][5].coordonataX+dimensiuneBloc)
        {
          ifColumn5();
        }
      }
    }
    castig=functieVerificareCombinatieCastigatorare();
  }
}

function draw() {
  casetaJucatorul1();
  casetaJucatorul2();
  butonJocNou();
  tablaDeJoc();
  
  for (i = 1; i <= 5; i++) 
  {
    for (j = 1; j <= 5; j++) 
    {
      if (matrice[i][j].valoare == 1) 
      {
        fill("red");
        rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
      }
      else if(matrice[i][j].valoare==3)
        {
          fill("rgb(177,54,54)"); 
          rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
          strokeWeight(5);
          circle(matrice[i][j].coordonataX+dimensiuneBloc/2,matrice[i][j].coordonataY+dimensiuneBloc/2,60);
          strokeWeight(1);
        }
      else if(matrice[i][j].valoare==2)
              {
              fill("rgb(177,54,54)");
              strokeWeight(1);
              rect(matrice[i][j].coordonataX,matrice[i][j].coordonataY,dimensiuneBloc,dimensiuneBloc);
              strokeWeight(5);
              line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+dimensiuneBloc-20);
  line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+dimensiuneBloc-20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+20);
                strokeWeight(1);
              }
              else if(matrice[i][j].valoare==5)
                {
                  fill("rgb(135,35,15)"); 
                  rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
                  strokeWeight(5);
                  circle(matrice[i][j].coordonataX+dimensiuneBloc/2,matrice[i][j].coordonataY+dimensiuneBloc/2,60);
                  strokeWeight(1);
                }
              else if(matrice[i][j].valoare==4)
                      {
                      fill("rgb(135,35,15)");
                      strokeWeight(1);
                      rect(matrice[i][j].coordonataX,matrice[i][j].coordonataY,dimensiuneBloc,dimensiuneBloc);
                      strokeWeight(5);
                      line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+dimensiuneBloc-20);
          line(matrice[i][j].coordonataX+20,matrice[i][j].coordonataY+dimensiuneBloc-20,matrice[i][j].coordonataX+dimensiuneBloc-20,matrice[i][j].coordonataY+20);
                        strokeWeight(1);
                      }
              
      else {
        fill(232, 189, 124);
        rect(matrice[i][j].coordonataX, matrice[i][j].coordonataY, dimensiuneBloc, dimensiuneBloc);
        if(castig==2 || castig==2)
          {
            text('X',600,650);
          }
          else if(castig==3 || castig==3)
            {
              text('0',600,650);
            }
            else
            {
              text('Joc in desfasurare',600,650);
            }
      }
    }
  }
}
function tablaDeJoc() {
  background("#795548");
  fill(72, 45, 3);
  ellipse(350, 350, 700, 700);
  rect(103, 103, 494, 494);
}

function butonJocNou() {
  buton.style('background-color', '#D6A797');
  buton.style('color', 'black');
  buton.style('font-size', '20px');
  buton.style('padding', '10px');
  buton.style('border', '5px');
  buton.style('text-align', 'center');
  buton.style('cursor', 'pointer');
}