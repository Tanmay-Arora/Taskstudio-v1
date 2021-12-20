export class Tasks {
    id: number = 0;
    name:string = '';
    description:string = '';

    constructor(name:string, description:string) {
        this.name = name;
        this.description = description;
    }
}