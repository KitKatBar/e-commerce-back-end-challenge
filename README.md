# E-commerce Back-End Challenge - Where The Money Is!
  
## Description

Internet retail, also known as e-commerce, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

This application incorporates the back end for an e-commerce site.  It consists of an Express.js API with routes for each model and has been configured to use Sequelize to interact with a PostgresSQL database.  Additionally, this project uses the Object-Relational Mapping (ORM) technique for defining the relationship between the objects we created in this program to the data in the database.  A database schema and seeds have been provided for building, initializing and populating the database with sample data for testing.
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)


## Installation

Please follow these commands for installation.

1. Clone the repo into your local system.

HTTPS:
```
git clone https://github.com/KitKatBar/e-commerce-back-end-challenge.git
```

SSH:
```
git clone git@github.com:KitKatBar/e-commerce-back-end-challenge.git
```

2. Download all the required modules for this application.

```
npm i
```

The above should install all the modules used in this application, but if it doesn't work you can do the installations separately using these commands below (make sure to do ALL of them).

```
npm i dotenv@8.2.0
npm i express@4.17.1
npm i pg@8.11.3
npm i sequelize
```

Note that while the given version of Sequelize was 5.21.7, installing it will produce a warning in the console telling you to upgrade to version 6 or later so it is better to install the most recent version.

3. Additionally, you will need to download some programs to help setup this project.  The programs that this project requires is PostgreSQL for the database and Insomnia for testing APIs.  There are also other softwares available, but I recommend using these ones.

PostgreSQL Installation Guide: https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide

Insomnia Installion Website: https://insomnia.rest/

## Usage

This project performs CRUD operations that interact with an e-commerce database in PostgreSQL. There are a variety of operations available for querying the categories, products and tags tables. I have provided a walkthrough video demonstrating how to use this program. Click on [this link](https://drive.google.com/file/d/1qEzMJsztl0UzLEQxLNnvcpX70LOm9aCL/view) to access the video.

Additionally, I have provided screenshots of sample responses from Insomnia for each of the routes.

GET All Categories:

![image showing the layout of the home page](https://github.com/KitKatBar/note-taker-challenge/blob/main/images/home-page.png?raw=true)

POST New Category & GET Category by ID

img here

PUT Category & GET Category by ID

img here

DELETE Category & GET Category by ID

img here

GET All Products:

![image showing the layout of the home page](https://github.com/KitKatBar/note-taker-challenge/blob/main/images/home-page.png?raw=true)

POST New Product & GET Product by ID

img here

PUT Product & GET Product by ID

img here

DELETE Product & GET Product by ID

img here

GET All Tags:

![image showing the layout of the home page](https://github.com/KitKatBar/note-taker-challenge/blob/main/images/home-page.png?raw=true)

POST New Tag & GET Tag by ID

img here

PUT Tag & GET Tag by ID

img here

DELETE Tag & GET Tag by ID

img here
        
## Credits

PostgreSQL Installation Guide: https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-installation-guide

PostgreSQL Reference Guide: https://coding-boot-camp.github.io/full-stack/postgresql/postgresql-reference-guide

Insomnia for Testing Endpoints: https://insomnia.rest/

Our instructor Drew Hoang for introducing us to ORM this week and opening up a new world of learning for us by showing us how to start connecting the front-end and back-end.  He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was built using the MIT License. Please refer to the LICENSE in the repo for more information.
          
## How to Contribute

You can contribute to this project by providing a front-end display for all our model data!

## Questions

This project was created by KitKatBar.
    
Click on [this link](https://github.com/KitKatBar) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: katriel_chiu@msn.com