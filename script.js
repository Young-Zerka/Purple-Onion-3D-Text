var el = document.querySelector('span'),
  depth = 10;
for (i = 0; i < depth; i++) {
  el.parentNode.append(el.cloneNode(true));
}