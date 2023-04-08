const loremIpsumSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Etiam at ipsum vel massa tincidunt vehicula.",
    "Nulla ac elit sed elit vehicula scelerisque a eget dolor.",
    "Fusce nec dapibus est.",
    "Proin fringilla massa vel nunc sagittis euismod.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Suspendisse vitae massa eu lorem molestie laoreet quis non velit.",
    "Maecenas nec justo vel erat iaculis porttitor vel in dolor.",
    "Morbi at quam ac mauris malesuada egestas.",
    "Praesent non magna ut justo suscipit imperdiet.",
    "Nam id sapien nec lectus congue rhoncus.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis euismod nunc ac ante finibus, vel egestas augue tristique."
];

function generateLoremIpsum(numParagraphs, numSentencesPerParagraph) {
    let loremIpsum = "";
    for (let i = 0; i < numParagraphs; i++) {
        let paragraph = "";
        for (let j = 0; j < numSentencesPerParagraph; j++) {
            let randomIndex = Math.floor(Math.random() * loremIpsumSentences.length);
            paragraph += loremIpsumSentences[randomIndex] + " ";
        }
        loremIpsum += paragraph.trim() + "\n\n";
    }
    return loremIpsum.trim();
}

module.exports = generateLoremIpsum
