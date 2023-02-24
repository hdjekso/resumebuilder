import { configureStore, createSlice } from "@reduxjs/toolkit";

// for the profile page for :

const firstnameSlice = createSlice({
  name: "firstname",
  initialState: "",
  reducers: {
    changeFirstName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const middlenameSlice = createSlice({
  name: "middlename",
  initialState: "",
  reducers: {
    changeMiddleName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const lastnameSlice = createSlice({
  name: "lastname",
  initialState: "",
  reducers: {
    changeLastName(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const addressSlice = createSlice({
  name: "address",
  initialState: "",
  reducers: {
    changeAddress(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const collegeSlice = createSlice({
  name: "college",
  initialState: "",
  reducers: {
    changeCollege(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const linkSlice = createSlice({
  name: "link",
  initialState: [],
  reducers: {
    addLink(state, action) {
      state.push(action.payload);
      return state;
    },
    removeLink(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const majorSlice = createSlice({
  name: "major",
  initialState: [],
  reducers: {
    changeMajor(state, action) {
      state.push(action.payload);
      return state;
    },
  },
});

const degreeSlice = createSlice({
  name: "degree",
  initialState: "",
  reducers: {
    changeDegree(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const gpaSlice = createSlice({
  name: "gpa",
  initialState: "",
  reducers: {
    changeGpa(state, action) {
      state = action.payload;
      return state;
    },
  },
});

const emailSlice = createSlice({
  name: "email",
  initialState: "",
  reducers: {
    changeEmail(state, action) {
      state = action.payload;
      return state;
    },
  },
});

// for the skill page:

const skillSlice = createSlice({
  name: "skill",
  initialState: [],
  reducers: {
    addskill(state, action) {
      state = action.payload;
      return state;
    },
    removeskill(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const courseWorkSlice = createSlice({
  name: "coursework",
  initialState: [],
  reducers: {
    addcoursework(state, action) {
      state = action.payload;
      return state;
    },
    removecoursework(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

const workexperienceSlcie = createSlice({
  name: "workexperience",
  initialState: [],
  reducers: {
    //
  },
});

const store = configureStore({
  reducer: {
    firstname: firstnameSlice.reducer,
    middlename: middlenameSlice.reducer,
    lastname: lastnameSlice.reducer,
    address: addressSlice.reducer,
    college: collegeSlice.reducer,
    major: majorSlice.reducer,
    degree: degreeSlice.reducer,
    gpa: gpaSlice.reducer,
    email: emailSlice.reducer,
    links: linkSlice.reducer,
    skills: skillSlice.reducer,
    courseworks: courseWorkSlice.reducer,
    workexperiences: workexperienceSlcie.reducer,
  },
});

export { store };
export const { changeFirstName } = firstnameSlice.actions;
export const { changeMiddleName } = middlenameSlice.actions;
export const { changeLastName } = lastnameSlice.actions;
export const { changeAddress } = addressSlice.actions;
export const { changeEmail } = emailSlice.actions;
export const { addLink, removeLink } = linkSlice.actions;
export const { changeCollege } = collegeSlice.actions;
export const { changeGpa } = gpaSlice.actions;
export const { changeMajor } = majorSlice.actions;
export const { changeDegree } = degreeSlice.actions;

export const { addskill, removeskill } = skillSlice.actions;
export const { addcoursework, removecoursework } = courseWorkSlice.actions;