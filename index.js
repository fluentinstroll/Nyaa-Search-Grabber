const { si } = require('nyaapi');

/**********************************************************************************
 * API info: https://github.com/Kylart/Nyaapi/wiki/Nyaa.si#search
 * TODO: 
 * - args to specify the search term
 * - pump links into text file(?)
 * - open links in torrent software(? Maybe this needs to be a separate script) 
 *********************************************************************************/
let searchTerm = 'dr stone';

si.searchAll(searchTerm, {filter: 2, })
.then((data) => console.log(data))
.catch((err) => console.log(err));