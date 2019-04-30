const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {

        const peopleIndex = this.peoples.findIndex(
            people => people.id === id
        );
        if(peopleIndex === -1)return Promise.reject('invalide id');

        this.peoples[peopleIndex] = people;
        return {isModified: true};
    }
    
    getPeople(filters = null) {
        // To be implemented!
        if(filters === null)
        {
            return Promise.resolve(this.peoples);
        }
    }
}
