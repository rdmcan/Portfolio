//https://turbofuture.com/computers/React-Image-Carousel
import ProjectsScheme from "./projectsScheme";
import { Typography, useMediaQuery } from "@mui/material";
import Fade from "react-reveal/Fade";
import { ProjectsContainer, ProjectsTitle } from "../../styles/projects/index";
import Carousel from "react-simply-carousel";
import React, { useState } from "react";
import { useTheme } from "@mui/system";

const Projects = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <Fade cascade>
        {matches ? (
          <Carousel
            containerProps={{}}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                display: "none",
                alignSelf: "center",
              },
            }}
            backwardBtnProps={{
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                display: "none",
                alignSelf: "center",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: "20px",
                  width: "10px",
                  borderRadius: 400 / 2,
                  border: 0,
                  background: "gray",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: "20px",
                  width: "10px",
                  borderRadius: 400 / 2,
                  border: 0,
                  background: "black",
                },
              },
            }}
            itemsToShow={1}
            speed={400}
          >
            {projetcsArr.map((data) => {
              return (
                <ProjectsScheme
                  type={data.type}
                  imgSrc={data.imgSrc}
                  title={data.title}
                  github={data.github}
                  languages={data.languages}
                  description={data.description}
                />
              );
            })}
          </Carousel>
        ) : (
          <Carousel
            containerProps={{}}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                display: "none",
                alignSelf: "center",
              },
            }}
            backwardBtnProps={{
              style: {
                width: 0,
                height: 0,
                minWidth: 0,
                display: "none",
                alignSelf: "center",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  height: "16px",
                  width: "16px",
                  borderRadius: 400 / 2,
                  // borderRadius: "50%",
                  border: 0,
                  background: "gray",
                },
              },
              activeItemBtnProps: {
                style: {
                  height: "16px",
                  width: "16px",
                  borderRadius: 400 / 2,
                  // borderRadius: "50%",
                  border: 0,
                  background: "black",
                },
              },
            }}
            itemsToShow={3}
            speed={400}
          >
            {projetcsArr.map((data) => {
              return (
                <ProjectsScheme
                  type={data.type}
                  imgSrc={data.imgSrc}
                  title={data.title}
                  github={data.github}
                  languages={data.languages}
                  description={data.description}
                />
              );
            })}
          </Carousel>
        )}
      </Fade>
    </ProjectsContainer>
  );
};

