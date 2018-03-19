class TaskManager {
    constructor() {
        this.tasks = [];
        this.users = [];
    }

    findTask(id) {
        for (let task of this.tasks) {
            if (task.id === id) {
                return task;
            }
        }

        return null;
    }

    findAllTasks(user, done = null) {
        return this.tasks.filter((task) => {
            if (task.group.owner.email === user.email) {
                if (done === null) {
                    return task;
                } else {
                    if (task.done === done) {
                        return task;
                    }
                }
            }
        });
    }

    findMatchingTasks(title, user = null) {
        return this.tasks.filter((task) => {
            if (task.title.search(title) > -1) {
                if (user === null) {
                    return task;
                } else {
                    if (task.group.owner.email === user.email) {
                        return task;
                    }
                }
            }
        });
    }

    addTask(group, title, dueDate) {
        let task = this.tasks.filter((task) => {
            return task.title === title
        });

        if (task.length > 0) {
            return false;
        }

        task = new Task(title, group, dueDate);
        group.addTask(task);
        this.tasks.push(task);
        return true;
    }

    deleteTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id && this.tasks[i].done) {
                this.tasks[i].group.removeTask(this.tasks[i]);
                this.tasks.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}
