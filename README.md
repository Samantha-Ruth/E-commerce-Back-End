# E-commerce-Back-End

## Description

This project uses a combination of express.js, SQL, MySQL, MySQL2, and Sequelize to create the back end of a simple ecommerce site.

This project introduced me to Sequelize.  I learned about creating databases using constructor Models, seeding them from the command line, and accessing the data stored within the models through API routes. I also learned about a JOIN table and how to create JOINS using the Sequelize language "includes".   

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Questions](#questions)

## Installation

If the user already has node installed on their device, they can download this project and run "npm init" and then "npm i express sequelize mysql2 dotenv" to download the required dependencies (express.js, Sequelize, MySql2, and .env respectively).  In order to access the mysql2 shell,  they would need to create a .env file with the following, replacing <username> and <user password> with the users own username and password: 
  
DB_NAME=ecommerce_db
DB_USER= < username >
DB_PASSWORD= < user password >


To ensure the user is connected to the correct database, navigate to the root folder of the project, and then open the mysql2 shell and enter "source db/schema.sql".  Then enter "USE ecommerce_db" to use the database file. Exit the mysql2 shell by entering "exit" into the command line.

Next, seed the database with data by entering "npm run seed" into the command line.  The database and required tables are now created, selected, and contain data.  

Finally, connect the server by entering "npm start" into the command line.

## Usage

The user should use either Insomnia or PostMan to create a front-end environment.  When the user creates GET routes with the endroute of api/categories, the user will be presented with the table of ecommerce categories.  When the user send the same GET using an id number after categories (eg api/categories/2), the user is presented with a single category with an ID of 2.  The user can access all the products and tags using the same manner (api/products) and (api/tags), respectfully, and a single product and single tag by id (api/products/3), (api/tags5). 

![Title Page](https://user-images.githubusercontent.com/64170123/177059433-513ab019-e128-4060-b3d2-b1e4e1c5e77c.jpg)

The user can also add categories, products, and tags using the POST route and entering required data. 

For category, need: id (integer), category_name
For product, need: id (integer), product_name, price (decimal), stock (integer), and category_id (integer).
For tag, need: id (integer), tag_name

The user can also edit a single category, product, or tag using the PUT route and respective ID (eg api/products/5), and delete an item from categories, products, and tags using the DELETE route. 

Image of working "GET category":

![Get all notes](https://user-images.githubusercontent.com/64170123/177059374-a4fa3be0-d35a-4274-af81-90baf0d9a4ed.jpg)

Image of working "GET single product":

![Get Single Note](https://user-images.githubusercontent.com/64170123/177059375-b0a24fc9-a323-49be-8cd4-956052a87d51.jpg)

Image of working "POST tag":

![Post New Note](https://user-images.githubusercontent.com/64170123/177059376-3bdcb661-165a-45bc-a599-fd71c22bcb0f.jpg)


## Links


Link to video of project: 

The link to the project is here: (heroku)

The url of the Git repository is here: https://github.com/Samantha-Ruth/E-commerce-Back-End


## Questions

If you have any questions about the repo, open an issue or you can find more of my work at (https://gitHub.com/Samantha-Ruth).


