6.// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const persone_name: string = "   \n\t uzma imran \t\n ";

console.log(persone_name);

const without_whitespace: string = persone_name.trim();

console.log(without_whitespace);