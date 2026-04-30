(function() {
  var button = document.querySelector('.theme-toggle');

  if (!button) {
    return;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    button.querySelector('.theme-toggle__label').textContent = theme === 'dark' ? 'Dark' : 'Light';
    button.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
  }

  button.addEventListener('click', function() {
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  setTheme(document.documentElement.getAttribute('data-theme') || 'light');
})();
