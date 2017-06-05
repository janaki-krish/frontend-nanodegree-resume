function getRelationship(x, y)
{
	if (isNaN(x) & isNaN(y))
		console.log("Can't compare relationships because " + x + " and " + y + " are not numbers");
	else if (isNaN(x))
		console.log("Can't compare relationships because " + x + " is not a number");
	else if (isNaN(y))
		console.log("Can't compare relationships because " + y + " is not a number");
};

var ret = getRelationship(2, "this");


function alphabetizer(_names)
{
	var strTempArray = "";
	for (var i = 0; i < _names.length; i++)
	{
		strTempArray = _names[i].split(' ');
		_names[i] = strTempArray[1] + ", " + strTempArray[0];
	}

	_names.sort();
	return _names;
}

var nameArray = [
"Neil Armstrong",
"Buzz Aldrin",
"Pete Conrad",
"Alan Bean",
"Alan Shepard",
"Edgar Mitchell",
"David Scott",
"James Irwin",
"John W Young",
"Charles Duke",
"Eugene Cernan",
"Harrison Schmitt"
];

nameArray = alphabetizer(nameArray);
console.log(nameArray);




// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var ruleResults = psinsights.formattedResults.ruleResults;
    console.log(ruleResults);
    var result = [];

    for (var prop in ruleResults)
    {
    	console.log(prop['localizedRuleName']);
    	if (prop.hasOwnProperty('localizedRuleName'))
	    	console.log("Has localisedRuleName");
    }
/*    ruleResults.forEach(function(rule, index) {
    	console.log('object index' + index);
    	Object.keys(rule).forEach(function(prop) {
    		console.log(prop + " = " + rule[prop]);
    	});
    });
*/
    return result;
}



// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    return parseInt(psinsights.pageStats.htmlResponseBytes) +
    		parseInt(psinsights.pageStats.cssResponseBytes) +
    		parseInt(psinsights.pageStats.imageResponseBytes) +
    		parseInt(psinsights.pageStats.javascriptResponseBytes) +
    		parseInt(psinsights.pageStats.otherResponseBytes);
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));