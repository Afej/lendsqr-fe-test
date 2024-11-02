# LENDSQR FRONTEND ENGINEERING TEST

This is a project created for the Lendsqr-Frontend test interview.

Setup Instructions

1. Clone the Repository:
   git clone <https://github.com/Afej/lendsqr-fe-test.git>

2. Install Dependencies:
   Make sure you have Node.js and npm/yarn installed. Then run: npm install

3. Run the Development Server:
   npm run dev

This will start the development server at http://localhost:5173.

## HOW TO TEST

1. The index page redirects to the login page.

   The login page is the entry point to the app. Users need to enter valid credentials to access the dashboard.

   Mock details below and on the login page:

   ```
   Username: lendsqr@gmail.com
   Password: password123
   ```

2. After successful login, the user is redirected to the dashboard.

   The dashboard has only 1 active path (users) so that is set as the index path for all dashboard routes for testing purposes.
   You can simply configure the dashboard routes in the App.tsx file.
   Dashboard routes are also protected.

3. On the users page, you can see a list of users fetched from the Mock API.

   The users data is saved to local storage to easily retrieve user details on the user details page.

   To view a user's details, click on the "Options" button and view details option which navigates to the user details page.

### Technologies Used

1. React(Vite)
2. Typescript
3. SCSS for styling
4. React Router Dom for Routing
5. React Query
6. Zod for form validation
7. React paginate & React-Spinners for pagination and loading state.
