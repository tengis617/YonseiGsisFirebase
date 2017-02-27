import { ICourse } from './../course/course.model';

export interface IProfessor { 
    id: Number;
    name: String;
    courses: ICourse[];
    rating: Number;
}