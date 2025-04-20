function makeTextBigger() {
    //alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

// style changing function for radio buttons (Fancy/Boring)
function changeStyle() {
    let textArea = document.getElementById("textInput");
    
    if (document.getElementById("fancy").checked) {
        //alert("FancyShmancy style selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        //alert("BoringBetty style selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Moo button functionality
function mooText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value;

    // Uppercase all text
    text = text.toUpperCase();

    // Split into sentences and append '-Moo' to each
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }

    textArea.value = sentences.join(". ");
}