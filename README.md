# Advanced Notepad

A simple and lightweight note-taking application built with **React and TypeScript**, designed to provide an easy and clean interface for creating and managing notes.

The project was built primarily to strengthen frontend development skills, improve UI design and component usage, and gain practical experience working with browser-based data persistence using **Local Storage**.

## 🚀 Project Overview

Advanced Notepad allows users to easily create, view, edit, and delete notes through a simple and intuitive interface.

The application focuses on keeping the user experience clean and straightforward while providing the essential functionality required for managing personal notes.

All note data is stored in the browser using **Local Storage**, so the data remains available even after refreshing or reopening the application.

## ✨ Features

* 📝 Create new notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 🔍 Search notes by title
* 🏷️ Add and manage tags
* 🔎 Filter notes using tags
* 📄 Markdown support for note content
* 💾 Persistent data using Local Storage
* 📱 Responsive and simple user interface
* 🔗 Client-side navigation using React Router

## 🛠️ Technologies Used

### Frontend

* **React**
* **TypeScript**
* **React Router**
* **React Bootstrap**
* **React Select**
* **React Markdown**
* **CSS Modules**

### Data Storage

* **Browser Local Storage**

No backend or external database is required for this project.

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── NoteList.tsx
│   ├── NoteCard.tsx
│   ├── NoteForm.tsx
│   └── ...
│
├── App.tsx
├── main.tsx
└── ...
```

The application is organized around reusable React components, with TypeScript used to provide type safety throughout the application.

## 💾 Data Persistence

The application uses the browser's **Local Storage API** to persist notes.

Instead of requiring a backend server or database, notes are stored directly in the user's browser.

The general flow is:

```text
User creates/edits note
        ↓
React State
        ↓
Local Storage
        ↓
Application reload
        ↓
Notes restored from Local Storage
```

This makes the project lightweight and easy to run without any backend infrastructure.

## 🎨 UI Design

The interface is intentionally kept **simple, clean, and easy to use**.

**React Bootstrap** components are used to simplify UI development and maintain a responsive layout without having to build every UI element from scratch.

The project also uses **CSS Modules** where custom styling is required.

## 🎯 Purpose of the Project

The main purpose of this project was to improve practical frontend development skills by building a complete application rather than focusing only on individual concepts.

The project provided hands-on experience with:

* React component development
* TypeScript type definitions
* React state management
* React hooks
* React Router
* Form handling
* Reusable components
* UI design and responsive layouts
* Local Storage
* Markdown rendering
* Filtering and searching data
* Managing relationships between notes and tags

## 📚 What I Learned

While building this project, I focused on understanding not only **how** to implement a feature, but also **why** it is needed and where it should be used.

This project helped me strengthen my understanding of frontend architecture, component-based development, state management, data persistence, and user interface design.

It also provided practical experience in taking an idea from a basic concept to a working application.

## ⚙️ Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your system.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd advanced-notepad
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📌 Future Improvements

Possible improvements for future versions include:

* AI-powered writing assistance
* Grammar and spelling suggestions
* AI-powered summarization
* Semantic note search
* Richer Markdown editing
* Cloud-based synchronization
* User authentication
* Backend and database integration
* Note sharing and collaboration

## 👨‍💻 Author

**Adithyan**

This project was built as part of my continuous learning journey in software development, with a focus on strengthening frontend development, UI design, and practical application-building skills.
