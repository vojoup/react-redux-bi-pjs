class Task {
    constructor(title, group, dueDate, description = '') {
        this.id = (Date.now() * 10) + (Math.floor(Math.random() * 10));
        this.title = title;
        this.description = description;
        this.done = false;
        this.group = group;
        this.created = new Date();
        this.dueDate = dueDate;
    }

    toString() {
        let string = `\t\t\tTask (${this.id})\n`;
        string += `\t\t\t\ttitle: ${this.title}\n`;
        string += `\t\t\t\tdescription: ${this.description}\n`;
        string += `\t\t\t\tdone: ${this.done}\n`;
        string += `\t\t\t\tcreated: ${this.created}\n`;
        string += `\t\t\t\tdue date: ${this.dueDate}\n`;
        return string + '\n';
    }
}
