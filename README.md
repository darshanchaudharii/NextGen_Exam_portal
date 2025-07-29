# 📘 NextGen Intelligent Exam & Assessment Platform
An AI‑powered, full‑stack web application designed for secure, scalable, and adaptive online examinations. Built using **Java Spring Boot** for the backend and **Angular** for the frontend, this platform supports real-time analytics, dynamic question generation, and role-based access control.

---

## 🚀 Features

- 🔐 Secure login & role-based access (JWT + Spring Security)
- 🧠 Adaptive testing engine with real-time difficulty adjustment
- 🧾 Exam creation, scheduling, submission, and auto-evaluation
- 📷 Basic webcam proctoring & browser activity logging
- 📊 Analytics dashboard (Chart.js) with user & question stats
- 📁 Support for MCQs, descriptive, and coding questions
- 🔄 RESTful APIs with proper error handling & validation
- 🐳 Dockerized deployment with CI/CD (Jenkins & Kubernetes)

---

## 🛠️ Tech Stack

### Backend:
- Java 17, Spring Boot, Spring Security, Spring Data JPA
- Hibernate, MySQL, JWT Authentication
- JUnit, Maven, Postman

### Frontend:
- Angular 17+, TypeScript, RxJS, HTML, CSS
- Chart.js, Bootstrap (optional)

  ## 🧩 API Documentation

All backend endpoints are exposed as RESTful APIs.  
For full documentation, refer to: `/docs/api-spec.yaml` or use Postman Collection in `/docs/postman_collection.json`.

Example:
- `POST /api/auth/login` – Login with JWT
- `GET /api/exams/{id}` – Fetch exam details
- `POST /api/results` – Submit answers


### DevOps:
- Git & GitHub
- Docker, Kubernetes
- Jenkins (CI/CD Pipeline)

  ## 📝 License  
This project is open-source and available under the [MIT License](LICENSE).

## 🙌 Acknowledgments  
Special thanks to the open-source community and contributors of **Spring Boot**, **Angular**, and **Chart.js** for their powerful frameworks and continuous support.


