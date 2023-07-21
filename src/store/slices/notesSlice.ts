import { createSlice } from "@reduxjs/toolkit";

export interface INote {
  title: string;
  id: number;
  created_at: string;
  content: string;
  tags: string[];
}

let id = 3;

const initialState = {
  filter: [] as string[],
  notes: [
    {
      id: 1,
      title: "First Note",
      created_at: new Date().toDateString(),
      content: "Hello, this is my first #note!",
      tags: ["#note"]
    },
    {
      id: 2,
      title: "Second Note",
      created_at: new Date().toDateString(),
      content: "Hello, this is my second #note!",
      tags: ["#note"]
    }
  ] as INote[]
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push({
        id: id++, ...action.payload, created_at: new Date().toDateString(),
      });
    },
    removeNote(state, action){
      state.notes = state.notes.filter(note => note.id !== action.payload.id);
    },
    editNote(state, action){
      const noteToEdit = state.notes.find(note => note.id === action.payload.id);
      noteToEdit!.content = action.payload.content;
      noteToEdit!.title = action.payload.title;
      noteToEdit!.tags = action.payload.tags;
    },
    addTagToFilter(state, action){
      state.filter.push(action.payload.tag);
    },
    removeTagFromFilter(state, action){
      state.filter = state.filter.filter(tag => tag !== action.payload.tag);
    }
  }
});

export default notesSlice.reducer;
export const { addNote, removeNote,editNote, addTagToFilter, removeTagFromFilter } = notesSlice.actions;