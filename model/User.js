class User {
    constructor(email) {
        this.email = email;
        this.groups = [];
    }

    addGroup(group) {
        group.owner = this;
        this.groups.push(group);
    }

    checkConsistency() {
        for (let group of this.groups) {
            if (group.owner !== this || !group.checkConsistency()) {
                return false;
            }
        }

        return true;
    }

    serialize() {
        let json = {
            email: this.email,
            groups: this.groups.map(group => {
                return {id: group.id, tasks: group.tasks.map(task => task.id)};
            })
        };

        return JSON.stringify(json);
    }

    static deserialize(string) {
        let json = JSON.parse(string);
    }

    toString() {
        let string = `User ${this.email}:\n`;
        string += '\tgroups:\n';

        for (let group of this.groups) {
            string += group;
        }

        return string + '\n';
    }
}
