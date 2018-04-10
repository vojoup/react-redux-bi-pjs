'use strict';

import User from './model/User';
import Group from './model/Group';
import TaskManager from './service/TaskManager';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

let martin = new User('vondrm12@fit.cvut.cz');
let pririz = new Group('PřiŘíz', martin);

martin.addGroup(pririz);

let taskManager = new TaskManager();
taskManager.users.push(martin);

taskManager.addTask(pririz, 'Přečíst dokumentaci', new Date('19.03.2018'));
taskManager.addTask(pririz, 'Analýza dat', new Date('21.03.2018'));
console.log(martin.toString());
let tasks = taskManager.findMatchingTasks('dat', martin);
tasks[0].done = true;
let id = tasks[0].id;
console.log(tasks[0].toString());
taskManager.deleteTask(id);
console.log(martin.toString());
console.log(taskManager.findTask(id));
let task = taskManager.findAllTasks(martin)[0];
console.log(taskManager.findTask(task.id));

ReactDOM.render(<App name="Martin"/>, document.getElementById('content'));
