"use client";
import { useEffect, useState } from "react";
import { Note } from "./interfaces/note";

interface Props {
  selectedNote?: Note;
  onNoteUpdate: (
    noteId: number,
    noteTitle: string,
    noteContent: string
  ) => void;
  onNoteCreate: (noteTitle: string, noteContent: string) => void;
}

export default function NoteEditor({
  selectedNote,
  onNoteUpdate,
  onNoteCreate,
}: Props) {
  // Let user edit or create notes with two text fields and a button
  // If selectedNote is null, we are creating a new note

  const [title, setTitle] = useState(selectedNote?.title ?? "");
  const [content, setContent] = useState(selectedNote?.content ?? "");

  useEffect(() => {
    setTitle(selectedNote?.title ?? "");
    setContent(selectedNote?.content ?? "");
  }, [selectedNote]);

  return (
    <div className="flex-1 flex-col">
      <label htmlFor="title">title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-1.5 text-black p-4"
      />
      <label htmlFor="content">content</label>
      <textarea
        id="content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-1.5 text-black p-4"
      />
      <button
        className="p-4 border-2 border-solid border-white cursor-pointer"
        onClick={() =>
          selectedNote
            ? onNoteUpdate(selectedNote.id, title, content)
            : onNoteCreate(title, content)
        }
      >
        {selectedNote ? "Update" : "Create"}
      </button>

      <button
        className="p-4 border-2 border-solid border-white cursor-pointer epilepsy"
        onClick={() => window.location.reload()}
      >
        UNSELECT
      </button>
    </div>
  );
}
