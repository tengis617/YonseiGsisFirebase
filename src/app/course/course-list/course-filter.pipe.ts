import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './../course.model';
@Pipe({
    name: 'courseFilter'
})

export class CourseFilterPipe implements PipeTransform {
    transform(value: Course[], filterBy: string): Course[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((course: Course) =>
            (course.concentrationField.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
            (course.name.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
            (course.major.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
            (course.professor.toLocaleLowerCase().indexOf(filterBy) !== -1)
            ) : value;

    }
}
