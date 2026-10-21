document.querySelectorAll('.braille').forEach(el => {
  if (el.children.length == 0) {
    el.innerHTML = '<span></span><span></span><span></span><span></span>';
  }
});
