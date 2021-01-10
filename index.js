const { si } = require('nyaapi');

/**********************************************************************************
 * API info: https://github.com/Kylart/Nyaapi/wiki/Nyaa.si#search
 * TODO: 
 * - pump links into text file(?)
 * - open links in torrent software(? Maybe this needs to be a separate script) 
 *********************************************************************************/

var limit;
var searchTerm;

if(!process.argv[2]){
    console.log('please enter a search term')
} else { 
    if(!process.argv[3] || isNaN(process.argv[3])){
        limit = 10;
    } else {
        limit = parseInt(process.argv[3]);
    }
    searchTerm = process.argv[2];
}

si.searchAll(searchTerm, {filter: 2, })
.then((data) =>
    data.forEach((data, index) => {
        if(index < limit)
            console.log(`name: ${data.name} link: ${data.torrent}`);
    }))
.catch((err) => console.log(err));