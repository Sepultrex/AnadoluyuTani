const elementIds = ["resim1", "resim2", "resim3", "resim4", "resim5", "resim6", "resim7", "resim8"];
const btnIds = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"];

function setZIndex(elementId, zIndex) {
  document.getElementById(elementId).style.zIndex = zIndex;
}

function disarda() {
  for (let i = 0; i < elementIds.length; i++) {
    setZIndex(elementIds[i], "-2");
  }

  for (let i = 0; i < btnIds.length; i++) {
    setZIndex(btnIds[i], "1");
  }

  for (let i = 0; i <= 27; i++) {
    document.getElementById("column" + i).style.zIndex = "-3";
  }
}

function setZIndexForRegion(regionIndex) {
  setZIndex("resim1", "-2");
  setZIndex(elementIds[regionIndex], "-1");

  for (let i = 0; i < btnIds.length; i++) {
    setZIndex(btnIds[i], "-3");
  }

  for (let i = 0; i <= 3; i++) {
    setZIndex("column" + (i + regionIndex * 4), "1");
  }
}

function marmara() {
  setZIndexForRegion(1);
}

function karadeniz() {
  setZIndexForRegion(2);
}

function ege() {
  setZIndexForRegion(3);
}

function ic() {
  setZIndexForRegion(4);
}

function dogu() {
  setZIndexForRegion(5);
}

function akdeniz() {
  setZIndexForRegion(6);
}

function guney() {
  setZIndexForRegion(7);
}
