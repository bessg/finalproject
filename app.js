const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { artistName, artType, email } = req.body;
    // Here you could perform operations with the received data, like storing it in a database
    console.log('Received form data:', { artistName, artType, email });
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});