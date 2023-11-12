# TheBOX! Client

<div align="center">
  <img src="./src/assets/images/logos/the-box-logo.jpg" alt="BrainStation BOX Logo" width="20%">
</div>

## Overview

Welcome to the BrainStation BOX client application! This front-end powers our comprehensive yearbook and social networking platform, offering a dynamic and interactive experience.

## Features

- ✨ Sign in, sign up, and sign out functionality.
- 📷 Profile page to showcase abilities and experiences.
- 📚 Yearbook page to connect with cohorts.
- 🌐 Social networking features like posts, comments, and likes.
- 💬 Real-time chat for constant connectivity with peers.
- 🚀 Opportunities for top students to contribute to app development.
- 🎉 Fun group activities and more!

## Tech Stack

- 🚀 React for building dynamic UI components.
- 🌐 Axios for making API requests.
- 🔒 JWT for managing authentication and authorization.
- 🌈 Sass for advanced styling using BEM methodology.
- 📚 React Router for seamless navigation between pages.
- 💬 Socket.io for real-time chat functionalities.

## Installation

1. Clone the repository: `git clone https://github.com/imanhedeshy/the-box-client.git`.
2. Navigate to the project folder: `cd the-box-client`.
3. Install dependencies: `npm install`.
4. Run the development server: `npm start`.

## How to Use

1. Sign up or log in to unlock full access to the platform's features.
2. Use the navigation bar to explore different pages.
3. Create a profile to showcase your skills, connect with peers, and engage in discussions.
4. Engage in real-time chats and participate in fun activities.

## Project Structure

Below is the structure of the BrainStation BOX client project:

```
the-box-client/
│
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── fonts/
│ │ └── images/
│ │ ├── icons/
│ │ ├── logos/
│ │ └── images/
│ ├── components/
│ │ ├── Footer/
│ │ ├── Header/
│ │ ├── IsLoading/
│ │ ├── NotFound/
│ │ ├── PartnerProfile/
│ │ ├── StudentProfile/
│ │ ├── UpdateProfile/
│ │ └── ...
│ ├── data/
│ ├── pages/
│ │ ├── Chat/
│ │ ├── Expo/
│ │ ├── Profile/
│ │ ├── SignUpLogin/
│ │ ├── Threads/
│ │ ├── Yearbook/
│ │ └── ...
│ ├── styles/
│ │ ├── partials/
│ │ └── ...
│ ├── utils/
│ │ ├── apiCalls.js
│ │ ├── formValidator.js
│ │ ├── scrollToTop.js
│ │ ├── signOut.js
│ │ ├── storageFuncs.js
│ │ ├── timeAgoConverter.js
│ │ └── ...
│ ├── App.js
│ ├── App.scss
│ ├── index.js
│ ├── index.scss
│ └── ...
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Contribution

If you wish to contribute to BrainStation BOX client, please refer to the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) document for guidelines.

## Related Projects

- [TheBOX! Server](https://github.com/imanhedeshy/the-box-server): The server-side implementation for TheBOX!.

## License

Usage of the BrainStation BOX client is governed by the terms outlined in [LICENSE.md](./docs/LICENSE.md).
