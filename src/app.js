const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
// directory path
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const viewPartials = path.join(__dirname, '../templates/partials' )

//set up handlerbars
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(viewPartials)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather App',
        name: 'Abbey',
        footer: 'this is amazing'
    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
       return res.send({
        error: "You must provide a search term"
       })
    }
    console.log(req.query.search)
    res.send({
        product: []
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is a helpful text',
        title: 'Help',
        name: 'Abbey',
        footer: 'this is amazing'
    })
})

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'My story',
        name: 'Abodun',
        footer: 'this is magic'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather page!')
})

app.listen(3000, () => {
    console.log('server is up on port 3000!')
})