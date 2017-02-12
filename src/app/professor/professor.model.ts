import { ICourse } from './../course/course.model';

export interface IProfessor {
    name: String;
    courses: ICourse[];
    rating: Number;
}
