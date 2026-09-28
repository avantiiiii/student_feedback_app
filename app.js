document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const course = document.getElementById('course').value;
  const feedback = document.getElementById('feedback').value;

  const feedbackList = document.getElementById('feedbackList');

  const card = document.createElement('div');
  card.className = 'feedback-card';
  card.innerHTML = `
    **${name}** (${course})