const projetcsArr = [
  {
    type: "TIME SERIES",
    imgSrc: "/images/projects/T Series.png",
    title: "STOCK DATA",
    github: "https://github.com/rdmcan/time-series.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        "Python"
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft="10px"
      >
        "Pandas"
      </Typography>,
      <Typography />,
      <Typography
        variant="overline"
        backgroundColor="#FF9999"
        padding={0.5}
        marginLeft="10px"
      >
        "matplotlib"
      </Typography>,
       <Typography
       variant="overline"
       backgroundColor="#b0ddb3"
       padding={0.5}
       marginLeft="10px"
     >
       "yfinance api"
     </Typography>    
    ],
    description:
      "Analysis on Facebook, 3M, IBM and Amazon stocks for the last 60 months. Data resampled to get prices for the end of the business month, autocorrelation plot of the adjusted prices, monthly returns using shift() function. Finally, scatter plot to visualize correlation between returns of all stocks.",
  },
  {
    type: "k-NEAREST NEIGHBORS",
    imgSrc: "/images/projects/KNN.png",
    title: "KKN CLASSIFICATION",
    github: "https://github.com/rdmcan/kNN-Classification.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        "Pandas"
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft="10px"
      >
        "matplotlib"
      </Typography>,
      <Typography />,
      <Typography
        variant="overline"
        backgroundColor="#FF9999"
        padding={0.5}
        marginLeft="10px"
      >
        "seaborn"
      </Typography>,
      <Typography
      variant="overline"
      backgroundColor="#b0ddb3"
      padding={0.5}
      marginLeft="10px"
    >
      "sklearn"
    </Typography>    
    ],
    description:
      "k-Nearest Neighbors algorithm to solve a classification problem. I used the Iris dataset for this project, the goal is to train kNN algorithm to distinguish the species from one another. Eventually, show the accuracy score of the prediction by comparing predicted iris classes and the `Y` values from the test.",
  },
  {
    type: "Ordinary Least Squares",
    imgSrc: "/images/projects/Linear regression.png",
    title: "LINEAR REGRESSION",
    github: "https://github.com/rdmcan/OSL_model.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        Python
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#b0ddb3"
        padding={0.5}
      >
        Numpy
      </Typography>,
      <Typography />,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#ff80ff"
        padding={0.5}
      >
        Scipy.stats
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#daa3a3"
        padding={0.5}
      >
        Statsmodels 
      </Typography>,
    ],
    description:
      "Exploratory linear regression analysis on several data sets. Scatter plot is used to decide if the model is linear; if the relationship is not linear, data transformation is applied. OLS model is applied to the original and transformed data. Finally, outliers are removed and slope, intercept and R-square is shown.",
  },
  {
    type: "WEB APP",
    imgSrc: "/images/projects/TravelAdvisory.png",
    title: "WORLD TRAVEL ALERTS",
    github: "https://github.com/rdmcan/reactproject.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        "ReactJS"
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft="10px"
      >
        "graphQL"
      </Typography>,
      <Typography />,
      <Typography
        variant="overline"
        backgroundColor="#FF9999"
        padding={0.5}
        marginLeft="10px"
      >
        "express"
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#b0ddb3"
        padding={0.5}
        marginLeft="10px"
      >
        "MongoDB"
      </Typography>,
    ],
    description:
      "A web tool for travelers as a first step in planning any trip abroad. Travellers can query a list of advisories issued by the Government of Canada for any country across the globe. Also, users are able to list 3 types of advisories: by traveller, by region or sub-region.",
  },
  {
    type: "ASP.Net Core/ReactJS",
    imgSrc: "/images/projects/Employees.png",
    title: "EMPLOYEES CRUD App",
    github: "https://github.com/rdmcan/AspNetProject.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        ReactJS
      </Typography>,

      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#ff80ff"
        padding={0.5}
      >
        JAVASCRIPT
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#daa3a3"
        padding={0.5}
      >
        .NET CORE
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#b0ddb3"
        padding={0.5}
      >
        SQL SERVER
      </Typography>,
    ],
    description:
      "React JS Crud App with ASP.Net Core Web API using Entity Framework. I created a sample Employee Record Management system and perform CRUD operations on it, using a RESTful .NET Core 6.0 Web API with a SQL Server data set utilizing EF Core.",
  },
  {
    type: "C# console application",
    imgSrc: "/images/projects/jsoncsvxmlparser.png",
    title: "JSON CSV XML Parser",
    github: "https://github.com/rdmcan/JSON-_XML_CSV-Parser.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        C#
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft={"10px"}
      >
        JSON
      </Typography>,
      <Typography />,
      <Typography
        variant="overline"
        backgroundColor="#FF9999"
        padding={0.5}
        marginLeft={"10px"}
      >
        XML
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#b0ddb3"
        padding={0.5}
      >
        CSV
      </Typography>,
      <Typography
        variant="body1"
        color="gray"
        align="justify"
        marginTop={"5px"}
      ></Typography>,
    ],
    description:
      "This application query different information sources with various data formats such as JSON, XML, and CSV. These formats are widely used in several business domains, including distributed systems and data analytics. The data is extracted from the World Cities Database.",
  },
  {
    type: "JAVA app",
    imgSrc: "/images/projects/sakila.png",
    title: "RENTAL BUSINESS",
    github: "https://github.com/rdmcan/ProjectSakilaDB.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        JAVA
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft={"10px"}
      >
        MySQL
      </Typography>,
    ],
    description:
      "GUI front end to interact with the Sakila database in MySQL. Sakila is a sample database that is included with the MySQL Community. The database maintains information about customers, what items are available to rent, and details about the movies such as the names of actors, the year of release, and a short summary of the plot.",
  },
  {
    type: "WEB APP",
    imgSrc: "/images/projects/reimann_sum.png",
    title: "REIMANN SUM",
    github: "https://github.com/rdmcan/reimann-app.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        "TypeScript"
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft="10px"
      >
        "ReactJS"
      </Typography>,
      <Typography />,
    ],
    description:
      "This app helps you visualize Riemann sums. It gives you a method for computing an approximation of an integral where we split the region into small rectangles to find the area under the graph. You can Drag the slider to increase the number of rectangles used. Also, you can change the  range in the horizontal axe.",
  },
  {
    type: "C# app",
    imgSrc: "/images/projects/Quiddler.png",
    title: "Quiddler",
    github: "https://github.com/rdmcan/Quiddler.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        C#
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#ff80ff"
        padding={0.5}
        marginLeft={"10px"}
      >
        .NET Core
      </Typography>,
      <Typography
        variant="overline"
        backgroundColor="#b0ddb3"
        padding={0.5}
        marginLeft={"10px"}
      >
        Linq
      </Typography>,
    ],
    description:
      "A Quiddle card game that utlizes a .NET Core library assembly using C#. The library provides services like user inputs and generating all output in the console. Also, it integrates managed and unmanaged components into the .NET application.",
  },
  {
    type: "JAVA app",
    imgSrc: "/images/projects/companypaymentsystem.png",
    title: "Company Payment System",
    github: "https://github.com/rdmcan/payment-processing-system.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        JAVA
      </Typography>,
    ],
    description:
      "The app is a company payment processing system model. The system generates payments for invoices from customers and generates pay-checks for the employees. The Invoice includes invoice number, description, quantity, unit price and Total.",
  },
  {
    type: "ASP.Net Core/Vue",
    imgSrc: "/images/projects/vueproject.png",
    title: "E-Commerce website",
    github: "https://github.com/rdmcan/vueproject.git",
    languages: [
      <Typography
        variant="overline"
        backgroundColor="lightblue"
        padding={0.5}
        marginLeft="10px"
      >
        C#
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#b0ddb3"
        padding={0.5}
      >
        HTML
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#ff80ff"
        padding={0.5}
      >
        JAVASCRIPT
      </Typography>,
      <Typography
        variant="overline"
        marginLeft={"10px"}
        backgroundColor="#daa3a3"
        padding={0.5}
      >
        .NET CORE
      </Typography>,
    ],
    description:
      "An e-commerce app that uses ASP.Net Core technology for the backend http REST API, and the popular client side framework Vue.JS. for the frontend. The Client information is preserved in a SQL Database to keep track of inventory and orders.",
  },
  
];

export default Projects;
