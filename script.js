function upDate(previewPic) {
  console.log('upDate triggered');
  console.log('alt:', previewPic.alt);
  console.log('src:', previewPic.src);

  const image = document.getElementById('image');
  image.textContent = previewPic.alt || '...';
  image.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log('undo triggered');

  const image = document.getElementById('image');
  image.style.backgroundImage = "url('')";
  image.textContent = "Hover over an image below to display here.";
}

document.querySelectorAll('.preview').forEach(img => {
  img.addEventListener('mouseover', () => upDate(img));
  img.addEventListener('focus', () => upDate(img));
  img.addEventListener('mouseout', undo);
  img.addEventListener('blur', undo);
});
