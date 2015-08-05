var SQLLexer = require('./lib/SQLLexer.js');
var SQLParser = require('./lib/SQLParser.js');
var SQLParserListener = require('./lib/SQLParserListener');
var SQLParserVisitor = require('./lib/SQLParserVisitor');

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['antlr4'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('antlr4'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.antlr4);
    }
}(this, function (antlr4) {

    var listener = SQLParserListener(antlr4);

    return {
      SQLLexer: SQLLexer(antlr4),
      SQLParser: SQLParser(antlr4, listener), 
      SQLParserListener: listener,
      SQLParserVisitor: SQLParserVisitor(antlr4)
    };

}));