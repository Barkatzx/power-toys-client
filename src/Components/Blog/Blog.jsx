import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=" bg-gray-100 rounded-2xl shadow-2xl p-9 mx-auto container mt-5">
          <h4 className="text-gray-700 font-bold mb-3 lg:text-xl text-lg mt-8">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
          <p className="text-gray-500 mx-2 lg:mx-5"> Access tokens and refresh tokens are commonly used in authentication and authorization systems. Here's an explanation of what they are and how they work:

Access Token:

An access token is a credential that is issued to a client (such as a web or mobile application) after successful authentication.
It is used to authorize and grant access to protected resources or APIs on the server.
Access tokens are typically short-lived and have an expiration time.
They are included in the headers or requests to the server to authenticate the client and allow access to protected resources.
Refresh Token:

A refresh token is a long-lived credential that is also issued to a client after successful authentication.
It is used to obtain a new access token when the current access token expires or becomes invalid.
Refresh tokens are securely stored on the client-side and are typically sent to the server along with a token refresh request.
Unlike access tokens, refresh tokens are not meant to be sent with every request to the server. They are only used to obtain a new access token when needed.

          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            2. Compare SQL and NoSQL databases?
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5">SQL (Structured Query Language) and NoSQL (Not only SQL) are two different types of database management systems with distinct characteristics. Here's a comparison between SQL and NoSQL databases:

SQL Databases:

Structure: SQL databases are based on a structured schema, which defines the tables, columns, and relationships between data entities. They follow a rigid structure.
Data Model: SQL databases use a relational data model, where data is organized into tables with predefined schemas. Relationships between tables are established using keys.

NoSQL Databases:

Structure: NoSQL databases have a flexible schema, allowing for dynamic and unstructured data. They can handle varying data formats and structures without predefined schemas.
Data Model: NoSQL databases use various data models like key-value, document, columnar, or gra
          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            3. What is express js? What is Nest JS
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5">Express.js and NestJS are both web application frameworks for Node.js, but they have different features and approaches.

Express.js:
Express.js is a minimalist and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and APIs. Here are some key points about Express.js:
Lightweight: Express.js is a lightweight framework that focuses on simplicity and minimalism. It provides the essential features for building web applications without imposing too many conventions or constraints.
Middleware: Express.js uses middleware functions to handle requests and responses. Middleware functions can perform various tasks such as logging, parsing request bodies, authenticating users, and more.
Routing: Express.js has a routing mechanism that allows you to define routes for handling different HTTP methods and URLs. You can define handlers for specific routes to handle requests and send responses.
Ecosystem: Express.js has a large and active ecosystem with numerous third-party libraries and plugins available. This makes it easy to extend the functionality of your Express.js applications.
Flexibility: Express.js gives you the flexibility to structure your application and choose the tools and libraries you want to use. It allows you to customize and configure your application based on your specific needs.
NestJS:
NestJS is a progressive, opinionated, and TypeScript-based web application framework for Node.js. It is built with a focus on scalability, modularity, and developer productivity. Here are some key points about NestJS:
TypeScript: NestJS is built with TypeScript, which brings strong typing and advanced features to JavaScript. It enables better tooling, error checking, and code maintainability.
Dependency Injection: NestJS uses dependency injection to manage the application's components and their dependencies. This promotes modular and reusable code, making it easier to test and maintain.
Decorators and Metadata: NestJS leverages decorators and metadata to define and configure various aspects of the application, such as controllers, modules, routes, and middleware.
Modules and Providers: NestJS organizes the application into modules, which encapsulate related functionality. Modules consist of providers, which are responsible for creating instances of classes that can be injected into other components.
Opinionated Structure: NestJS follows a prescribed structure and design patterns, making it easier to navigate and understand the application's codebase. It encourages separation of concerns and modularity.
          </p>
          <h4 className="text-gray-700 font-bold mb-3 text-lg lg:text-xl pt-5">
            4. What is MongoDB aggregate and how does it work?
          </h4>
          <p className="text-gray-500 mx-2 lg:mx-5 pb-16">MongoDB's aggregate is a powerful method used for performing advanced data analysis and manipulation operations on MongoDB collections. It allows you to process and transform data within the database server itself, providing flexibility and efficiency for complex data operations.

The aggregate method in MongoDB works by accepting an array of stages as its argument. Each stage represents a specific operation or transformation that will be applied to the documents in the collection. These stages are processed sequentially, with the output of one stage serving as the input for the next stage.
          </p>
        </div>
      </div>
    );
};

export default Blog;