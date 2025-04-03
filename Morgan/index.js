
// combined - Standard Apache combined log format (includes remote address, request method, status, response time, etc.).

// common - Standard Apache common log format (similar to combined but without referrer and user-agent).

// dev - Concise output with status color coding (useful for development).

// short - Shorter version of common with less information.

// tiny - Minimal output with method, URL, status, and response time.

// Best Format:
// For development: dev (color-coded, easy to read).

// For production: combined (most detailed, useful for logging user activities).




const express = require('express');
const app = express();


const morgan = require('morgan');

// Using different predefined formats
app.use('/combined', morgan('combined'));
app.use('/common', morgan('common'));
app.use('/dev', morgan('dev'));
app.use('/short', morgan('short'));
app.use('/tiny', morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


// Use dev for development (color-coded, easy to debug).

// Use combined for production (detailed logging).
