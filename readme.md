# DiagnoSmart

## Project Overview

DiagnoSmart project aims to revolutionize laboratory medicine through the use of artificial intelligence (AI) and machine learning (ML). By enhancing the precision and speed of laboratory processes, the project seeks to reduce human errors, cut costs, and ultimately improve patient outcomes and satisfaction.

### Features

- **Customer Module**: Allows patients to submit samples and receive results.
- **Doctor Module**: Provides doctors with tools to analyze lab results and make informed decisions.

### Pros and Cons

#### Pros

- Enhances precision and speed of laboratory medicine.
- Reduces human errors and operational costs.
- Improves patient outcomes and satisfaction.

#### Cons

- Challenges with data quality and availability.
- Requires significant computing power.
- Issues of trust, acceptance, and the need for education.

### Technologies Used

- **Frontend**: React, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express, MongoDB
- **AI/ML Tools**: Python, R, TensorFlow, PyTorch, scikit-learn, pandas, NumPy, matplotlib, seaborn

## Project Structure

The project is structured into two main directories:

- `frontend`: Contains the frontend code built with React.
- `backend`: Contains the backend code built with Node.js and Express.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. **Clone the repository**

```bash
   git clone https://github.com/your-username/diagnosmart.git
   cd ai-medical-lab
```

2. **Install dependencies for backend**

```bash
   cd backend
   npm install
```

3. **Install dependencies for frontend**

```bash
   cd ../frontend
   npm install
```

4. **Set up environment variables**

   - Create a `.env` file in the `backend` directory and add the following:

```text
   MONGO_URI=your_mongodb_uri
   PORT=8000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLIENT_SITE_URL=http://localhost:5173
```

5. **Run the backend server**

```bash
   cd ../backend
   npm start or nodemon
```

6. **Run the frontend server**

```bash
   cd ../frontend
   npm start
```

## Usage

- Access the application at `http://localhost:5173`.
- Use the frontend interface to interact with the different modules (Customer, Doctor, Lab Assistant).
