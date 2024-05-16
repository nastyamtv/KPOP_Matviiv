
import { teachers } from "./loadUsers.js";
import { updateTopteachersGrid } from "./updateTopTeachersGrid.js";

export function searchAndShowTeacher() {
    let searchFieldValues = document.getElementById('header-search-field').value.toLowerCase().split(',');

    let filteredTeachers = teachers.filter((teacher) => {

        for (let value of searchFieldValues) {
            if (value.length > 5) {
                if (teacher['full_name'].toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                    return true;
                }

                if (teacher['note'] !== undefined && teacher['note'] !== null && teacher['note'].toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                    return true;
                }
            } else {
                if (!isNaN(value) && parseInt(value) === teacher['age']) {
                    return true;
                }
            }
        }

        return false;
    });
    
    updateTopteachersGrid(filteredTeachers);
}