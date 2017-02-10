import * as express from 'express';

const app = express();

// our ng1.html and our bundle both live in the assets directory
app.use(express.static('assets'));

// for the home page, simply return the main server template
app.get('/', function (req: any, res: any) {
    res.send(`
        <html>
            <head>
                <title>Simple</title>
            </head>
            <body>
                <app-root>Loading...</app-root>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `);
});

// finally, fire up the server on port 9999
app.listen(9999, function () {
    console.log('Server running on http://localhost:9999')
});
