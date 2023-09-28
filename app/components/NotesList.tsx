import { Note } from "./interfaces/note";

interface Props {
  notes: Note[];
  onNoteSelect: (noteId: number | null) => void;
}

export default function NotesList({ notes, onNoteSelect }: Props) {
  // Vis alle notatene i en liste
  // Vis tittel for hvert notat. (Evt også starten av innholdet elns).
  // La brukeren kunne velge et notat fra listen på en eller annen måte

  return (
    <div className="flex-1 flex-col">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 border-2 border-solid border-white cursor-pointer"
          onClick={() => onNoteSelect(note.id)}
        >
          {note.title}
        </div>
      ))}
      <div
        className="p-4 mt-5 border-2 border-solid border-white cursor-pointer"
        onClick={() => onNoteSelect(null)}
      >
        Create new
      </div>
    </div>
  );
}
