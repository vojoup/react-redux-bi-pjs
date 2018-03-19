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

    toString() {
        let string = `User ${this.email}:\n`;
        string += '\tgroups:\n';

        for (let group of this.groups) {
            string += group;
        }

        return string + '\n';
    }
}
