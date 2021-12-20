export class Users {
    id:string = '';
    emailAddr:string = '';
    password:string = '';
    secQuestion: string = '';
    secAnswer: string = '';
    length?: number;

    public constructor(emailAddr:string, password:string, secQuestion:string, secAnswer:string) {
        this.emailAddr = emailAddr;
        this.password = password;
        this.secQuestion = secQuestion;
        this.secAnswer = secAnswer;
    }
}