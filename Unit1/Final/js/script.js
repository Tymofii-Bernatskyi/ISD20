const button = document.getElementById('searchbutton');
const input = document.getElementById('userInput');
const clearBtn = document.getElementById('clearButton');

button.addEventListener('click', function () {
  const q = (input.value || '').trim();
  if (q) {
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    window.open(url, '_blank');
  }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  input.focus();
});
