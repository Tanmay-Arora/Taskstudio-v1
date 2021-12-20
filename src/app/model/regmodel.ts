export class Regmodel {
    name:string = '';
    emailAddr:string = '';
    password:string = '';

    public constructor(name:string, emailAddr:string, password: string) {
        this.name = name;
        this.emailAddr = emailAddr;
        this.password = password;
    }
}