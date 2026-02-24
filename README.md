# 🚀 ERP Front-End for S3

<div align="center">

**Enterprise Resource Planning Dashboard**

**A Simple, Modern, Open-Source Vite + React ERP System**

![Dashboard Preview](Readme%20Images/ui%20screen%201.png)

![Deployment Status](https://img.shields.io/badge/Status-Production-green)
![Build](https://img.shields.io/badge/Build-Vite-blue)
![Deployment](https://img.shields.io/badge/Deployment-AWS%20S3-orange)
![Infrastructure](https://img.shields.io/badge/Infrastructure-Terraform-purple)
![License](https://img.shields.io/badge/License-Open%20Source-brightgreen)

</div>

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [File Structure](#file-structure)
- [Setup & Installation](#setup--installation)
- [Development Guide](#development-guide)
- [Building for Production](#building-for-production)
- [Infrastructure with Terraform](#infrastructure-with-terraform)
- [CI/CD Pipeline - GitHub Actions](#cicd-pipeline---github-actions)
- [Deployment Screenshots](#deployment-screenshots)
- [AWS S3 Bucket Configuration](#aws-s3-bucket-configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)

---

## 🎯 Project Overview

**ERP Front-End for S3** is a **simple, modern, open-source Enterprise Resource Planning (ERP) dashboard** built with **Vite + React**. The project is fully automated with:

✅ **Simple & Modern** - Clean, minimal Vite + React application  
✅ **Complete ERP System** - 7+ modules for business management  
✅ **Cloud-Native Hosting** - AWS S3 static website hosting  
✅ **Infrastructure as Code** - Terraform for reproducible infrastructure  
✅ **Automated CI/CD** - GitHub Actions for fully automated deployments  
✅ **Professional UI/UX** - Tailwind CSS + React components  
✅ **Open Source** - Free to use, learn, and modify  
✅ **Production Ready** - Optimized builds, ESLint validation, best practices  

This project demonstrates a **complete modern development workflow** - from coding to cloud deployment - suitable for learning and production use!

---

## ✨ Key Features

### 📊 **Comprehensive ERP Dashboard**
- 7+ built-in modules for business management
- Real-time analytics and metrics
- Multiple data visualization options

### 🔄 **Automated Deployment Pipeline**
- Trigger deployment on every commit
- Automatic ESLint code quality checks
- Production-optimized builds
- Direct S3 bucket uploads
- CloudFront cache invalidation

### ☁️ **Cloud Infrastructure**
- AWS S3 for reliable hosting
- Terraform for Infrastructure as Code
- Scalable and maintainable setup
- Cost-effective deployment

### 🔧 **Developer-Friendly**
- Fast Hot Module Replacement (HMR) with Vite
- Modern React with hooks
- Tailwind CSS for rapid UI development
- Comprehensive documentation

---

## 🛠️ Technology Stack

### Frontend Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | UI framework |
| **Vite** | 7.3.1 | Build tool & dev server |
| **React Router** | 7.13.0 | Client-side routing |
| **Tailwind CSS** | 3.4.1 | Styling framework |
| **Recharts** | 3.7.0 | Data visualization |
| **Lucide React** | 0.575.0 | Icon library |
| **ESLint** | 9.39.1 | Code quality |

### DevOps & Infrastructure
| Tool | Purpose |
|------|---------|
| **Terraform** | Infrastructure as Code |
| **GitHub Actions** | CI/CD automation |
| **AWS S3** | Static hosting |
| **AWS CloudFront** | CDN & caching |

### Build Tools
| Tool | Purpose |
|------|---------|
| **Node.js & npm** | Package management |
| **PostCSS** | CSS processing |
| **Autoprefixer** | Browser compatibility |

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│           Developer Workflow (Local Machine)             │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Clone Repository → 2. Install Dependencies          │
│  3. Run Development Server (npm run dev)                 │
│  4. Make Changes → 5. Commit & Push to GitHub            │
│                                                          │
└─────────────────────────────────────────────────────────┘
                           ↓
                    GitHub Repository
                    (Version Control)
                           ↓
┌─────────────────────────────────────────────────────────┐
│         GitHub Actions CI/CD Pipeline (Automated)        │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. Trigger on: Push to main branch                      │
│  2. Build Job:                                           │
│     ├─ Checkout code                                     │
│     ├─ Setup Node.js environment                         │
│     ├─ Install dependencies (npm install)                │
│     ├─ Run ESLint checks                                 │
│     ├─ Build optimized bundle (npm run build)            │
│     └─ Upload to S3 (dist/ folder)                       │
│  3. CloudFront:                                          │
│     └─ Invalidate cache (clear CDN)                      │
│                                                          │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│              AWS Cloud Infrastructure                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────┐       │
│  │  S3 Bucket (Static Website Hosting)          │       │
│  │  - Stores dist/ folder contents              │       │
│  │  - Serves HTML, CSS, JS files                │       │
│  └──────────────────────────────────────────────┘       │
│                      ↓                                   │
│  ┌──────────────────────────────────────────────┐       │
│  │  CloudFront CDN                              │       │
│  │  - Global content delivery                   │       │
│  │  - Edge caching                              │       │
│  │  - HTTPS & security                          │       │
│  └──────────────────────────────────────────────┘       │
│                      ↓                                   │
│  Public URL: https://your-bucket.s3.amazonaws.com       │
│                                                          │
└─────────────────────────────────────────────────────────┘
                           ↓
                    End Users
              (Access ERP Application)
```

---

## 📁 File Structure

```
ERP Front-End for S3/
│
├── 📁 ERP-S3/                          # Main React application
│   ├── src/
│   │   ├── components/
│   │   │   └── Sidebar.jsx           # Navigation component
│   │   ├── pages/
│   │   │   ├── Overview.jsx          # Dashboard
│   │   │   ├── Analytics.jsx         # Analytics module
│   │   │   ├── Customers.jsx         # Customer management
│   │   │   ├── HR.jsx                # HR module
│   │   │   ├── Inventory.jsx         # Inventory module
│   │   │   ├── Orders.jsx            # Order module
│   │   │   ├── SupplyChain.jsx       # Supply chain module
│   │   │   └── Settings.jsx          # Settings module
│   │   ├── App.jsx                   # Root component
│   │   ├── main.jsx                  # Entry point
│   │   └── index.css                 # Global styles
│   │
│   ├── public/                        # Static assets
│   ├── node_modules/                  # Dependencies (generated)
│   ├── dist/                          # Production build (generated)
│   │
│   ├── 📄 package.json               # npm dependencies & scripts
│   ├── 📄 vite.config.js             # Vite configuration
│   ├── 📄 tailwind.config.js         # Tailwind CSS config
│   ├── 📄 postcss.config.js          # PostCSS config
│   ├── 📄 eslint.config.js           # ESLint rules
│   ├── 📄 index.html                 # HTML entry point
│   └── 📄 README.md                  # App-specific documentation
│
├── 📁 Terraform/                      # Infrastructure as Code
│   ├── 📄 provider.tf                # AWS provider setup
│   ├── 📄 main.tf                    # Main resources definition
│   ├── 📄 outputs.tf                 # Output values
│   ├── 📄 terraform.tfstate          # State file (versioning)
│   └── 📄 terraform.tfstate.backup   # Backup state file
│
├── 📁 .github/                        # GitHub specific
│   └── 📁 workflows/
│       └── 📄 deploy.yml             # CI/CD pipeline definition
│
├── � README.md                       # Main documentation
└── 📄 .gitignore                      # Git ignore rules

```

---

## 🚀 Setup & Installation

### Prerequisites

Before starting, ensure you have the following installed:

```bash
# Required
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Git

# For Infrastructure (Terraform)
- Terraform v1.0.0 or higher
- AWS CLI v2.0.0 or higher
- AWS Account with appropriate permissions

# Optional
- VS Code (recommended editor)
- GitHub Desktop or Git GUI
```

### Step-by-Step Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ERP-Frontend-S3.git
cd "ERP Front-End for S3"
```

#### 2️⃣ Navigate to Application Directory

```bash
cd ERP-S3
```

#### 3️⃣ Install Dependencies

```bash
npm install
```

This installs all required packages:
- React & React-DOM
- Vite
- Tailwind CSS
- Routing, charts, icons, etc.

#### 4️⃣ Verify Installation

Check Node modules are installed:
```bash
ls node_modules/
```

Should show multiple package folders.

---

## 💻 Development Guide

### Running the Development Server

```bash
npm run dev
```

This command:
- Starts Vite development server
- Enables Hot Module Replacement (HMR) for instant updates
- Opens at `http://localhost:5173` by default
- No need to refresh browser after code changes

### Development Workflow

1. **Make code changes** in any file
2. **See changes instantly** in browser (HMR)
3. **Check console** for any errors
4. **Run ESLint** to validate code quality

### Code Quality Checks

```bash
# Run ESLint validation
npm run lint
```

This checks for:
- Syntax errors
- Code style violations
- Unused imports
- Best practice violations

### Available Development Scripts

```bash
# Start development server with HMR
npm run dev

# Build production-ready optimized bundle
npm run build

# Preview the production build locally
npm run preview

# Run ESLint code quality checks
npm run lint
```

---

## 🏗️ Building for Production

### Build Process

```bash
npm run build
```

This command:

1. **Minifies & Optimizes** - Removes unused code, minifies files
2. **Tree Shaking** - Removes unused dependencies
3. **Code Splitting** - Creates efficient chunks
4. **Asset Optimization** - Compresses images & assets
5. **Source Maps** - Generates for debugging (if enabled)
6. **Output** - Creates `dist/` folder with production files

### Build Output

```
dist/
├── index.html           # Main HTML file
├── assets/
│   ├── index-XYZ.js    # JavaScript bundle
│   ├── index-XYZ.css   # CSS bundle
│   └── favicon.ico      # Favicon
└── ...                  # Other assets
```

All files in `dist/` are ready for S3 deployment.

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

Opens at `http://localhost:4173` so you can verify the production build works correctly before deploying.

---

## ☁️ Infrastructure with Terraform

### Overview

Terraform manages all AWS infrastructure needed for hosting this application. Every resource is defined as code, making infrastructure reproducible and version-controlled.

### Terraform Files

**Infrastructure Components:**
- 📄 **provider.tf** - AWS provider configuration and setup
- 📄 **main.tf** - Main AWS resources (S3, CloudFront, policies)
- 📄 **outputs.tf** - Output values for deployed resources

**Resources Managed by Terraform:**
- ✅ S3 Bucket for static website hosting
- ✅ S3 Static Website Configuration
- ✅ S3 Bucket Public Access Policy
- ✅ CloudFront Distribution (CDN)
- ✅ HTTPS/TLS Certificates
- ✅ Cache behaviors and optimization

### Terraform Workflow

#### Step 1️⃣: Initialize Terraform

```bash
cd Terraform
terraform init
```

Output:
```
Initializing the backend...
Initializing provider plugins...
Terraform has been successfully initialized!
```

![Terraform Init](Readme%20Images/Teraform%20init%20success%20page.png)

**What it does:**
- Downloads AWS provider plugin
- Creates `.terraform/` directory
- Initializes state management

#### Step 2️⃣: Plan Infrastructure

```bash
terraform plan
```

Output shows all resources that will be created:
```
Terraform will perform the following actions:

  # aws_s3_bucket.website will be created
  + resource "aws_s3_bucket" "website" {
      + bucket = "my-erp-app-bucket"
      ...
    }

Plan: 5 to add, 0 to change, 0 to destroy.
```

![Terraform Plan](Readme%20Images/Teraform%20plan%20success%20page.png)

**Why use plan:**
- Review all changes before applying
- Verify AWS resources configuration
- Catch errors early
- Safe way to check impact

#### Step 3️⃣: Apply Configuration

```bash
terraform apply
```

Type `yes` when prompted to proceed.

Output:
```
aws_s3_bucket.website: Creating...
aws_s3_bucket.website: Creation complete after 5s [id=my-erp-app-bucket]
aws_s3_bucket_website_configuration.website: Creating...

Apply complete! Resources: 5 added, 0 changed, 0 destroyed.

Outputs:
s3_bucket_name = "my-erp-app-bucket"
cloudfront_domain_name = "d123456789.cloudfront.net"
```

![Terraform Apply](Readme%20Images/Terraform%20apply%20success%20page.png)

**What it does:**
- Creates all AWS resources
- Saves state to `terraform.tfstate`
- Outputs resource endpoints
- Ready for deployment!

### Terraform State Management

⚠️ **Important:** 

- **`terraform.tfstate`** - Contains resource state (keep safe!)
- **`.gitignore`** - Ensure tfstate is NOT committed
- **Backup** - terraform.tfstate.backup is created automatically
- **Remote State** - Consider AWS S3 backend for team collaboration

```bash
# View current state
terraform show

# Destroy infrastructure (careful!)
terraform destroy
```

---

## 🔄 CI/CD Pipeline - GitHub Actions

### Overview

GitHub Actions automatically:
1. Builds the React application
2. Validates code quality
3. Uploads to S3 bucket
4. Invalidates CloudFront cache
5. Makes new version live instantly

### Workflow File Location

`.github/workflows/deploy.yml`

### Workflow Configuration

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

env:
  AWS_REGION: us-east-1
  S3_BUCKET_NAME: my-erp-app-bucket
  CLOUDFRONT_DISTRIBUTION_ID: E123456789ABC

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      # Step 1: Checkout code
      - name: Checkout Repository
        uses: actions/checkout@v3
      
      # Step 2: Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'
          cache: 'npm'
      
      # Step 3: Install dependencies
      - name: Install Dependencies
        working-directory: ./ERP-S3
        run: npm ci
      
      # Step 4: Run ESLint
      - name: Run ESLint
        working-directory: ./ERP-S3
        run: npm run lint
      
      # Step 5: Build application
      - name: Build Application
        working-directory: ./ERP-S3
        run: npm run build
      
      # Step 6: Configure AWS credentials
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ env.AWS_REGION }}
      
      # Step 7: Upload to S3
      - name: Upload to S3
        working-directory: ./ERP-S3
        run: |
          aws s3 sync dist/ s3://${{ env.S3_BUCKET_NAME }}/ \
            --delete \
            --cache-control "max-age=3600"
      
      # Step 8: Invalidate CloudFront
      - name: Invalidate CloudFront Cache
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ env.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
      
      # Step 9: Notify deployment success
      - name: Deployment Complete
        run: echo "✅ Application deployed to S3!"
```

### How to Trigger Deployment

1. **Make code changes** locally
2. **Commit and push** to main branch:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```
3. **GitHub Actions automatically:**
   - Checks code quality
   - Builds application
   - Uploads to S3
   - Clears CloudFront cache
4. **Application is live** in seconds! 🚀

### Monitoring Deployment

1. Go to repository on GitHub
2. Click **"Actions"** tab
3. Select latest workflow run
4. View build logs and status

![GitHub Actions Success](Readme%20Images/git%20hub%20action%20deploy%20success.png)

### GitHub Actions Secrets Setup

⚠️ **Required for CI/CD to work:**

1. Add AWS credentials to GitHub Secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `S3_BUCKET_NAME`
   - `CLOUDFRONT_DISTRIBUTION_ID`

2. Steps to add secrets:
   - Go to Repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add each secret with its value

---

## 📸 Deployment Screenshots

### AWS S3 Bucket View
![S3 Bucket](Readme%20Images/aws%20console%20s3%20bucket%20view.png)
Shows the S3 bucket containing all deployed application files.

### Terraform Init Success
![Terraform Init](Readme%20Images/Teraform%20init%20success%20page.png)
Initial Terraform setup with AWS provider.

### Terraform Plan Success
![Terraform Plan](Readme%20Images/Teraform%20plan%20success%20page.png)
Planning AWS resources before creation.

### Terraform Apply Success
![Terraform Apply](Readme%20Images/Terraform%20apply%20success%20page.png)
Successfully created all AWS infrastructure.

### GitHub Actions Deploy
![GitHub Actions](Readme%20Images/git%20hub%20action%20deploy%20success.png)
CI/CD pipeline automatically deploying to S3.

---

## 📱 Application Screenshots

### Dashboard Overview
![Dashboard Overview](Readme%20Images/ui%20screen%201.png)
Main dashboard with real-time business metrics and KPIs.

### Analytics Module
![Analytics Dashboard](Readme%20Images/ui%20screen%202.png)
Comprehensive analytics with charts and performance metrics.

### Customer Management
![Customer Management](Readme%20Images/ui%20screen%203.png)
Complete customer relationship and transaction management.

### Human Resources Module
![HR Management](Readme%20Images/ui%20screen%204.png)
Employee profiles, team management, and HR analytics.

### Inventory Management
![Inventory System](Readme%20Images/ui%20screen%205.png)
Real-time stock tracking and inventory analytics.

### Order Management
![Order Processing](Readme%20Images/ui%20screen%206.png)
Order processing workflow and status tracking.

### Supply Chain Module
![Supply Chain](Readme%20Images/ui%20screen%207.png)
End-to-end supply chain visibility and logistics tracking.

### Settings & Configuration
![Settings Page](Readme%20Images/ui%20screen%208.png)
System configuration, user preferences, and access control.

### Live Application on S3
![S3 Hosted Application](Readme%20Images/ui%20screen%201%20using%20s3%20bucket%20link.png)
Application running live on AWS S3 with CloudFront CDN.

---

## ☁️ AWS S3 Bucket Configuration

### S3 Bucket Setup Details

**Bucket Properties:**
- **Versioning**: Enabled (track all changes)
- **Static Website Hosting**: Enabled
- **Index Document**: index.html
- **Error Document**: index.html (for SPA routing)
- **Block Public Access**: Disabled (allow public read)
- **Bucket Policy**: Allows s3:GetObject for all

**Typical Configuration:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-erp-app-bucket/*"
    }
  ]
}
```

### CloudFront Distribution

**CDN Benefits:**
- ✅ Global edge caching
- ✅ Faster content delivery worldwide
- ✅ HTTPS/TLS encryption
- ✅ DDoS protection
- ✅ Cost reduction (S3 transfer fees)

**Distribution Configuration:**
- Origin: S3 bucket
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Allowed Methods: GET, HEAD, OPTIONS
- Caching: Optimized for dynamic content

---

## 🔐 Security Best Practices

### 1. AWS Credentials
- ✅ Use IAM users (not root account)
- ✅ Rotate access keys regularly
- ✅ Never commit credentials to Git
- ✅ Use GitHub Secrets for CI/CD

### 2. Code Security
- ✅ Run ESLint checks
- ✅ Use npm audit to check vulnerabilities
- ✅ Keep dependencies updated
- ✅ Review code before merging

### 3. Infrastructure Security
- ✅ S3 bucket versioning enabled
- ✅ Restrict public access to sensitive files
- ✅ Use CloudFront for HTTPS only
- ✅ Enable logging and monitoring

### 4. Deployment Safety
- ✅ Test builds locally first
- ✅ Plan before applying Terraform
- ✅ Use gradual rollout strategies
- ✅ Keep terraform.tfstate backups

---

## 🐛 Troubleshooting

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 5173 already in use

**Solution:**
```bash
# Use different port
npm run dev -- --port 3000

# Or kill process using port 5173
# Windows PowerShell:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5173 | xargs kill -9
```

### Issue: Build fails with ESLint errors

**Solution:**
```bash
# Check ESLint errors
npm run lint

# Auto-fix some issues
npm run lint -- --fix

# Fix configuration if needed
# Edit eslint.config.js
```

### Issue: GitHub Actions won't deploy

**Solutions:**
1. Check GitHub Secrets are set correctly
2. Verify AWS credentials have S3 access
3. Check workflow file syntax
4. View detailed logs in GitHub Actions tab

### Issue: S3 files don't update

**Solution:**
```bash
# Terraform may need explicit cache control
# Or manually invalidate CloudFront:
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Issue: Terraform state conflict

**Solution:**
```bash
# View what Terraform wants to change
terraform plan

# Only apply if changes are correct
terraform apply

# If issues persist, backup and reset
cp terraform.tfstate terraform.tfstate.backup
terraform refresh
```

---

## 📚 Additional Resources

### Documentation
- [React Official Docs](https://react.dev)
- [Vite User Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Learning Resources
- [React Router Guide](https://reactrouter.com/start)
- [AWS S3 Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BestPractices.html)
- [Terraform Best Practices](https://www.terraform.io/cloud-docs/state)

### Tools & Commands
- [AWS CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/)
- [Git Cheat Sheet](https://git-scm.com/docs)
- [npm Scripts Reference](https://docs.npmjs.com/cli/v9/using-npm/scripts)

---

## 🎓 What I Learned Building This Project

This project was an incredible learning experience that covered full-stack DevOps and modern web development:

### 🔧 Frontend Development
- ✅ **React 19** - Modern hooks, component composition, and state management
- ✅ **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- ✅ **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- ✅ **React Router** - Client-side routing for single-page applications
- ✅ **Data Visualization** - Creating charts and dashboards with Recharts

### ☁️ Cloud Infrastructure & DevOps
- ✅ **AWS S3** - Static website hosting and bucket configuration
- ✅ **CloudFront** - CDN setup for global content delivery
- ✅ **Terraform** - Infrastructure as Code (IaC) for reproducible deployments
- ✅ **AWS IAM** - Identity and access management for security

### 🔄 CI/CD & Automation
- ✅ **GitHub Actions** - Automated build and deployment pipelines
- ✅ **Workflow Automation** - Trigger deployments on code commits
- ✅ **Build Optimization** - Automated ESLint checks and production builds
- ✅ **Cache Invalidation** - CloudFront cache management in CI/CD

### 📦 Development Best Practices
- ✅ **Code Quality** - ESLint configuration and validation
- ✅ **State Management** - Terraform state versioning and backup
- ✅ **Security** - AWS credentials handling, GitHub Secrets
- ✅ **Documentation** - Professional README with architecture diagrams

### 💡 Key Takeaways
1. **End-to-End Automation** - From code commit to live production in minutes
2. **Infrastructure as Code** - Managing infrastructure like software with version control
3. **Best Practices** - Security, performance optimization, and scalability
4. **Cloud-Native Development** - Building applications designed for cloud deployment

This project successfully demonstrates the modern development workflow that enterprises use for production applications! 🚀

---

## 📞 Contact & Support

### Developer Contact
- 📧 **Email:** malindaprabath876@gmail.com
- 📱 **Phone:** 0762206157

### Getting Help
- 📖 Check the [ERP-S3 Application README](ERP-S3/README.md) for app-specific docs
- 🔍 Search existing GitHub issues
- 💬 Open a new issue with details
- 📧 Contact via email for support

### Report an Issue
When reporting issues, include:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your system information (OS, Node version, etc.)
- Error messages or logs

---

We welcome contributions! Please follow these steps:

### Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Make Your Changes
1. Write clean, well-commented code
2. Follow existing code style
3. Run ESLint checks: `npm run lint`

### Commit & Push
```bash
git add .
git commit -m "Add your feature description"
git push origin feature/your-feature-name
```

### Create Pull Request
1. Go to GitHub repository
2. Click "Compare & pull request"
3. Add detailed description of changes
4. Wait for review and approval

### Code Review Checklist
- ✅ Code follows style guidelines
- ✅ Comments added for complex logic
- ✅ No console errors or warnings
- ✅ Tested locally before pushing
- ✅ ESLint passes all checks
- ✅ Build succeeds without errors

---

##  License

This project is **Open Source** and available for learning, modification, and distribution.

**You are free to:**
- ✅ Use this project for learning and educational purposes
- ✅ Fork and modify the code
- ✅ Deploy your own version
- ✅ Contribute improvements
- ✅ Share with others

**Attribution:**
Please give credit to the original creator: **Malinda Prabath** (malindaprabath876@gmail.com)

---

## 🎯 Quick Reference

### Most Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run lint             # Check code quality

# Production
npm run build            # Create optimized build
npm run preview          # Test production build

# Infrastructure
cd Terraform
terraform init           # Initialize Terraform
terraform plan           # Preview changes
terraform apply          # Create AWS resources
terraform destroy        # Delete AWS resources

# Deployment
git push origin main     # Trigger GitHub Actions deploy
```

---

<div align="center">

### 🚀 Ready to Deploy?

**Complete Your Setup:**
1. ✅ Clone repository
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Setup Terraform infrastructure
5. ✅ Configure GitHub Secrets
6. ✅ Push to main branch
7. ✅ Watch GitHub Actions deploy!

---

**ERP Front-End for S3** | Modern Vite + React | Cloud-Native Deployment

Built with 💻 for Enterprise | Deployed to ☁️ AWS S3

Last Updated: February 2026

</div>
