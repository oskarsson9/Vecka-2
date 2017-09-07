var livingCats = {"Spot": true};

var email1 = "cats.. bla bla bla\nmore text...\ncats.. bla bla bla\ndied 27/04/2006: Black cat\nborn 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois\n";

var email2 = "cats.. bla bla bla\nmore text...\ncats.. bla bla bla\ndied 27/08/2007: White cat\nborn 08/03/2007 (mother Lady Rose): Yellow Lion, Doctor Hobbles the 4th, Big Iroquois\n";

var mailArchive = ["cats.. bla bla bla\nmore text...\ncats.. bla bla bla\ndied 27/04/2006: Black cat\nborn 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois\n", "cats.. bla bla bla\nmore text...\ncats.. bla bla bla\ndied 27/08/2007: White cat\nborn 08/03/2007 (mother Lady Rose): Yellow Lion, Doctor Hobbles the 4th, Big Iroquois\n"];

function retrieveMails(){

for (var current = 0; current in mailArchive; current++) {
  document.write("Processing e-mail #", current, ": ", mailArchive[current]);
}
}

function catNames(paragraph) {
  var colon = paragraph.indexOf(":");
  return paragraph.slice(colon + 2).split(", ");
}

function startsWith(string, pattern) {
  return string.slice(0, pattern.length) == pattern;
}

var livingCats = {"Spot": true};

for (var mail = 0; mail < mailArchive.length; mail++) {
  var paragraphs = mailArchive[mail].split("\n");
  for (var paragraph = 0;
       paragraph < paragraphs.length;
       paragraph++) {
    if (startsWith(paragraphs[paragraph], "born")) {
      var names = catNames(paragraphs[paragraph]);
      for (var name = 0; name < names.length; name++)
        livingCats[names[name]] = true;
    }
    else if (startsWith(paragraphs[paragraph], "died")) {
      var names = catNames(paragraphs[paragraph]);
      for (var name = 0; name < names.length; name++)
        delete livingCats[names[name]];
    }
  }
}
for (var i=0; i < livingCats.length; i++){
	document.write(livingCats[i]);
}

console.dir(livingCats);








































