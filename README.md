# ERP Front-End for AWS S3

<div align="center">

![ERP Dashboard Banner](./Readme%20Images/readme-banner3.png)

</div>

<div align="center">

## Enterprise Resource Planning Dashboard 🚀

**A Production-Ready, Modern, Open-Source ERP System**  
**Built with Vite + React | Deployed on AWS S3 | Automated with Terraform & GitHub Actions**

![Deployment Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)
![Build Tool](https://img.shields.io/badge/Build-Vite%207.3.1-646CFF?style=flat-square&logo=vite)
![Frontend](https://img.shields.io/badge/Frontend-React%2019.2-61DAFB?style=flat-square&logo=react)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwindcss)
![Infrastructure](https://img.shields.io/badge/Infrastructure-AWS%20S3%20%2B%20Terraform-FF9900?style=flat-square&logo=amazon)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat-square&logo=github)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [File Structure](#file-structure)
- [Quick Start](#quick-start)
- [Development Setup](#development-setup)
- [Building & Deployment](#building--deployment)
- [Infrastructure as Code](#infrastructure-as-code)
- [CI/CD Pipeline](#cicd-pipeline)
- [AWS S3 Configuration](#aws-s3-configuration)
- [Module Overview](#module-overview)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support & License](#support--license)

---

## 🎯 Overview

**ERP Front-End for AWS S3** is a **comprehensive, production-grade Enterprise Resource Planning (ERP) dashboard** designed to demonstrate modern web development practices combined with cloud infrastructure automation. 

This project serves as both a **fully functional ERP system** and an **educational reference** for:
- Scalable React application architecture
- Cloud-native deployment strategies  
- Infrastructure automation with Terraform
- Continuous Integration & Continuous Deployment (CI/CD)
- Professional UI/UX development with Tailwind CSS

### Key Highlights

✨ **Production-Grade Application** - Ship-ready code with ESLint validation  
🚀 **Modern Tech Stack** - Latest versions of React, Vite, and tooling  
☁️ **Cloud Ready** - AWS S3 static hosting with CloudFront integration  
🏗️ **Infrastructure as Code** - Reproducible infrastructure with Terraform  
⚙️ **Fully Automated** - GitHub Actions CI/CD pipeline included  
📦 **Optimized Builds** - Code splitting, tree-shaking, and minification  
🎨 **Professional UI** - Tailwind CSS + Recharts for modern dashboards  
📚 **Well Documented** - Comprehensive guides and code comments  

---

## ✨ Key Features

### 📊 **Comprehensive ERP Dashboard**
- **7+ Business Modules** - Complete coverage of enterprise operations
- **Real-Time Analytics** - Interactive dashboards with live metrics
- **Multiple Data Visualizations** - Charts, graphs, and statistical displays
- **Responsive Design** - Works seamlessly across all devices
- **Quick Navigation** - Intuitive sidebar for module access

### 📦 **Available ERP Modules**
| Module | Purpose |
|--------|---------|
| **Overview** | Executive dashboard & KPI metrics |
| **Orders** | Order management & tracking |
| **Inventory** | Stock management & warehouse operations |
| **Customers** | Customer relationship management |
| **HR** | Human resources & payroll |
| **Supply Chain** | Supplier & logistics management |
| **Analytics** | Advanced reporting & insights |
| **Settings** | System configuration & preferences |

### 🔄 **Automated Deployment**
- ✅ Trigger builds on every commit
- ✅ Automatic code quality checks (ESLint)
- ✅ Production-optimized bundle creation
- ✅ Direct S3 bucket deployment
- ✅ CloudFront cache invalidation
- ✅ Email notifications on pipeline completion

### ☁️ **Cloud Infrastructure**
- **AWS S3** - Highly available static website hosting
- **CloudFront** - Global CDN for fast content delivery
- **Terraform** - Infrastructure as Code for consistency
- **Cost Efficient** - Minimal expenses with pay-per-use AWS pricing
- **Scalable** - Easily handle traffic spikes

### 🛡️ **Enterprise Features**
- Comprehensive error handling
- Input validation & security
- Responsive mobile-first design
- Dark mode support capability
- Accessibility compliance

---

## � Module Overview

Each ERP module provides distinct business functionality:

### 1. **Overview Dashboard** 📈
- Executive dashboard with KPI metrics
- Real-time business analytics
- Key performance indicators
- Visual data presentations

### 2. **Orders Management** 📦
- Order processing workflows
- Order status tracking
- Fulfillment management
- Sales documentation

### 3. **Inventory Management** 📦
- Stock level tracking
- Warehouse management
- Product catalog
- Inventory analytics

### 4. **Customers** 👥
- Customer profiles
- Contact information
- Transaction history
- Customer analytics

### 5. **Human Resources** 👔
- Employee management
- Team organization
- HR analytics
- Performance tracking

### 6. **Supply Chain** 🚚
- Supplier management
- Logistics tracking
- Distribution network
- Supply chain visibility

### 7. **Analytics** 📊
- Advanced reporting
- Custom dashboards
- Data insights
- Trend analysis

### 8. **Settings** ⚙️
- System configuration
- User preferences
- Access control
- Application settings

---

### Frontend Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | Modern UI library with hooks |
| **Vite** | 7.3.1 | Lightning-fast build tool & dev server |
| **React Router** | 7.13.0 | Client-side routing & navigation |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **Tailwind Forms** | 4.2.0 | Pre-styled form components |
| **Recharts** | 3.7.0 | React charting library |
| **Lucide React** | 0.575.0 | Beautiful SVG icon library |
| **PostCSS** | 8.4.35 | CSS transformation tool |
| **Autoprefixer** | 10.4.18 | Vendor prefixing utility |

### Development & Quality Tools
| Tool | Version | Purpose |
|-----|---------|---------|
| **ESLint** | 9.39.1 | Code quality & style enforcement |
| **@vitejs/plugin-react** | 5.1.1 | React integration for Vite |
| **eslint-plugin-react-hooks** | 7.0.1 | React Hooks linting rules |
| **eslint-plugin-react-refresh** | 0.4.24 | React Refresh validation |

### DevOps & Infrastructure
| Tool | Purpose | Status |
|------|---------|--------|
| **Terraform** | Infrastructure as Code (IaC) | Configured ✅ |
| **AWS S3** | Static website hosting | Deployed ✅ |
| **AWS CloudFront** | Content delivery network | Configured ✅ |
| **GitHub Actions** | CI/CD automation | Configured ✅ |
| **Git** | Version control | Integrated ✅ |

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│         Client Browser / CDN                            │
│         (Served via CloudFront)                         │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│         AWS S3 Bucket                                   │
│    (Static Website Hosting)                             │
│  - index.html, CSS, JS, Assets                          │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│         GitHub Repository                               │
│    - Source Code                                        │
│    - Terraform Configuration                            │
│    - CI/CD Pipeline (Actions)                           │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Development** → Code is developed locally with hot module replacement
2. **Version Control** → Commits to GitHub trigger GitHub Actions
3. **Build** → Vite builds optimized production bundle
4. **Quality Check** → ESLint validates code quality
5. **Deployment** → Bundle uploaded to AWS S3
6. **CDN** → CloudFront caches content globally
7. **Delivery** → Users access via CloudFront URL

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

## 🚀 Quick Start

Get the application running in 5 minutes:

```bash
# 1. Clone repository
git clone https://github.com/yourusername/ERP-Frontend-S3.git
cd "ERP Front-End for S3"

# 2. Install dependencies
cd ERP-S3
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:5173
```

---

## 📦 Development Setup

### Prerequisites

Before you begin, ensure you have:

| Requirement | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.0.0+ | JavaScript runtime |
| **npm** | 9.0.0+ | Package manager |
| **Git** | Latest | Version control |
| **VS Code** | Latest | Recommended editor |

### Installation Steps

**Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/ERP-Frontend-S3.git
cd "ERP Front-End for S3"
cd ERP-S3
```

**Step 2: Install Dependencies**
```bash
npm install
```

This installs all required packages:
- React 19.2.0 & React-DOM
- Vite 7.3.1
- Tailwind CSS 3.4.1
- React Router, Recharts, Lucide icons
- Development tools (ESLint, etc.)

**Step 3: Verify Installation**
```bash
npm list react vite
```

Both should show their installed versions.

### Running Development Server

```bash
npm run dev
### Running Development Server

Start the development server with instant hot reload:

```bash
npm run dev
```

**What happens:**
- Vite dev server starts at `http://localhost:5173`
- Hot Module Replacement enabled (instant updates on save)
- Press `q` to quit the server
- Check console for errors

### Development Workflow

1. **Edit Code** → Make changes in src/ folder
2. **Instant Update** → Browser auto-refreshes (HMR)
3. **View Changes** → See results immediately
4. **No Rebuild** → Fast feedback loop!

### Code Quality Checks

```bash
# Run ESLint validation
npm run lint

# Auto-fix simple issues
npm run lint -- --fix
```

ESLint checks for:
- Syntax errors
- Code style violations
- Unused imports
- Best practice violations

### Available npm Scripts

```bash
npm run dev       # Start dev server with HMR
npm run build     # Create production bundle
npm run preview   # Test production build locally  
npm run lint      # Run code quality checks
```

---

## 🚀 Building & Deployment

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

## 🏗️ Infrastructure as Code

Terraform manages all AWS infrastructure for this application. Every resource is version-controlled and reproducible.

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

## 🔄 CI/CD Pipeline

GitHub Actions automatically builds, validates, and deploys your application on every commit.

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
![S3 Bucket](./Readme%20Images/aws%20console%20s3%20bucket%20view.png)

Shows the S3 bucket containing all deployed application files.

### Terraform Init Success
![Terraform Init](./Readme%20Images/Terraform%20init%20success%20page.png)

Initial Terraform setup with AWS provider.

### Terraform Plan Success
![Terraform Plan](./Readme%20Images/Teraform%20plan%20success%20page.png)

Planning AWS resources before creation.

### Terraform Apply Success
![Terraform Apply](./Readme%20Images/Terraform%20apply%20success%20page.png)

Successfully created all AWS infrastructure.

### GitHub Actions Deploy
![GitHub Actions](./Readme%20Images/git%20hub%20action%20deploy%20success.png)

CI/CD pipeline automatically deploying to S3.

---

## 📱 Application Screenshots

### Dashboard Overview
![Dashboard Overview](./Readme%20Images/ui%20screen%201.png)

Main dashboard with real-time business metrics and KPIs.

### Analytics Module
![Analytics Dashboard](./Readme%20Images/ui%20screen%202.png)

Comprehensive analytics with charts and performance metrics.

### Customer Management
![Customer Management](./Readme%20Images/ui%20screen%203.png)

Complete customer relationship and transaction management.

### Human Resources Module
![HR Management](./Readme%20Images/ui%20screen%204.png)

Employee profiles, team management, and HR analytics.

### Inventory Management
![Inventory System](./Readme%20Images/ui%20screen%205.png)

Real-time stock tracking and inventory analytics.

### Order Management
![Order Processing](./Readme%20Images/ui%20screen%206.png)

Order processing workflow and status tracking.

### Supply Chain Module
![Supply Chain](./Readme%20Images/ui%20screen%207.png)

End-to-end supply chain visibility and logistics tracking.

### Settings & Configuration
![Settings Page](./Readme%20Images/ui%20screen%208.png)

System configuration, user preferences, and access control.

### Live Application on S3
![S3 Hosted Application](./Readme%20Images/ui%20screen%201%20using%20s3%20bucket%20link.png)

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

## ✅ Best Practices

### Frontend Development
| Practice | Description |
|----------|-------------|
| **Component Reusability** | Create reusable components for DRY code |
| **State Management** | Use React hooks properly (useState, useEffect) |
| **Code Splitting** | Lazy load components for better performance |
| **Error Handling** | Implement try-catch and error boundaries |
| **Performance** | Avoid unnecessary re-renders and optimize images |

### Deployment Best Practices
| Practice | Description |
|----------|-------------|
| **Pre-deployment Testing** | Always test builds locally first |
| **Terraform Planning** | Run `terraform plan` before `terraform apply` |
| **Backup State** | Keep regular backups of terraform.tfstate |
| **Gradual Rollout** | Deploy to staging before production |
| **Monitoring** | Track CloudFront metrics and S3 access logs |

### Security Best Practices
| Practice | Description |
|----------|-------------|
| **Credential Management** | Never commit secrets to Git |
| **GitHub Secrets** | Always use repository secrets for credentials |
| **IAM Policies** | Use least privilege IAM policies |
| **Code Review** | Require peer review for all merges |
| **Dependency Updates** | Regularly update packages with `npm audit` |

### Code Quality
```bash
# Before committing code:
npm run lint          # Check for style violations
npm run build         # Ensure production build works
npm run preview       # Test production bundle locally
```

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

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### 1. Fork & Clone
```bash
git clone https://github.com/yourusername/ERP-Frontend-S3.git
cd "ERP Front-End for S3"
```

### 2. Create Feature Branch
```bash
git checkout -b feature/improve-dashboard
```

### 3. Make Changes & Test
```bash
npm run lint        # Check code quality
npm run build       # Test production build
npm run dev         # Test during development
```

### 4. Commit & Push
```bash
git add .
git commit -m "Add feature: improve dashboard"
git push origin feature/improve-dashboard
```

### 5. Create Pull Request
- Go to GitHub repository
- Click "Create Pull Request"
- Add detailed description of changes
- Wait for review

### Contribution Guidelines
✅ Follow existing code style  
✅ Add comments for complex logic  
✅ Test changes before pushing  
✅ Keep commits focused and organized  
✅ Write clear commit messages  

---

## 📄 License & Support

### License
This project is **Open Source** and available for learning, modification, and distribution.

**You are free to:**
- ✅ Use this project for learning and educational purposes
- ✅ Fork and modify the code
- ✅ Deploy your own version
- ✅ Contribute improvements
- ✅ Share with others

**Attribution:**  
Please give credit to the original creator: **Malinda Prabath**

### Getting Help
- 📖 [ERP-S3 App Documentation](ERP-S3/README.md)
- 🔍 Search [GitHub Issues](https://github.com/yourusername/ERP-Frontend-S3/issues)
- 💬 Open a new issue with details
- 📧 Contact: malindaprabath876@gmail.com

---

## 🎯 Quick Reference

### Essential Commands

```bash
# 👨‍💻 Development
npm run dev              # Start dev server at localhost:5173
npm run lint             # Check code quality with ESLint
npm run build            # Create production bundle
npm run preview          # Test production build locally

# 🏗️ Infrastructure (Terraform)
cd Terraform
terraform init           # Initialize Terraform
terraform plan           # Preview AWS resources
terraform apply          # Create AWS infrastructure
terraform destroy        # Remove AWS resources

# 🚀 Deployment
git push origin main     # Trigger GitHub Actions deploy
```

### Project URLs
- 📝 **Repository**: https://github.com/yourusername/ERP-Frontend-S3
- 🌐 **Live Application**: https://your-bucket.cloudfront.net
- 📚 **Documentation**: [README.md](README.md)

---

<div align="center">

### 🚀 Ready to Deploy?

**Quick Setup Checklist:**
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
