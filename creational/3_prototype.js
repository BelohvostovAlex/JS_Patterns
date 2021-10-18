const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`)
    }
}

let carWithOwner = Object.create(car, {
    owner: {
        value: 'Alex'
    }
})

carWithOwner.init()
