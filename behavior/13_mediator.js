class User {
    constructor(name) {
        this.name = name
        this.room = null
    }
    send(message, to) {
        this.room.send(message, this, to)
    }
    receive(message,from) {
        console.log(`${from.name} => ${this.name} : ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }
    register(user) {
        this.users[user.name] = user
        user.room = this
    }
    send(message,from,to) {
        if(to) {
            to.receive(message,from)
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message,from)
                }
            })
        }
    }
}

let user1 = new User('Alex'),
    user2 = new User('Kristina')

const room = new ChatRoom()
room.register(user1)
room.register(user2)

user1.send('Hello', user2)
user2.send('Yo,hello', user1)