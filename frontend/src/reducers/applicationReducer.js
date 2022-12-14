import { GET_APPLICATIONS_BY_DEPARTMENT_SUCCESS } from "../constants/actionTypes";

const INITIAL_STATE = {
  applications: [],
  // To just represent for now
  placedApplications: [
    {
        id: 1,
        name: "John Doe",
        type: 'Erasmus',
        department: "Computer Science",
        selectedUniversities: ["Bilkent University", "Stanford University", "Harvard University", "Ohio State University", "MIT"],
        selectedSemester: 'fall',
        score: 67,
        status: "placed",
        admittedUniversity: "Stanford",
        documents: [],
        languages: ["English", "German", "French"],
    },{
        id: 2,
        name: "Kürşad Güzelkaya",
        type: 'Erasmus',
        department: "Computer Science",
        selectedUniversities: ["Bilkent University", "Stanford University", "Harvard University", "Ohio State University", "MIT"],
        selectedSemester: 'spring',
        score: 77,
        status: "placed",
        admittedUniversity: "Harward",
        documents: [],
        languages: ["English", "German", "French"],
    },{
        id: 3,
        name: "Jake Paul",
        type: 'Erasmus',
        department: "Electrical Engineering",
        selectedUniversities: ["Bilkent University", "Stanford University", "Harvard University", "Ohio State University", "MIT"],
        selectedSemester: 'fall',
        score: 80,
        status: "placed",
        admittedUniversity: "MIT",
        documents: [],
        languages: ["English", "German", "French"],
    },{
        id: 4,
        name: "Lionel Messi",
        type: 'Erasmus',
        department: "Computer Science",
        selectedUniversities: ["Bilkent University", "Stanford University", "Harvard University", "Ohio State University", "MIT"],
        selectedSemester: 'spring',
        score: 69,
        status: "placed",
        admittedUniversity: "UCLA",
        documents: [],
        languages: ["English", "German", "French"],
    },{
        id: 5,
        name: "Cristiano Ronaldo",
        type: 'Erasmus',
        department: "Computer Science",
        selectedUniversities: ["Bilkent University", "Stanford University", "Harvard University", "Ohio State University", "MIT"],
        selectedSemester: 'fall',
        score: 85,
        status: "placed",
        admittedUniversity: "Colby",
        documents: [],
        languages: ["English", "German", "French"],
    },
  ],
};

const applicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_APPLICATIONS_BY_DEPARTMENT_SUCCESS:
        return {...state, applications: action.payload};
    default:
        return state;
  }
};

export default applicationReducer;
