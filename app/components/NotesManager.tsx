import { useState } from "react";

import NoteEditor from "./NoteEditor";
import NotesList from "./NotesList";
import { mockNotes } from "./mockNotes";

// All tilstand (state) skal være her i denne "container" componenten,
// som er på toppen av komponenttreet.
// Komponentene NotesList og NoteEditor er barn.
// Denne komponenten er forelder/parent.

// Logikk for å opprette et nytt notat, og endre et eksisterende notat,
// skal også være her, ved siden av tilstanden.
// State og tilhørende logic hører sammen i en container komponent.

export default function NotesManager() {
  // Initialize notes state with mock notes
  const [notes, setNotes] = useState(mockNotes);
  const [selectedNoteId, setSelectedNoteId] = useState<number | undefined>();

  function handleUpdateNote(
    noteId: number,
    noteTitle?: string,
    noteContent?: string
  ) {}

  return (
    <section>
      {/* <NotesList />
      <NoteEditor /> */}

      <NotesList
        notes={notes}
        onNoteSelect={(noteId) => setSelectedNoteId(noteId)}
      />

      <NoteEditor
        selectedNote={notes.find((note) => note.id === selectedNoteId)}
      />
    </section>
  );
}
