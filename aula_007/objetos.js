const people = {
    name: 'Alícia',
    age: 21,
    isCNH:  true
}

people.sobrenome = 'Santos'

console.log('Nome: ', people.name)
console.log('Sobrenome: ', people.sobrenome)

//----------------------------

const author2 = {
    name: 'J. R. R. Tolkien',
    nationality: 'British',
    age: 98
}

const book = {
    title: 'O Hobbit',
    author: author2,
    page: 310
}

book.isPublished = true 
book.language = [
    'English', 'Portuguese', 'Spanish'
]

book.language.push('Mandarin')
book.language.push('French')

console.log(book)

delete book.page

console.log(book)

console.log('Acessando dados ', book['title'])
console.log('Acessando dados ', book.author.name)

