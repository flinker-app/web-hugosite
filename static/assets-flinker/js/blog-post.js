// Reading progress bar for blog single
(function () {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.setProperty('--progress', progress + '%');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
