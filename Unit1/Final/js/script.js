<script>
  const button = document.getElementById('searchbutton');
  const input = document.getElementById('userInput');


  button.addEventListener('click', function () {
    const q = (input.value || '').trim();
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(q);
    window.open(url, '_blank');
  });

  document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
  });
</script>
