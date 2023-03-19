
setInterval(() => {
  const date = new Date();
  const htime = date.getHours();
  const mtime = date.getMinutes();
  const stime = date.getSeconds();
  const hRotation = 30 * htime + mtime / 2;
  const mRotation = 6 * mtime;
  const sRotation = 6 * stime;

  document.querySelector(".hour").style.transform = `rotate(${hRotation}deg`;
  document.querySelector(".min").style.transform = `rotate(${mRotation}deg`;
  document.querySelector(".sec").style.transform = `rotate(${sRotation}deg`;
}, 100);
