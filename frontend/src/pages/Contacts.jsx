import React, { useState, useCallback, useEffect } from "react";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../services/api";

export default function Contacts({ token }) {
  const [contacts, setContacts] = useState([]);
  const [msg, setMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [editingId, setEditingId] = useState("");

  const fetchContacts = useCallback(async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (e) {
      setMsg("Erreur de chargement");
    }
  }, []);

  useEffect(() => {
    if (token) fetchContacts();
  }, [token, fetchContacts]);

  return (
    <div>
      <h2>Mes contacts</h2>
      {msg && <div>{msg}</div>}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            if (editingId) {
              await updateContact(editingId, { firstName, lastName, phone });
            } else {
              await createContact({ firstName, lastName, phone });
            }
            setFirstName("");
            setLastName("");
            setPhone("");
            setEditingId("");
            fetchContacts();
          } catch (err) {
            setMsg(err.message || "Erreur de sauvegarde");
          }
        }}
      >
        <h3>{editingId ? "Modifier" : "Ajouter"} un contact</h3>
        <input
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">{editingId ? "Mettre à jour" : "Ajouter"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId("");
              setFirstName("");
              setLastName("");
              setPhone("");
            }}
          >
            Annuler
          </button>
        )}
      </form>
      <ul>
        {contacts.map((c) => (
          <li key={c._id}>
            {c.firstName} {c.lastName} ({c.phone})
            <button
              onClick={() => {
                setEditingId(c._id);
                setFirstName(c.firstName);
                setLastName(c.lastName);
                setPhone(c.phone);
              }}
            >
              Éditer
            </button>
            <button
              onClick={async () => {
                if (!window.confirm("Supprimer ce contact ?")) return;
                try {
                  await deleteContact(c._id);
                  fetchContacts();
                } catch (e) {
                  setMsg("Suppression échouée");
                }
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
