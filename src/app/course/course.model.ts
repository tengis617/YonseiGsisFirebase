export class Course {
    name: string;
    major: string;
    concentrationField: string;
    professor: string;
    constructor(name: string, major: string, concentrationField: string, professor: string) {
        this.name = name;
        this.major = major;
        this.professor = professor;
        this.concentrationField = concentrationField;
    }
}
