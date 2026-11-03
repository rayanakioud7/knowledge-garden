# SDID Academic Portal (Full Stack)

A secure, role-based academic management system designed for the **Licence of Science and Techniques (LST) - Science de Données et Informatique Décisionnelle (SDID)** program. This platform facilitates interaction between Students, Professors, and Administrators with a modern "Cyber-Moroccan" UI.

![Project Status](https://img.shields.io/badge/Status-In%20Development-orange)
![Tech Stack](https://img.shields.io/badge/Stack-Spring%20Boot%20%2B%20React-blue)

## Authors
* **Rayan Akioud** - [GitHub Profile](https://github.com/rayanakioud7)
* **Mohammed Sabri** - [GitHub Profile](https://github.com/MohammeedSabri)
* **Anas Joundy**

## Overview
The **SDID Portal** is a centralized Learning Management System (LMS) designed specifically for Data Science students and professors. It bridges the gap between academic management and modern UX, featuring a unique "Cyber-Moroccan" aesthetic that blends traditional Zellij patterns with futuristic glassmorphism and real-time backend synchronization.

## Key Features

### Security & Roles
* **Gatekeeper System:** New registrations are "Pending" until approved by an Admin.
* **Role-Based Access:**
    * **Admin:** Approve/Ban users, promote Students to Instructors.
    * **Instructor:** Create courses, manage grades.
    * **Student:** View modules, submit assignments.
* **Secure Auth:** BCrypt password hashing & robust JWT-ready architecture.

### Student Experience
* **Module Explorer:** Dedicated view for accessing all registered courses and academic materials.
* **Submission Engine:** Clean interface for uploading projects and tracking assignment status in real-time.
* **Grade Analytics:** Visual feedback loops showing grade percentages and detailed instructor comments.

* **Personalized Profile:** Real-time synchronization of academic stats, including average grades and earned credits.

### Instructor Management
* **Grading Cockpit:** A specialized dashboard for reviewing student submissions, providing feedback, and assigning grades.
* **Course Creator:** Dynamic tool for initializing new modules with technical codes and syllabus descriptions.
* **Class Stream:** Real-time announcement and discussion system for direct interaction with students.

### Frontend (React + Tailwind)
* **Cyber-Moroccan Aesthetic:** A unique blend of futuristic UI with traditional Zellige patterns.
* **Responsive Design:** Built with Tailwind CSS for seamless mobile/desktop experience.
* **Real-Time Dashboard:** Instant status updates without page reloads.

### Backend (Spring Boot)
* **RESTful API:** Clean architecture with Controllers, Services, and Repositories.
* **Data Integrity:** Strict validation (Email regex, Password length) handled globally.
* **Database:** MySQL relational schema with foreign key constraints.

### Tech Stack
* **Frontend:** React 18 (Vite), Tailwind CSS, React Router DOM.

* **Backend:** Spring Boot 5 (Java 17), Spring Data JPA.

* **Database:** MySQL 8 with relational schema constraints.

* **Tools:** Git, Maven, npm.

## Getting Started

### Prerequisites
* Java 17+
* Node.js & npm
* MySQL Server

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/rayanakioud7/SDID-portal-fullstack.git](https://github.com/rayanakioud7/SDID-portal-fullstack.git)
    ```

2.  **Setup Backend**
    * Open `Backend/src/main/resources/application.properties` and update your MySQL credentials.
    * Run the Spring Boot application `mvn spring-boot:run`.

3.  **Setup Frontend**
    ```bash
    cd Frontend
    npm install
    npm run dev
    ```

---
*Built by Rayan Akioud, Mohammed Sabri and Anas Joundy - SDID Students 2026*

