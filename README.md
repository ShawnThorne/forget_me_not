# Forget me not

## About the Project

Forget Me Not is a tool designed to help users manage and organize their tasks, reminders, and important notes efficiently. With a focus on simplicity and usability, this project aims to ensure you never forget the things that matter most. In particular this project is designed so you don't forget your note as you open the note taking app of your choice.

## Features

- Create, edit, and delete tasks and reminders.
- Organize notes with tags and categories.
- Set notifications for important deadlines.
- User-friendly interface for quick access.

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/ShawnThorne/forget_me_not.git
  ```
2. Navigate to the project directory:
  ```bash
  cd forget_me_not
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
4. Start the application:
  ```bash
  npm run dev
  ```

### Running with Laravel Sail
If you prefer to use Laravel Sail for running this project, follow these steps:
1. Ensure Docker is installed and running on your system.
2. Clone the repository:
  ```bash
  git clone https://github.com/ShawnThorne/forget_me_not.git
  ```
3. Navigate to the project directory:
  ```bash
  cd forget_me_not
  ```
4. Install dependencies using Docker:
  ```bash
  docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/var/www/html" \
  -w /var/www/html \
  laravelsail/php84-composer:latest \
  composer install --ignore-platform-reqs
  ```
5. Build the Sail environment:
  ```bash
  ./vendor/bin/sail build
  ```
6. Copy the `.env.example` file to `.env` and configure your environment variables:
  ```bash
  cp .env.example .env
  ```
7. Start the Sail environment:
  ```bash
  ./vendor/bin/sail up
  ```
8. Run database migrations:
  ```bash
  ./vendor/bin/sail artisan migrate
  ```
9. In a new terminal window run the hmr server with:
```
npm run dev
```
10. Access the application in your browser at `http://localhost`.

## Usage

1. Open the application in your browser.
2. Add tasks or reminders upon opening
3. Organize your notes with tags for better categorization.
4. Set reminders to receive notifications for upcoming deadlines.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
  ```bash
  git checkout -b feature/YourFeatureName
  ```
3. Commit your changes:
  ```bash
  git commit -m "Add your message here"
  ```
4. Push to the branch:
  ```bash
  git push origin feature/YourFeatureName
  ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).