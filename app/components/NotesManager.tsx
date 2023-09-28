"use client";
import { useState } from "react";

import NoteEditor from "./NoteEditor";
import NotesList from "./NotesList";
import { mockNotes } from "./mockNotes";
import { Note } from "./interfaces/note";

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
  const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);

  const [showState, setShowState] = useState(false);

  function handleUpdateNote(
    noteId: number,
    noteTitle: string,
    noteContent: string
  ) {
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => note.id === noteId);
    newNotes[noteIndex] = {
      id: noteId,
      title: noteTitle,
      content: noteContent,
    };
    setNotes(newNotes);
  }

  function onNoteCreate(noteTitle: string, noteContent: string) {
    const newNotes = [...notes];
    const newNote: Note = {
      id: notes[notes.length - 1].id + 1,
      title: noteTitle,
      content: noteContent,
    };
    newNotes.push(newNote);
    setNotes(newNotes);
  }

  return (
    <section>
      <section
        className="flex gap-3"
        style={{ fontFamily: "Comic Sans MS, Sans-Serif" }}
      >
        <NotesList
          notes={notes}
          onNoteSelect={(noteId) => setSelectedNoteId(noteId)}
        />

        <NoteEditor
          selectedNote={notes.find((note) => note.id === selectedNoteId)}
          onNoteCreate={onNoteCreate}
          onNoteUpdate={handleUpdateNote}
        />
      </section>

      <input
        id="showStateToggle"
        type="checkbox"
        className="mt-5"
        checked={showState}
        onChange={() => setShowState((value) => !value)}
      />
      <label htmlFor="showStateToggle">Show state</label>

      {showState && (
        <section>
          <pre>selectedNoteId: {JSON.stringify(selectedNoteId, null, 2)}</pre>
          <pre>notes: {JSON.stringify(notes, null, 2)}</pre>
        </section>
      )}
    </section>
  );
}
