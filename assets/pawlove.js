// Custom cursor
const c = document.getElementById('cur'), r = document.getElementById('cur2');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function tick() {
  c.style.left = mx + 'px'; c.style.top = my + 'px';
  rx += (mx - rx) * .13; ry += (my - ry) * .13;
  r.style.left = rx + 'px'; r.style.top = ry + 'px';
  requestAnimationFrame(tick);
})();


// Toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}
window.showToast = showToast;
