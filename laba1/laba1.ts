enum Category{
    BusimessAnalyst = 'Business analyst',
    Developer = 'Developer',
    Designer = 'Designer',
    QA='QA',
    ScrumMaster = 'Scrum Master'
}

type CustomWorker = {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
  };

function getAllworkers() : CustomWorker[] {
    let workers = [{
            id: 1,
            name: 'Ivan',
            surname: 'Ivanov',
            available: false,
            salary: 1000,
            category: Category.Developer
        },
        {
            id: 2,
            name: 'Petro',
            surname: 'Petrov',
            available: true,
            salary: 1500,
            category: Category.QA
        },
        {
            id: 3,
            name: 'Vasyl',
            surname: 'Vasyl',
            available: false,
            salary: 1600,
            category: Category.ScrumMaster
        },
        {
            id: 4,
            name: 'Evgen',
            surname: 'Zhukov',
            available: true,
            salary: 1300,
            category: Category.Developer
        },
        {
            id: 5,
            name: 'Anastasia',
            surname: 'Matviiv',
            available: true,
            salary: 2000,
            category: Category.Designer
        },
        {
            id: 6,
            name: 'Danya',
            surname: 'Danov',
            available: false,
            salary: 1900,
            category: Category.Developer
        },
        {
            id: 7,
            name: 'Maria',
            surname: 'Mariv',
            available: true,
            salary: 1100,
            category: Category.BusimessAnalyst
        }
    ]
    return workers;
};

console.log(getAllworkers());

function logFirstAvailable(workers : CustomWorker[]= getAllworkers()) : void {
    let quantity = workers.length;
    let availableWorkerFound = false;
    console.log(`Quantity: ${quantity}`);

    for (const worker of workers) {
        if (worker.available == true) {
            console.log(`Available worker: ${worker.name} ${worker.surname}`)
            availableWorkerFound = true;
            break;
        }
    }
};
console.log('Task 1.1')
logFirstAvailable(getAllworkers());
function getWorkersNamesByCategory(workers: CustomWorker[], categoryToFind: Category = Category.Designer): string[] {
    const matchingSurnames: string[] = [];

    for (const worker of workers) {
        if (worker.category === categoryToFind) {
            matchingSurnames.push(worker.surname);
        }
    }
    return matchingSurnames;
}

console.log('\nTask 1.2')
console.log(`Workers category Developer`)
console.log(getWorkersNamesByCategory(getAllworkers(), Category.Developer))

//function logWorkersNames(names: string[]): void {
//    for (const name of names) {
//        console.log(name);
//    }
//}
function logWorkersNames(names: string[]): void {
    for (const name of names) {
        console.log(name);
    }
}
console.log(`Print array:`);
const workerNames: string[] = ['Ivan Ivanov', 'Petro Petrov', 'Maria Mariv'];
console.log(logWorkersNames(workerNames));

function getWorkerByID(id: number): { name: string, surname: string, available: boolean, salary: number } | undefined {
    let workers = getAllworkers();
    let foundWorker = workers.find(worker => worker.id === id);

    if (foundWorker) {
        return {name: foundWorker.name, surname: foundWorker.surname, available: foundWorker.available, salary: foundWorker.salary};
    }
    else{
        return undefined; 
    }
}

console.log('\nTask 1.3')
console.log('Data about the 4th person',getWorkerByID(4));
console.log('Data about the 9th person',getWorkerByID(9));
const developerWorkers = getAllworkers().filter(worker => worker.category === Category.Developer);
developerWorkers.forEach(worker => {
    console.log(`Name: ${worker.name}, Surname: ${worker.surname}`);
});

console.log('\nTask 1.4')

function createCustomerID(name: string, id: number): string {
    return name + ' ' + id.toString();
}
const myID: string = createCustomerID("Ann ", 10);
console.log('myID:', myID);

let IdGenerator: (name: string, id: number) => string;

IdGenerator = createCustomerID;
let generatedID = IdGenerator('Nastya ',15)
console.log('generated id: ', generatedID);

console.log('\nTask 1.5')

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);
    if (age !== undefined) {
        console.log(`Customer age: ${age}`);
    }
    if (city !== undefined) {
        console.log(`Cuntomer city: ${city}`);
    }
}

createCustomer('Fedir');
console.log(' ');
createCustomer('Bella', 19);
console.log(' ');
createCustomer('Ahri', 58, 'Kyiv');

//Параметри по замовчуванню
let nameByCategory = getWorkersNamesByCategory(getAllworkers());
console.log('\nName by Category by default (Designer)', nameByCategory);
console.log('\nFirst worker Available without a parameter:')
logFirstAvailable ();

function checkoutWorkers(customer: string, workerIDs: number[]): string[] {
    let availableWorkerNames: string[] = [];

    console.log(`Customer: ${customer}`);

    for (const workerID of workerIDs) {
        const worker = getWorkerByID(workerID); 

        if (worker && worker.available) {
            const workerName = `${worker.name} ${worker.surname}`;
            availableWorkerNames.push(workerName);
        }
    }

    return availableWorkerNames;
}

let myWorkers = checkoutWorkers('Anastasia',[1,5]);
console.log('Result:')
myWorkers.forEach(workerName => {
    console.log(workerName);
});
//console.log('Result ', myWorkers)