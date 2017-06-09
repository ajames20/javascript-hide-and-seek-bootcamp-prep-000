function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(selector) {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = i + parseInt(n);
  }
}

function deepestChild() {
  let foundYou = [];
  let deep = document.getElementById('grand-node').querySelectorAll('div');
  for (let i = 0; i < deep.length; i++) {
    foundYou.push(deep[i]);
  }
  return foundYou[foundYou.length - 1];
}
