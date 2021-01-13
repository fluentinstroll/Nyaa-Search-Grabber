const { si } = require("nyaapi");
const fs = require("fs");

/**********************************************************************************
 * API info: https://github.com/Kylart/Nyaapi/wiki/Nyaa.si#search
 * TODO:
 * - pump links into text file(?)
 * - open links in torrent software(? Maybe this needs to be a separate script)
 * - add ability to get only english sub
 *********************************************************************************/

if (!process.argv[2]) {
  console.log("please enter a search term");
} else {
  let searchTerm = process.argv[2];
  let aCategory;
  if (process.argv[4] == "-e") {
    aCategory = "1_2";
  }

  /* searchAll settings
   *  filter 0 = no filter
   *  filter 1 = no remakes
   *  filter 2 = trusted only
   * -------------------------
   * no category = 'All categories'
   * category 1_1 = amv
   * category 1_2 = english sub
   */
  si.searchAll(searchTerm, { filter: 2, category: aCategory })
    .then((data, limit) => {
      if (process.argv[3] && parseInt(process.argv[3]) <= 100) {
        limit = parseInt(process.argv[3]);
      } else {
        limit = 10;
      }
      data.forEach((data, index) => {
        if (index < limit)
          console.log(`name: ${data.name} link: ${data.torrent}`);
      });
    })
    .catch((err) => {
      console.log(
        "Could not connect to https://nyaa.si/, is the website down?"
      );

      fs.writeFile("./error.log", err.toString(), (err) => {
        if (err) throw err;
        console.log("Check the error.log for more info.");
      });
    });
}
