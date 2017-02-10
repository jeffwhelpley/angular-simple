"use strict";
var express = require("express");
var app = express();
// our ng1.html and our bundle both live in the assets directory
app.use(express.static('assets'));
// for the home page, simply return the main server template
app.get('/', function (req, res) {
    res.send("\n        <html>\n            <head>\n                <title>Simple</title>\n            </head>\n            <body>\n                <app-root>Loading...</app-root>\n                <script src=\"/bundle.js\"></script>\n            </body>\n        </html>\n    ");
});
// finally, fire up the server on port 9999
app.listen(9999, function () {
    console.log('Server running on http://localhost:9999');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZWZmd2hlbHBsZXkvb3BlbnNvdXJjZS9hbmd1bGFyLXNpbXBsZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlDQUFtQztBQUVuQyxJQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixnRUFBZ0U7QUFDaEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFbEMsNERBQTREO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBUSxFQUFFLEdBQVE7SUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyx5UUFVUixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILDJDQUEyQztBQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQTtBQUMxRCxDQUFDLENBQUMsQ0FBQyJ9