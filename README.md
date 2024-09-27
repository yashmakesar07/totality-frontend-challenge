# Property Rental Platform

## Overview
This project is a property rental platform built using React. It allows users to browse available properties, add them to a cart, and proceed to a checkout process to finalize their bookings. The application incorporates responsive design principles, ensuring an optimal user experience across different devices.

## Tech Stack
- **Frontend:** 
  - **React:** A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
  - **Redux Toolkit:** A state management tool to manage the global state of the application efficiently.
  - **Ant Design:** A UI design language and React UI library that provides a set of high-quality components.
  - **Axios:** For making HTTP requests to fetch data.
  - **React Router DOM:** For routing and navigation within the application.
  - **Tailwind CSS:** A utility-first CSS framework for styling the application, allowing for rapid UI development.

- **Backend:**
  - **JSON File:** Used to store property data and simulate backend functionality.

- **Deployment:**
  - **AWS Amplify:** Used for hosting the application with features such as continuous deployment from the Git repository.
  - **Vercel:** Used for frontend hosting, ensuring fast performance and easy integration with serverless functions.

## Live Links
- **Vercel Deployment:** [Property Rental Platform on Vercel](https://totality-frontend-challenge-blush.vercel.app/)
- **AWS Amplify Deployment:** [Property Rental Platform on AWS Amplify](https://main.d7qk2k42is6wz.amplifyapp.com/)

## Features
- **Property Listings:** Users can browse various properties with details such as price, location, and amenities.
- **Search & Filter:** Users can filter properties based on location, price range, bedrooms, and amenities.
- **Cart Functionality:** Users can add properties to a cart and view the total cost.
- **Checkout Process:** Users can enter booking details and payment information to complete their reservations.
- **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.

## Approach
1. **Project Setup:**
   - Created a new React application using Create React App.
   - Set up Redux Toolkit for state management, allowing for an organized approach to handle application state.

2. **Component Structure:**
   - Developed reusable components for the application, such as `PropertyCard`, `Cart`, and `CheckoutForm`, to maintain a clean and modular codebase.
   - Utilized Ant Design components for the UI, enhancing the visual appeal and usability of the application.

3. **State Management:**
   - Implemented Redux for managing the state of properties, cart items, and user filters.
   - Created asynchronous actions to fetch properties from a JSON file and handle loading states.

4. **Routing:**
   - Used React Router to manage navigation between different pages, including the home page, property details, cart, and checkout.

5. **Styling:**
   - Applied Tailwind CSS for styling components, focusing on utility classes for rapid UI development and ensuring responsiveness.

6. **Deployment:**
   - Deployed the application on AWS Amplify and Vercel, enabling easy updates and continuous integration.

## Additional Notes
- Ensure that the `data.json` file is placed in the `public/data` directory for proper access.
- The application is currently a single-page application (SPA) and does not include a backend server. For production use, consider implementing a backend solution for data persistence.
- Future enhancements may include integrating real payment processing, user authentication, and additional features like property reviews.

## How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd property-rental-platform

 2. Run project  
```bash
   npm install
   npm run preview
