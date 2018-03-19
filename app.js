let martin = new User('vondrm12@fit.cvut.cz');
let pririz = new Group('PřiŘíz', martin);
let elastic = new Task('Analýza dat', pririz, new Date('21.03.2018'), 'Analýza dat pomocí ELK stack.');

martin.addGroup(pririz);
pririz.addTask(elastic);

console.log(martin.toString());
console.log(martin.checkConsistency());
let vojta = new User('jirkovoj@fit.cvut.cz');
pririz.owner = vojta;
console.log(martin.checkConsistency());
