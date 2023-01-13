const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // TODO: Pull a random quote from the quotes.txt file
    const fs = require('fs')
    fs.readFile(QUOTE_FILE, 'utf-8', function(err, data) {
      if (err) throw err
      var QuoteList = data.split('\n')
      console.log(QuoteList[Math.floor(Math.random()*QuoteList.length)].split('|'))
    })
    // console log the quote and author
    // You may style the text with chalk as you wish
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    // TODO: Add the quote and author to the quotes.txt file
    if (!author){
      author = 'anonymous'
    }
    fs.appendFile(QUOTE_FILE, quote + '|' + author + '\n', function (err) {
      if (err) throw err
    })
    console.log("Updated!")
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
  });

program.parse();
