export class TodoTask {
    public taskID: number;
    public newTask: string;
    public geolocation: string;
    public email: string;
    public Image: string;

    constructor(
        init?: Partial<TodoTask>
    ) {
        Object.assign(this, init);
    }
}

export const TODOTASKS: TodoTask[] = [
    { taskID: 1, newTask: 'Task 1', geolocation: '', email: '', Image: '' },
    { taskID: 2, newTask: 'Task 2', geolocation: '', email: '', Image: '' },
    { taskID: 3, newTask: 'Task 3', geolocation: '', email: '', Image: '' },
    { taskID: 4, newTask: 'Task 4', geolocation: '', email: '', Image: '' },
    { taskID: 5, newTask: 'Task 5', geolocation: '', email: '', Image: '' }
];
