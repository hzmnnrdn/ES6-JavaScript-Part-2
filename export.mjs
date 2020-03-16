class Student{
    constructor(name, matricNo, major){
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }

    get Name(){
        return this.name;
    }

    get MatricNo(){
        return this.MatricNo;
    }

    get Major(){
        return this.major;
    }

    set Name(name){
        this.name;
    }

    set MatricNo(matricNo){
        this.matricNo;
    }

    set Major(major){
        this.major;
    }
    display(){
        console.log(`Name is `, this.name);
        console.log(`Matric Number is `, this.matricNo);
        console.log(`Major is `, this.major);
    }

    //export {name, matricNo, major};
}
export {Student};