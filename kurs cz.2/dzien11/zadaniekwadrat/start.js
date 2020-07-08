  // parametry główne. Za pomocą zmiennych stwórz początkową wartość rotate (zero) i wartość o którą będziesz zmieniał stopnie (o 10 stopnii).


  // pobieramy elementy - pobierz przycisk i div


  // podpinamy nasłuchiwanie i umeiszczamy w nim funkcje anonimową. Pamiętaj zmieniamy własciwość transform. Za każdym razie obrót zwiększa się od 10 deg. 


  //Bonus dodaj właściwość transition dla div określoną na .5s.


  const btn = document.querySelector('button');
  const square = document.querySelector('.square');

  let zero = 0
  let run = zero + 10;
  let rot = "rotate(" + zero + "deg)";

  square.style.transform = rot;

  function rotateSquare() {
    run = run + 10;
    rot = "rotate(" + run + "deg)";
    square.style.transform = rot;
  }

  btn.addEventListener('click', rotateSquare)