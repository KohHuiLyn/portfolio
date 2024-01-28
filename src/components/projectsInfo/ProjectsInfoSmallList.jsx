import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";


const getCustomOptions = () => {
  
  const items = [
    {
      id: 1,
      title: "Deep Learning",
      subMenu: "I created a GAN that trained on CIFAR10 images which was able to produce convincing looking results. I also did Reinforcement Learning to land Open AI's LunarLanderV2. I also created various Image Recognition models for the FashionMNIST and CIFAR10 datasets.",
    },
    {
      id: 2,
      title: "Machine Learning",
      subMenu: "I created a Time Series model to predict Air Pollution Levels, and used Unsupervised Learning to do Customer Segmentation (Clustering). I also created Classification models to determine whether mushrooms are edible or poisonous, and also a Plant Disease classfier. I made a Regression Model that predicted housing prices in King County.",
    },
    {
      id: 3,
      title: "Full Stack Development",
      subMenu: "I developed a POS and Admin Dashboard system for my internship company using NextJS (React) and TypeORM/MySQL. I also had many other experiences doing full stack like my DevOps module, Backend Development module,  or Final Year Project (The Third Eye), where I mostly used JavaScript and MySQL or FLASK, Postgres SQL and deployed on Heroku ",
    },
    {
      id: 4,
      title: "Data Cleaning and Analysis",
      subMenu: "I learnt how clean Data using Microsoft Excel and Python. I also learnt how to create charts using Tableau and Python using packages like Seaborn and Matplotlib",
    },    
    {
      id: 5,
      title: "SCRUM Project Framework",
      subMenu: "Most of my projects were done using the SCRUM project framework and I am extremely familiar with working in sprints.",
    },
  ];
  return items;
};

function CustomNestedList() {
  const [open, setOpen] = useState({});

  const items = getCustomOptions();

  const handleClick = (id) => {
    setOpen((prevState) => ({ [id]: !prevState[id] }));
  };

  return (
    <div style={{maxHeight: "100%", overflow:"auto"}}>
    <List >
      {items.map((item) => {
        return (
          <>
            <ListItemButton onClick={() => handleClick(item.id)}>
              <ListItemText primary={item.title} />
              {open[item.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton className="pl-4">
                  <ListItemText primary={item.subMenu} />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
    </div>

  );
}

export default CustomNestedList;