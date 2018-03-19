class Group {
    constructor(title, owner) {
        this.id = (Date.now() * 10) + (Math.floor(Math.random() * 10));
        this.title = title;
        this.owner = owner;
        this.tasks = [];
    }

    addTask(task) {
        task.group = this;
        this.tasks.push(task);
    }

    checkConsistency() {
        for (let task of this.tasks) {
            if (task.group !== this) {
                return false;
            }
        }

        return true;
    }

    toString() {
        let string = `\t\tGroup (${this.id})\n`;
        string += `\t\t\ttitle: ${this.title}\n`;
        string += '\t\t\ttasks:\n';

        for (let task of this.tasks) {
            string += task;
        }

        return string + '\n';
    }
}
