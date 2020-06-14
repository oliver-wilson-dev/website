import sharedStyles from '../styles/shared.css';

export const preventScroll = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.classList.add(sharedStyles.bodyFixed);
};

export const allowScroll = () => {
  const scrollY = document.body.style.top;
  document.body.classList.remove(sharedStyles.bodyFixed);
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
