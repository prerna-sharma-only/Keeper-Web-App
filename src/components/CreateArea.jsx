
import React, { useState } from "react";
import { Plus } from "lucide-react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    if (!note.title.trim() && !note.content.trim()) {
      return;
    }

    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });

    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={function () {
            setExpanded(true);
          }}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {isExpanded && (
          <button type="submit" aria-label="Add note">
            <Plus size={24} />
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
