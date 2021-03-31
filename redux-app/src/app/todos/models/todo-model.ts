export class Todo {
    id: number;
    text: string;
    done: boolean;


    constructor(text: string){
        this.text = text;
        this.id = new Date().getTime();
        this.done = false;
    }
}