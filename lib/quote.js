/**
 * @file
 * Quote objects.
 */


/**
 * Quote constructor.
 *
 * Represents a quote informations.
 *
 */
var Quote = function () {
};


/**
 * Extracts important data from the quote api response.
 *
 */
Quote.prototype.update = function (quoteData) {
    this.author = quoteData.author;
    this.content = quoteData.quote;
    this.data = quoteData;
};


module.exports = Quote;