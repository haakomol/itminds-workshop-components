import { Note } from "./interfaces/note";

interface Props {
  selectedNote?: Note;
  onNoteUpdate: (
    noteId: string,
    noteTitle?: string,
    noteContent?: string
  ) => void;
  onNoteCreate: (noteTitle: string, noteContent: string) => void;
}

export default function NoteEditor({
  selectedNote,
  onNoteUpdate,
  onNoteCreate,
}: Props) {
  // Let user edit or create notes with two text fields and a button
  // If selectedNote is undefined, we are creating a new note

  return <div></div>;
}
