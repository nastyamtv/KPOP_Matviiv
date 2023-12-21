type CustomWorker1 = {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
  };

function getAllworkers1() : CustomWorker1[] {
    let workers = [{
            id: 1,
            name: 'Ivan',
            surname: 'Ivanov',
            available: false,
            salary: 1000,
        },
        {
            id: 2,
            name: 'Petro',
            surname: 'Petrov',
            available: true,
            salary: 1500,
        },
        {
            id: 3,
            name: 'Vasyl',
            surname: 'Vasyl',
            available: false,
            salary: 1600,
        },
        {
            id: 4,
            name: 'Maria',
            surname: 'Mariv',
            available: true,
            salary: 1100,
        }
    ]
    return workers;
};