// * REGEX
// ** regexr.com

// * CHARACTER SETS
// ** Syntax: [<chars>]

// ** 1. /[<char>/g]
//*** will match everything that is inside the square bracket */
// ** 2. /[<^char/g>]
//*** will match everything that is NOT inside the square bracket */
// ** 3. /[<a-z>]/g
//*** will match small characters from a to z */
// ** 4. /[<A-Z>]/g
//*** will match captial characters from A to Z */
// ** 5. /[<A-Z>]/<flag>
// ** flag:
// *** g : global flag, iterates through the text, kung wala yan first line
// *** case insenstive
// *** multiline
//*** will match captial characters from A to Z */
// ** 6. /[<0-9>]/<g>
//*** selects the numbers */
// ** 7. /[.]/<g>
//*** accepts everything except the newline character */
// ** 8. /[\]/<g>
//*** accepts the newline character */
// ** 9. /[\w]/<g>
//*** accepts the word character, all number, letters and underscores */
// ** 10. /[\W]/<g>
//*** accepts not a word character */
// ** 11. /[\d]/<g>
//*** accepts the digits character if D, its accept everything except the digits */
// ** 12. /[\s]/<g>
//*** accepts the whitespace character, icludes tabs and linkbreaks. If S, accept everything except the white space */
// *** [\s\S] - selects everything
// ** 13. /^I/<gm>
//*** accepts the char I in the start of the line */
// ** 14. /d$/<gm>
//*** accepts the char D at the end of the line */
// ** 15. /\./<gm>
//*** selects only the period(.), can also work in special characters */

// * CAPTURE GROUP
// ** /(old)/gm
// *** selects, captures and extract the char "old"
// ** /(?:old)/gm
// *** selecting them but not really capture them
// * POSTIVE LOOK AHED
// ** /g(?=old)/gm
// *** only selecting "g" where it is followed by "old"
// * NEGATIVE LOOK AHED
// ** /g(?!old)/gm
// *** only selecting that is NOT "g" where it is followed by "old"
// * QUANTIFIERS
/[A-Z]\w+/gm;
// *** (+) selects one or more characters
/[A-Z][a-z]*'*[a-z]/gm;
// *** (*) optional 0 or more
/\d{3}/gm;
// *** accepts 3 digits in a row
/\d{3,}/gm;
// *** accepts 3 or more digits in a row
/\d{2,4}/gm;
// *** accepts 3 to 4 digits in a row
/(hear)?t/gm;

// * LAZY SELECTOR
/h\w+?/gm;

/(g|l)ive/gm;

// * PRACITCAL EXAMPLES

// ** zip code of US
/(^\d{5})-?(\d{4}$)?/gm;

/\s{2,}/gm;
