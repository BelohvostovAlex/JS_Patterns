class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 10
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name
        this.cost = 30
    }
}
class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 100
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }
    create(name,type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}) costs : ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory() 
const members = [
    factory.create('Alex', 'premium'),
    factory.create('Kristina', 'standart'),
    factory.create('Jan'),
    factory.create('Boris', 'standart')
]
members.forEach(member => {
    member.define()
})
