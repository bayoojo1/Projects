const fs = require('fs');


function mergeValues(values, content) {
  // Cycle over the keys
  for(let key in values) {
    // Replace all {{key}} with the value from the value object
    content = content.replace("{{" + key + "}}", values[key]);
  } 
  // Return merged content
  return content;

}

function view(templateName, values, response) {
    // Read from the template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"});
    // Insert value into the contents
    fileContents = mergeValues(values, fileContents);
    // Write out the content to the response
    response.write(fileContents);
}
module.exports.view = view;