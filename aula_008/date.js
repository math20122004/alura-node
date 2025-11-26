const now = new Date()

console.log(now.toString())

console.log('Year: ', now.getFullYear())
console.log('Monther (0 - 11): ', now.getMonth())
console.log('Day: ', now.getDate())
console.log('Day Week: ', now.getDay())
console.log('Time: ', now.getTime())
console.log('Hours: ', now.getHours())
console.log('Minutes: ', now.getMinutes())
console.log('Seconds: ', now.getSeconds())

const birth = new Date('2004-12-20:10:00:00.000Z')
console.log(birth)

console.log('Brazilian Date: ', birth.toLocaleDateString('pt-BR'))
console.log('American Date: ', birth.toLocaleDateString('en-US'))