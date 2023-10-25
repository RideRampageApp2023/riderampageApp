function observeCookie(cookieName, callback) {
  let lastValue = getCookie(cookieName);

  const intervalId = setInterval(() => {
    const currentValue = getCookie(cookieName);
    if (currentValue !== lastValue) {
      callback(currentValue);
      lastValue = currentValue;
    }
  }, 500);

  return function stopObserving() {
    clearInterval(intervalId);
  };
}
function getCookie(cookieName) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

export { observeCookie };