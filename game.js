let points = 0;
function loadStory() {
  fetch('data/stories.json')
    .then((res) => res.json())
    .then((data) => {
      const story = data.stories[0];
      const storyTextDiv = document.getElementById('story-text');
      const audio = document.getElementById('click-sound');
      storyTextDiv.innerHTML = '';
      story.words.forEach((word) => {
        const span = document.createElement('span');
        span.innerText = word + ' ';
        span.style.cursor = 'pointer';
        span.onclick = () => {
          points += 1;
          document.getElementById('points').innerText = `Points: ${points}`;
          audio.play();
        };
        storyTextDiv.appendChild(span);
      });
    });
}