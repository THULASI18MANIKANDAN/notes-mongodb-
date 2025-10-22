
import React from 'react';
import { Note } from '../types';
import { EditIcon, TrashIcon } from './Icons';

interface NoteCardProps {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="p-5 flex-grow">
                <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">{note.title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-wrap flex-grow">{note.content.substring(0, 120)}{note.content.length > 120 ? '...' : ''}</p>
            </div>
            <div className="border-t border-gray-100 p-3 bg-gray-50 rounded-b-lg flex justify-between items-center">
                <p className="text-xs text-gray-400">
                    Updated: {formatDate(note.updatedAt)}
                </p>
                <div className="flex space-x-2">
                    <button onClick={onEdit} className="text-gray-400 hover:text-indigo-600 transition-colors p-1.5 rounded-full hover:bg-indigo-100">
                        <EditIcon className="w-5 h-5" />
                    </button>
                    <button onClick={onDelete} className="text-gray-400 hover:text-red-600 transition-colors p-1.5 rounded-full hover:bg-red-100">
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
