# Multi-Step Form Application

![License](https://img.shields.io/badge/license-MIT-green)

### Overview

This application is a modern React-based web application designed to provide a seamless user experience through a multi-step form integrated with a stepper component. It facilitates the streamlined addition and management of machine services, allowing users to:

- Select various machine types for services.
- Input and manage their address information seamlessly.
- Leverage a user-friendly interface for a simplified service request process.

Under the hood, the application utilizes MongoDB for robust and scalable data storage, ensuring efficient data handling. The development leverages contemporary web development practices to offer an application that is both functional and adherent to industry standards.

### Technologies Used

#### Frontend

The frontend of the application is built using a variety of modern technologies and libraries to create a responsive and dynamic user interface. Here are the key technologies used:

- **[React](https://reactjs.org/)**: A JavaScript library utilized for building the user interface and managing the UI components of the application.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)**: Employed for handling routing in the React application, ensuring a seamless navigational experience.
- **[Apollo Client](https://www.apollographql.com/docs/react/)**: Integrated to manage both local and remote data with GraphQL, facilitating state management in the JavaScript environment.
- **[GraphQL](https://graphql.org/)**: A query language for APIs, allowing for more efficient and powerful data retrieval.
- **[JWT Decode](https://www.npmjs.com/package/jwt-decode)**: Utilized for decoding JWT tokens, aiding in the secure handling of authentication processes.
- **[Web Vitals](https://web.dev/vitals/)**: An initiative to provide unified guidance for quality signals essential to delivering a great user experience on the web.

#### Backend

The backend of the application is structured around a Node.js environment, leveraging the following technologies to create a secure and efficient server:

- **[Express](https://expressjs.com/)**: A minimalistic Node.js framework used to build the server for handling HTTP requests and responses.
- **[Apollo Server Express](https://www.apollographql.com/docs/apollo-server/v1/servers/express/)**: An integration that combines the Apollo server with the Express framework, enhancing GraphQL API development.
- **[GraphQL](https://graphql.org/)**: Employed to build a flexible and efficient API, facilitating precise data retrieval on the client side.
- **[Mongoose](https://mongoosejs.com/)**: A MongoDB object modeling tool to manage data in a NoSQL database efficiently.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**: Utilized to secure user passwords through hashing, enhancing application security.
- **[JSON Web Token (JWT)](https://jwt.io/)**: Employed for secure transmission of information between parties as a JSON object.

### Getting Started

#### Prerequisites

Before setting up the development environment, ensure you have the following software installed:
- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

#### Installation

1. Clone the repository to your local machine using the following command:
   
    ```sh
    git clone https://github.com/your-github-username/your-repository-name.git
    ```
   
2. Navigate to the project directory:

    ```sh
    cd your-repository-name
    ```

3. Install the necessary npm packages for both the client and server by running the following commands in the project root directory:

    ```sh
    cd client && npm install
    cd ../server && npm install
    ```

4. Create a `.env` file in the server directory with the necessary environment variables. Refer to `.env.example` (if available) for the required variables.

5. Start the development servers for both the client and the server using the following commands:

    ```sh
    # In the server directory
    npm run start

    # In a new terminal, in the client directory
    npm run start
    ```

    The React application will be accessible at [http://localhost:3000](http://localhost:3000), and the backend server will be running at [http://localhost:4000](http://localhost:4000) (or other port if configured differently).

### Scripts

#### Client

- **start**: Start the development server (`npm run start`).
- **build**: Build the app for production (`npm run build`).
- **test**: Run the tests (`npm run test`).
- **eject**: Remove the single build dependency from your project (`npm run eject`).

#### Server

- **start**: Start the server (`npm run start`).
- **watch**: Start the server with Nodemon for automatic restarts during development (`npm run watch`).
- **seed**: Seed the database with initial data (`npm run seed`).

### Project Structure

A brief overview of the important directories and files in the project:

- **client/**
  - **src/**: Contains the source files for the frontend of the application.
  - **public/**: Holds the static files for the frontend.
- **server/**
  - **models/**: Defines the Mongoose models for MongoDB.
  - **schemas/**: Contains the GraphQL schemas for the API.
  - **server.js**: The main entry point for the server.

### Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) (if available) to get started.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
