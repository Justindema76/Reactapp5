-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 15, 2025 at 07:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe_posts`
--

CREATE TABLE `recipe_posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `recipe` text NOT NULL,
  `publish_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_posts`
--

INSERT INTO `recipe_posts` (`id`, `title`, `name`, `recipe`, `publish_date`) VALUES
(1, 'Classic Spaghetti Bolognese', 'John Doe', '\r\n- 400g spaghetti\r\n- 2 tbsp olive oil\r\n- 1 onion, finely chopped\r\n- 2 garlic cloves, minced\r\n- 500g minced beef\r\n- 400g canned tomatoes\r\n- 2 tbsp tomato paste\r\n- Salt and pepper to taste\r\nInstructions:\r\n1. Cook the spaghetti according to the package instructions.\r\n2. Heat olive oil in a pan and sauté the onion and garlic.\r\n3. Add the minced beef and cook until browned.\r\n4. Stir in the canned tomatoes, tomato paste, salt, and pepper.\r\n5. Simmer for 15 minutes and serve over spaghetti.', '2024-12-01 17:00:00'),
(2, 'Chocolate Chip Cookies', 'Jane Smith', '\r\n- 200g butter, softened\r\n- 150g sugar\r\n- 150g brown sugar\r\n- 2 eggs\r\n- 1 tsp vanilla extract\r\n- 300g all-purpose flour\r\n- 1 tsp baking soda\r\n- 200g chocolate chips\r\nInstructions:\r\n1. Preheat the oven to 180°C (350°F).\r\n2. Cream together butter and sugars.\r\n3. Beat in eggs and vanilla extract.\r\n4. Mix in flour and baking soda, then fold in chocolate chips.\r\n5. Drop spoonfuls of dough onto a baking sheet and bake for 10-12 minutes.', '2024-12-02 20:30:00'),
(3, 'Caprese Salad', 'Alice Johnson', '\r\n- 4 large tomatoes, sliced\r\n- 400g fresh mozzarella, sliced\r\n- Fresh basil leaves\r\n- 2 tbsp olive oil\r\n- Balsamic glaze\r\n- Salt and pepper to taste\r\nInstructions:\r\n1. Layer the tomato slices, mozzarella, and basil leaves on a plate.\r\n2. Drizzle with olive oil and balsamic glaze.\r\n3. Sprinkle with salt and pepper to taste. Serve immediately.', '2024-12-03 15:00:00'),
(4, 'Chicken Tikka Masala', 'Raj Patel', '\r\n- 500g chicken breast, diced\r\n- 1 cup plain yogurt\r\n- 2 tbsp tikka masala spice blend\r\n- 1 onion, finely chopped\r\n- 2 garlic cloves, minced\r\n- 1 cup tomato purée\r\n- 1 cup heavy cream\r\n- 2 tbsp oil\r\n- Salt to taste\r\nInstructions:\r\n1. Marinate the chicken in yogurt and tikka masala spices for at least 1 hour.\r\n2. Heat oil in a pan and cook the chicken until browned.\r\n3. Remove the chicken and sauté the onion and garlic in the same pan.\r\n4. Add the tomato purée and cook for 5 minutes.\r\n5. Stir in the cream and return the chicken to the pan. Simmer for 10 minutes and serve with rice or naan.', '2024-12-04 23:45:00'),
(5, 'Homemade Pancakes', 'Emily Carter', '\r\n- 2 cups all-purpose flour\r\n- 2 tbsp sugar\r\n- 1 tbsp baking powder\r\n- 1/2 tsp salt\r\n- 2 cups milk\r\n- 2 eggs\r\n- 2 tbsp melted butter\r\n- Maple syrup for serving\r\nInstructions:\r\n1. Mix the flour, sugar, baking powder, and salt in a bowl.\r\n2. In another bowl, whisk together the milk, eggs, and melted butter.\r\n3. Combine the wet and dry ingredients and mix until just combined.\r\n4. Heat a griddle or pan and cook pancakes until bubbles form, then flip and cook the other side.\r\n5. Serve with maple syrup.', '2024-12-05 13:00:00'),
(11, 'Vegetarian Chili', 'Sarah Lee', 'Ingredients:\r\n- 1 onion, chopped\r\n- 2 garlic cloves, minced\r\n- 1 can diced tomatoes\r\n- 1 can kidney beans\r\n- 1 can black beans\r\n- 2 cups vegetable broth\r\n- 1 tbsp chili powder\r\n- 1 tbsp cumin\r\n- Salt to taste\r\nInstructions:\r\n1. Sauté the onion and garlic in a pot.\r\n2. Add the tomatoes, beans, and vegetable broth.\r\n3. Stir in the chili powder, cumin, and salt.\r\n4. Simmer for 30 minutes and serve.', '2024-12-06 13:00:00'),
(12, 'Spaghetti Aglio e Olio', 'Justin DeMatteis', '1. Cook the spaghetti in salted boiling water according to package instructions.\n2. While the pasta cooks, heat olive oil in a large skillet over medium heat.\n3. Add the minced garlic and red pepper flakes, and sauté until garlic is golden brown.\n4. Drain the spaghetti, reserving some pasta water.\n5. Add the cooked pasta to the skillet with garlic and oil. Toss to coat, adding a bit of reserved pasta water if necessary.\n6. Season with salt and black pepper to taste, and sprinkle with fresh parsley.\n7. Serve with grated Parmesan cheese, if desired.\n', '2025-01-08 15:58:26'),
(13, 'Beef Tacos', 'Michael Brown', 'Ingredients:\n- 500g ground beef\n- 8 small taco shells\n- 1 onion\n- 1 packet taco seasoning\n- 1 cup shredded lettuce\n- 1/2 cup grated cheddar cheese\n- Salsa and sour cream\n\nInstructions:\n1. Cook the ground beef in a pan with diced onions until browned.\n2. Add taco seasoning and follow packet instructions.\n3. Warm taco shells and fill with beef mixture.\n4. Top with lettuce, cheese, salsa, and sour cream.', '2025-01-08 16:48:02'),
(14, 'Caesar Salad', 'Sophia Green', 'Ingredients:\n- 4 cups romaine lettuce\n- 1/2 cup croutons\n- 50g parmesan cheese\n- 2 tbsp Caesar dressing\n\nInstructions:\n1. Chop romaine lettuce and place in a bowl.\n2. Add croutons and sprinkle with parmesan cheese.\n3. Drizzle with Caesar dressing and toss to coat.\n4. Serve immediately for a classic side salad.', '2025-01-08 16:48:58'),
(15, 'test', 'Justin DeMatteis', 'tesr', '2025-01-15 21:44:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(2, 'Tania', 'tidematteis@gmail.com', '$2y$10$5saHWa6VjKQUo6jYN1HuH.BZbvVTlAGLpqnxqTClVklteFN87eqhS', '2025-01-15 17:56:54'),
(3, 'Domenic', 'dom@mastro.com', '$2y$10$L0c3K0g7XyohpHtDPzFAweeVGWmxkDEZnot9AZ.Q4kdQNhM4FZcau', '2025-01-15 18:38:34'),
(8, 'Justin', 'justindema76@gmail.com', '$2y$10$dUAL8tujJwGOLAVR7M34f..Ta1MwSLJvj/8L3BBTjIDspF5.jiILm', '2025-01-16 00:06:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe_posts`
--
ALTER TABLE `recipe_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe_posts`
--
ALTER TABLE `recipe_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
