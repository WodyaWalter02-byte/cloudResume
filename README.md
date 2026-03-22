# 🚀 Azure Cloud Resume Challenge

This is a full-stack serverless application hosting my professional resume. It demonstrates my ability to architect, deploy, and automate cloud-native solutions on **Microsoft Azure**.

## 🔗 Live Demo
[View my Resume Here](https://wodyaresume02.z1.web.core.windows.net/)

---

## 🏗️ Architecture
The project follows a decoupled, serverless architecture to ensure high availability and near-zero cost.



1. **Frontend:** Static HTML/CSS hosted on **Azure Blob Storage**.
2. **CDN:** **Azure CDN** provides global edge caching and **SSL/TLS (HTTPS)**.
3. **API:** **Azure Functions** (Python) handles the backend logic.
4. **Database:** **Azure Cosmos DB** persists the visitor count data.
5. **CI/CD:** **GitHub Actions** automates deployments on every code push.

---

## 🛠️ Technical Implementation
### 🛡️ Security & Performance
- **CORS Policy:** Restricted backend access to only allow requests from the resume domain.
- **Global Delivery:** Used Azure CDN to reduce latency for global recruiters.
- **Infrastructure as Code:** Managed resources via the Azure Portal with an upcoming shift to Bicep/ARM.

### 📈 Visitor Counter Integration
The counter (currently at **11+ visitors**) uses a JavaScript `fetch()` call to a Python-based Azure Function. The function increments a value in a Cosmos DB container using an atomic update to ensure data integrity.

---

## 📂 How to Navigate
- `/frontend`: Web assets and the JavaScript counter logic.
- `/backend`: Serverless function code and database triggers.
- `.github/workflows`: YAML files for automated deployment.

---

## 👨‍💻 Author
**Walter Wodya** *Azure Cloud Professional | AZ-900 Certified | Aspiring AZ-104* [LinkedIn](https://www.linkedin.com/in/walter-wodya/) | [GitHub](https://github.com/WodyaWalter02-byte)
