# SaaS Dashboard Template with Laravel, React, Vite, TypeScript, Tailwind, and Stripe

This template provides a solid foundation for building a SaaS dashboard application, combining powerful and modern technologies like Laravel, React, TypeScript, Inertia, Vite, Tailwind CSS, and Stripe. Whether you're starting a new project or enhancing an existing one, this template is designed to streamline your development process and help you create a robust, scalable, and user-friendly SaaS platform.

[![GitHub](https://img.shields.io/badge/GitHub-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ds-joe)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/youssef-bibawi-joe)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/YoussefBibawy1)

## Features

- **Laravel**: Robust backend framework with powerful tools and MVC architecture.
- **React & TypeScript**: Modern frontend library with static type checking.
- **Inertia**: using classic server-side routing. Works with any backend.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Stripe Integration**: Easily accept payments and manage subscriptions.
- **Sass**: the most mature, stable, and powerful professional grade CSS extension language in the world. 
- **PrimeReact**: Utilize a rich collection of Tailwind-styled UI components for rapid front-end development.

## Getting Started

### Prerequisites

- PHP 8.2 or higher
- Node.js 20.16.0 or higher
- Composer
- MySQL (10.11.8-MariaDB)
- Stripe Account

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/ds-joe/saas-dashboard-template.git
cd saas-dashboard-template
```

2. **Install backend dependencies:**
```bash
composer install
cp .env.example .env
php artisan key:generate
```

3. **Install frontend dependencies:**
```bash
npm install
```

4. **Configure your .env file:**
  - Update your database and Stripe credentials in the .env file.

5. **Run migrations:**
```bash
php artisan migrate
```

6. **Start the development servers:**
```bash
npm start
php artisan serve
```