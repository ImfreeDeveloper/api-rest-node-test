const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let CONTACTS = [
  {id: v4(), name: 'artur', value: '+7-9120', mark: false},
  {id: v4(), name: 'timur', value: '+7-998844', mark: false},
]

app.use(express.json()) // для работы request с json

// GET
app.get('/api/contacts', (req, res) => {
  res.status(200).json(CONTACTS)
})
// POST
app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), mark: false}
  CONTACTS.push(contact)
  // 201 - создан
  res.status(201).json(contact)
})
// DELETE
app.delete('/api/contacts/:id', (req, res) => {
  CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
  res.status(200).json({message: 'Контакт обновлен'})
})
// PUT
app.put('/api/contacts/:id', (req, res) => {
  const idx = CONTACTS.findIndex(c => c.id === req.params.id)
  CONTACTS[idx] = req.body
  res.json(CONTACTS[idx])
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Сервак на 3000'))
