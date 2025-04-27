const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

// This function is used to convert the markdown to html
const renderToMarkdown = markdown => {
  htmlView.innerHTML = markdown; // This line sets the innerHTML of the htmlView to the markdown content
}

// This function captures the keyup event and calls the renderToMarkdown function
markdownView.addEventListener('keyup', e => {
  const currentContent = e.target.value; // This line gets the current content of the textarea
  renderToMarkdown(currentContent); // This line calls the renderToMarkdown function and passes the current content of the textarea
});