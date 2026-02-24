# 📊 ERP Dashboard Application

<div align="center">

**A Modern, Professional Enterprise Resource Planning (ERP) Dashboard**

Built with React & Vite | Hosted on AWS S3 | Automated Deployment

</div>

---

## 📋 Table of Contents

- [Application Overview](#application-overview)
- [Features](#features)
- [Application Screenshots](#application-screenshots)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Support](#support)

---

## 🎯 Application Overview

This is the **Frontend Application** for the ERP system - a comprehensive, modern Enterprise Resource Planning dashboard built with React and Vite. The application provides real-time insights and management capabilities across multiple business domains.

**Key Capabilities:**
- 📊 Real-time analytics and dashboards
- 👥 Customer relationship management
- 🏢 Human resources management
- 📦 Inventory tracking and management
- 📋 Order processing and management
- 🔄 Supply chain visibility
- ⚙️ System configuration and settings

---

## ✨ Features

### 📊 **Dashboard & Overview**
- Real-time business metrics and KPIs
- Interactive charts and data visualization
- Executive summary dashboard
- Performance insights at a glance

### 📈 **Analytics Module**
- Customer analytics
- Sales performance metrics
- Trend analysis and forecasting
- Custom report generation

### 👥 **Customer Management**
- Complete customer database
- Customer relationship tracking
- Transaction history
- Communication logs

### 🏢 **Human Resources**
- Employee profiles and records
- Team management
- HR analytics and reports
- Performance metrics

### 📦 **Inventory Management**
- Real-time stock tracking
- Inventory analytics
- Low stock alerts
- Warehouse management

### 📋 **Order Management**
- Order processing workflow
- Order status tracking
- Order history and analytics
- Customer order details

### 🔄 **Supply Chain**
- End-to-end supply chain visibility
- Supplier management
- Logistics tracking
- Supplier performance analytics

### ⚙️ **Settings & Configuration**
- User preferences
- System configuration
- Profile management
- Access control settings

---

## 📸 Application Screenshots

### Dashboard Overview
![Dashboard Overview](../../Readme%20Images/ui%20screen%201.png)

### Analytics Dashboard
![Analytics Module](../../Readme%20Images/ui%20screen%202.png)

### Customer Management
![Customer Management](../../Readme%20Images/ui%20screen%203.png)

### Human Resources Module
![HR Management](../../Readme%20Images/ui%20screen%204.png)

### Inventory Management
![Inventory System](../../Readme%20Images/ui%20screen%205.png)

### Order Management
![Order Processing](../../Readme%20Images/ui%20screen%206.png)

### Supply Chain Module
![Supply Chain](../../Readme%20Images/ui%20screen%207.png)

### Settings & Configuration
![Settings Page](../../Readme%20Images/ui%20screen%208.png)

### Live Application on S3
![S3 Hosted Application](../../Readme%20Images/ui%20screen%201%20using%20s3%20bucket%20link.png)

---

## 🛠️ Technology Stack

### Frontend Framework
- **React** 19.2.0 - Modern UI library with hooks
- **Vite** 7.3.1 - Next-generation build tool with HMR

### Routing & State
- **React Router DOM** 7.13.0 - Client-side routing

### Styling
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **PostCSS** 8.4.35 - CSS transformations
- **Autoprefixer** 10.4.24 - CSS vendor prefixes

### UI Components & Visualization
- **Lucide React** 0.575.0 - Beautiful icon library
- **Recharts** 3.7.0 - Composable React components for charts

### Development & Quality
- **ESLint** 9.39.1 - Code quality and linting
- **Vite React Plugin** 5.1.1 - Fast refresh for development

---

## 🚀 Quick Start

### Prerequisites
```
Node.js v18.0.0 or higher
npm v9.0.0 or higher
```

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

   The application will run at: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready for S3 deployment.

---

## 📝 Available Scripts

```bash
# Start development server with Hot Module Replacement (HMR)
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint code quality checks
npm run lint
```

---

## 📁 Project Structure

```
src/
├── components/
│   └── Sidebar.jsx              # Main navigation sidebar
├── pages/
│   ├── Overview.jsx             # Main dashboard page
│   ├── Analytics.jsx            # Analytics and reports
│   ├── Customers.jsx            # Customer management
│   ├── HR.jsx                   # Human resources
│   ├── Inventory.jsx            # Inventory tracking
│   ├── Orders.jsx               # Order management
│   ├── SupplyChain.jsx          # Supply chain module
│   └── Settings.jsx             # Configuration and settings
├── App.jsx                      # Root component with routing
├── main.jsx                     # Application entry point
└── index.css                    # Global styles
```

---

## 🔧 Configuration Files

### Build & Development
- **`vite.config.js`** - Vite build configuration
- **`package.json`** - Dependencies and scripts
- **`eslint.config.js`** - Code quality rules

### Styling
- **`tailwind.config.js`** - Tailwind CSS customization
- **`postcss.config.js`** - CSS post-processing
- **`index.css`** - Global styles and theme

---

## 📤 Deployment

This application is deployed to AWS S3 as a static website. The deployment process is automated via GitHub Actions.

For detailed deployment instructions, infrastructure setup, and CI/CD configuration, see the **[Main README](../../README.md)** in the root directory.

---

## 🌐 Environment Configuration

Create a `.env` file for environment-specific settings:

```bash
VITE_APP_NAME=ERP System
VITE_API_BASE_URL=https://api.example.com
VITE_AWS_REGION=us-east-1
```

---

## 📚 Resources & Documentation

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)
- [Recharts Library](https://recharts.org)
- [Lucide Icons](https://lucide.dev)

---

## 👥 Support & Contact

For issues, questions, or feature requests regarding the frontend application, please contact the development team or create an issue in the repository.

---

<div align="center">

**Frontend Application - ERP System**

Built with React & Vite | Deployed to AWS S3

Last Updated: February 2026

</div>
