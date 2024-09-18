# Comprehensive SaaS Multi Layouts Template: Built with Laravel, React, Inertia

This template provides a solid foundation for building a SaaS multi layouts application, combining powerful and modern technologies like Laravel, React, TypeScript, Inertia, Vite, Tailwind CSS, and Stripe. Whether you're starting a new project or enhancing an existing one, this template is designed to streamline your development process and help you create a robust, scalable, and user-friendly SaaS platform.

[![GitHub](https://img.shields.io/badge/GitHub-333?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ds-joe)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/youssef-bibawi-joe)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/YoussefBibawy1)

## Features

- **[Laravel](https://laravel.com/docs/11.x)**: Robust backend framework with powerful tools and MVC architecture.
- **[React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)**: Modern frontend library with static type checking.
- **[Inertia](https://inertiajs.com/)**: using classic server-side routing. Works with any backend.
- **[Vite](https://vitejs.dev/guide/)**: Fast build tool for modern web projects.
- **[Vitest](https://vitest.dev/)**: A blazing-fast unit testing framework with a Jest-compatible API, built for Vite.
- **[Jest](https://jestjs.io/)**: Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- **[Tailwind CSS](https://tailwindcss.com/docs)**: Utility-first CSS framework for rapid UI development.
- **[Sass](https://sass-lang.com/)**: the most mature, stable, and powerful professional grade CSS extension language in the world.
- **[Shadcn](https://ui.shadcn.com/docs)**: A Lightweight CSS-in-JS Library.
- **[Laravel Modules](https://laravelmodules.com)**: is a Laravel package which was created to manage your large Laravel app using modules.
- **[Spatie Permissions](https://spatie.be/docs/laravel-permission/v6/introduction)**: is a Laravel package which was created to manage user permissions and roles.
- **[react-icons](https://react-icons.github.io/react-icons/)**: which utilizes ES6 imports that allows you to include only the icons that your project is using.
- **[prettier](https://prettier.io/)**: Prettier is an opinionated code formatter.

## Getting Started

### Prerequisites

- [PHP](https://www.php.net/) 8.2 or higher
- [Node.js](https://nodejs.org/en) 20.16.0 or higher
- [Composer](https://getcomposer.org/)
- [MySQL](https://www.mysql.com/) (10.11.8-MariaDB)
- [Stripe](https://docs.stripe.com/) Account

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/ds-joe/saas-multi-layout-laravel-template.git
cd saas-multi-layout-laravel-template
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

7. **Application Test:**

```bash
# Test Front-end with vitest
npm test

# Test Front-end with typescript
npm run test:ts

```

8. **Demo Data:**

- User
  - email: joe@example.com
  - username: admin
  - password: password
