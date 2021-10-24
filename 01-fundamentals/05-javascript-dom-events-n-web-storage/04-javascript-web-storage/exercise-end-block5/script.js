window.onload = function() {

 var answer = prompt('Please enter the triangle base size (odd number):', 9);

  if (answer !== null && Number(answer) <= 29) {
    var basePyramid = Number(answer);
  } else {
    var basePyramid = 9;
  }

  if(Number(answer)) {
  
  let numberOfLines = (basePyramid + 1) / 2; // 5
  let controlLeft = numberOfLines; // 5
  let controlRight = numberOfLines; // 5

  updateVisit();

  for(let i = 0; i < numberOfLines; i += 1) {
    let lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    let triangleDiv = document.querySelector('.triangle');
    triangleDiv.appendChild(lineDiv);
  }

  let lines = document.querySelectorAll('.line');

  fillTriangle(lines);
  
  // Atualiza a quantidade de visitar no site, utilizando o LocalStorage
  function updateVisit() {
    if (typeof (Storage) != "undefined") {
      if(localStorage.count !== undefined) {
        let count = parseInt(localStorage.count);
        count+=1;
        localStorage.count = count;
        document.getElementById("count").innerHTML = count;
      } else {
        localStorage.count = 1;
        document.getElementById("count").innerHTML = 1;
      }
    } else {
      document.write("Sem suporte para Web Storage");
    }  
  }

  // Passa por todos as linhas (div com class line) e preenche o triangulo
  function fillTriangle(lines) {
    for(let index = 0; index < lines.length; index += 1) {
      fillLine(lines[index]);
      controlRight += 1;
      controlLeft -= 1;
    }
  }

  // Cria uma caixa com base nas diferentes classes
  function createBox(className) {
    let box = document.createElement("div");
    box.className = className;
    return box;
  }

  // Preenche uma linha
  function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }
  }
}