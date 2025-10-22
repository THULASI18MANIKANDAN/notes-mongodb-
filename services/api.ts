import { Note } from '../types';

const API_BASE_URL = 'http://localhost:5000/api/notes';

// A helper function to handle fetch responses and errors
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ msg: 'An unknown API error occurred' }));
    throw new Error(errorData.msg || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};


export const getNotes = async (): Promise<Note[]> => {
  console.log('API: Fetching all notes from server...');
  const response = await fetch(API_BASE_URL);
  return handleResponse<Note[]>(response);
};

export const createNote = async (noteData: { title: string; content: string }): Promise<Note> => {
  console.log('API: Creating new note on server...');
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noteData),
  });
  return handleResponse<Note>(response);
};

export const updateNote = async (id: string, updates: { title: string; content: string }): Promise<Note> => {
  console.log(`API: Updating note with id ${id} on server...`);
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
  return handleResponse<Note>(response);
};

export const deleteNote = async (id: string): Promise<{ success: boolean }> => {
  console.log(`API: Deleting note with id ${id} from server...`);
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  
  // For DELETE requests, we often care more about the status code than the body
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ msg: 'Failed to delete note' }));
    throw new Error(errorData.msg || `HTTP error! status: ${response.status}`);
  }

  // If the request was successful, resolve the promise.
  return { success: true };
};
