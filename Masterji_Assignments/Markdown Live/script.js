const marked = window.marked;

const output = document.getElementById('output');
const inputMarkdown =document.getElementById('input');
const resetButton = document.getElementById('reset');


marked.setOptions({
    breaks: true,  // For better line break handling
    gfm: true     // For basic GitHub Flavored Markdown features
});



function MarkdownDisplay() {
    output.innerHTML = marked.parse(inputMarkdown.value);
}


inputMarkdown.addEventListener('input', MarkdownDisplay);

resetButton.addEventListener('click', () => {

    inputMarkdown.value = "";
    output.innerHTML="";

});
MarkdownDisplay();