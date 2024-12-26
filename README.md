
# SQLC Admin Panel

Welcome to the SQLC Admin Panel! This project is designed to provide an intuitive, React-based interface for managing your SQLC-generated database via an admin panel similar to Django's admin interface. It enables you to view, insert, update, and delete records from your tables with ease.

## Features

- Table Management: View all tables in your database, along with their schema and data.
- CRUD Operations: Easily create, read, update, and delete records.
- Responsive Design: Accessible from both desktop and mobile devices.
## Technologies Used

- React
- SQLC
- Express (optional, for backend API)
- PostgreSQL (or other supported databases)
- CSS (for styling)
## Prerequisites

- Node.js and npm installed on your machine.
- A running PostgreSQL (or another supported) database instance.
- SQLC installed and configured for your database.
## Getting Started

To get a local copy of the project up and running, follow these steps:

### Clone the Repository
```bash
git clone https://github.com/MAQilH/sqlc-admin-panel.git
cd sqlc-admin-panel
```
### Install Dependencies
```bash
npm install
```
### Configure the Database
Make sure your SQLC is configured properly to connect to your database. Check sqlc.json for connection details. You may need to set up SQL queries and handlers if not already done.

### Run the Application
Start the development server:

```bash
npm start
```
The app will be available at http://localhost:5173.

### Building for Production
To build the app for production, run:

```bash
npm run build
```
This will bundle the app, optimizing it for production usage.

## Usage

1. View Tables: By accessing the home route, you can see a list of all available tables.
2. Insert New Record: Navigate to the desired table and click on "Add New Record" to insert data.
3. Edit Records: Click on a record to edit its fields directly.
4. Delete Records: Use the delete button next to each record to remove it from the database.
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions, feel free to reach out via the Issues tab in the repository.
