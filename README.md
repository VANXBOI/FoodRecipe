# Foodie - React Native Recipe Application

Foodie is a mobile and web application built with React Native and Expo that allows users to discover, explore, favorite, and manage culinary recipes. The application features a dynamic main feed, category-based filtering, detailed recipe instructions, global state management for favorites using Redux Toolkit, and local CRUD capabilities for custom user-created recipes using AsyncStorage.

---

## Features

### Main Feed and Category Navigation
- Interactive horizontal category bar allowing users to filter dishes by category such as Beef, Chicken, Dessert, Vegan, and more.
- Quick navigation shortcuts to personal recipes ("My Food") and favorited recipes ("My Favorites").
- Responsive 2-column grid layout presenting recipe cards with high-resolution image thumbnails and names.

### Detailed Recipe View
- Comprehensive breakdown of selected recipes featuring dish imagery, preparation time, serving size, estimated calories, and difficulty level.
- Categorized ingredient list formatted with measurements and ingredient names.
- Step-by-step cooking instructions.
- Toggle favorite button allowing users to save or remove recipes from their personal collection.

### Favorites Management
- Centralized favorites collection powered by Redux Toolkit.
- Dedicated Favorites screen displaying saved recipes with one-click navigation back to full details.
- Real-time synchronization of favorite status across all screens.

### Custom Recipe Creation and Management (My Food)
- Personal recipe section stored locally using React Native AsyncStorage.
- Form screen supporting image URL uploads, titles, and multi-line descriptions.
- Full CRUD support allowing users to create, view, edit, and delete their custom recipes.

---

## Tech Stack

- **Framework:** React Native, Expo
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Navigation:** React Navigation (`@react-navigation/native`, `@react-navigation/native-stack`)
- **Persistence:** `@react-native-async-storage/async-storage`
- **UI & Animations:** `react-native-responsive-screen`, `react-native-reanimated`

---

## Project Structure

```
FoodRecipe/
├── src/
│   ├── components/
│   │   ├── categories.js        # Horizontal category bar component
│   │   └── recipes.js           # Main feed recipe grid component
│   ├── navigation/
│   │   └── index.js             # Native stack navigation configuration
│   ├── redux/
│   │   ├── favoritesSlice.js    # Redux slice for favorite recipes
│   │   └── store.js             # Redux store setup
│   └── screens/
│       ├── CustomRecipesScreen.js # Detailed view for user-submitted recipes
│       ├── FavoriteScreen.js      # Saved favorites screen
│       ├── HomeScreen.js          # Main feed and category selection
│       ├── MyRecipeScreen.js      # User's personal recipe collection
│       ├── RecipeDetailScreen.js  # Main recipe detail screen
│       ├── RecipesFormScreen.js   # Add/Edit recipe form
│       └── WelcomeScreen.js       # Animated splash welcome screen
├── App.js
├── package.json
└── README.md
```

---

## Prerequisites

Before running this project, ensure you have the following installed on your system:
- Node.js (version 16 or higher)
- npm or yarn package manager
- Expo Go application on your mobile device (optional, for device testing)

---

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VANXBOI/FoodRecipe.git
   cd FoodRecipe
   ```

2. **Install dependencies:**
   Because of legacy peer dependency versions in Expo templates, install dependencies using the `--force` flag:
   ```bash
   npm install --force
   ```

3. **Run the application:**
   - To launch on web browser:
     ```bash
     npm run web
     ```
   - To launch Expo development server for iOS / Android:
     ```bash
     npx expo start
     ```

---

## License

This project was created for educational purposes as part of the React Native development curriculum.
