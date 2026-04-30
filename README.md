# Customer Management Dashboard

A full-stack web application to add, view, and delete customers.

**Stack:** React.js (Vite) · Node.js · Express · In-Memory Storage

---

## Project Structure

```
customer-dashboard/
├── client/                  # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/                  # Node.js + Express backend
    ├── index.js
    └── package.json
```

---

## How to Run Locally

**Step 1 — Start the Backend**

```bash
cd server
npm install
npm start
```

Runs at: `http://localhost:5000`

**Step 2 — Start the Frontend**

```bash
cd client
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | /customers       | Get all customers  |
| POST   | /customers       | Add a new customer |
| DELETE | /customers/:id   | Delete a customer  |

**POST body:**
```json
{ "name": "John Doe", "email": "john@example.com", "phone": "+91 98765 43210" }
```

---

## Notes

- Data is stored in memory — resets on server restart.
- Vite proxy handles `/customers` → `localhost:5000` in development, no CORS issues.
