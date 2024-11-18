# **React Project & Task Manager**

A simple project and task management application built with React, allowing users to organize projects and their associated tasks.

---

## **Features**

- 🗂 **Project Management**: 
  - Add, view, and delete projects.
- ✅ **Task Management**:
  - Add tasks to projects.
  - View tasks for the selected project.
  - Delete tasks from a project.
- 🖥 **Responsive Design**:
  - A clean, responsive UI for seamless usage across devices.

---

## **Technologies Used**

- **Frontend**: React, Tailwind CSS
- **State Management**: React's `useState`

---

## **Getting Started**

Follow these steps to set up the project locally:

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn installed

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd project-task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### **Run the App**
Start the development server:
```bash
npm start
```
or
```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## **Project Structure**

```
src/
│
├── components/
│   ├── NewProject.jsx      # Component for adding a new project
│   ├── NewTask.jsx         # Component for adding a new task
│   ├── ProjectsSidebar.jsx # Sidebar to display and select projects
│   ├── SelectedProject.jsx # Displays selected project's details
│   ├── Tasks.jsx           # Displays tasks for a project
│
├── App.jsx                 # Main application logic
├── index.js                # React DOM rendering
└── styles.css              # Global styles
```

---

## **How It Works**

1. **Add a Project**: 
   - Click "Add Project" to create a new project.
2. **Select a Project**:
   - Choose a project from the sidebar to view its tasks.
3. **Add a Task**:
   - Add tasks to the selected project.
4. **Delete Items**:
   - Delete tasks or projects as needed.

---

## **Future Enhancements**

- **LocalStorage**: Save projects and tasks locally for persistence.
- **Drag-and-Drop**: Enable task reordering.
- **Filters and Search**: Search and filter tasks across projects.
- **Backend Integration**: Store data on a server for multi-device support.

---

## **Contributing**

Contributions are welcome! Here's how you can help:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
