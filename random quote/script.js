function generate() {
    var quotes = {
        "- Bhagat Singh": "Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking.",
        "- Ramprasad Bismil": "Sarfaroshi ki tamanna ab hamare dil me hai, dekhna hai zor kitna baazu-e-qaatil me hai.",
        "- Swami Vivekananda": "Let a new India arise out of peasants' cottages, grasping the plough, out of huts, cobbler, and sweeper.",
        "- Bal Gangadhar Tilak": "Swaraj is my birthright and I shall have it.",
        " - Mahatma Gandhi": "Freedom is not worth having if it does not include the freedom to make mistakes.",
        " - BR Ambedkar": "Democracy is not merely a form of government. It is primarily a mode of associated living, of conjoint communicated experience. It is essentially an attitude of respect and reverence towards fellow men,"
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}