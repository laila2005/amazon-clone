// Shared touch handling logic for slideshow components

export const attachTouchHandlers = (scrollRef) => {
  if (!scrollRef.current) return;
  
  const slider = scrollRef.current;
  let startX;
  let scrollLeft;
  
  const touchStart = (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  
  const touchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (startX - x) * 1.5; // Scroll speed multiplier
    slider.scrollLeft = scrollLeft + walk;
    e.preventDefault();
  };
  
  const touchEnd = () => {
    startX = null;
  };
  
  slider.addEventListener('touchstart', touchStart, { passive: false });
  slider.addEventListener('touchmove', touchMove, { passive: false });
  slider.addEventListener('touchend', touchEnd, { passive: false });
  
  return () => {
    slider.removeEventListener('touchstart', touchStart);
    slider.removeEventListener('touchmove', touchMove);
    slider.removeEventListener('touchend', touchEnd);
  };
};
