# nyaa-anime-grabber
An npm script to grab torrents from nyaa rss feeds.

## Arguments
`<name of search target>`: any word or phrase, presumably the name of an anime or manga
`<number of results>`: any number of results you would like, capped at 100 (if you go over program defaults to 10)
`-e`: used if you'd only like to search the 'Anime - English-translated' section
## To Use

1. clone this repo
2.  `npm install` inside the cloned repo
3. `npm run nyaagrab '<name of search target>' '<number of results to get>' -- <-e>`

Uses [Nyaapi](https://github.com/Kylart/Nyaapi) to search.
