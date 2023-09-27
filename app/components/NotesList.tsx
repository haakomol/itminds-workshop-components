import { Note } from "./interfaces/note";

interface Props {
  notes: Note[];
  onNoteSelect: (noteId: number) => void;
}

export default function NotesList({}: Props) {
  // Vis alle notatene i en liste
  // Vis tittel for hvert notat. (Evt også starten av innholdet elns).
  // La brukeren kunne velge et notat fra listen på en eller annen måte

  return <div></div>;
}
