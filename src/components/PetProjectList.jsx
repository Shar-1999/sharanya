import React, { useState, useEffect } from "react";
import { Typography, Box, Button, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import '../styles/list.css';

const PetProjectList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const experienceItems = {
        "Book Tracker Webpage": {
            projectTitle: "",
            desc: [
                "This project explores React's useState and hooks by allowing users to manage a book tracking list.",
                "Technologies: React, JavaScript, HTML, CSS",
                "IDE & Tools: VS Code, Node.js, npm, Git, GitHub"
            ]
        },
        "Character recognition / Object detection / Face detection": {
            projectTitle: "",
            desc: [
                "These projects were explored for learning purposes to understand and apply machine learning techniques in real-world scenarios.",
                "Technologies: Machine learning algorithms, python",
                "IDE & Tools: Ubuntu Terminal with Python Interpreter"
            ]
        },
        "Industrial Visit": {
            projectTitle: "",
            desc: [
                "This project implements login and logout functionality using PHP, MySQL for storage, and HTML for the frontend.",
                "Technologies: HTML, CSS, PHP, SQL",
                "IDE & Tools: VS Code, XAMPP, phpMyAdmin, Apache Server"
            ]
        },
        "Breast Cancer detection": {
            projectTitle: "",
            desc: [
                "This analysis uses machine learning to predict whether breast cancer is benign or malignant.",
                "Technologies: Machine learning classification algorithms, Python.",
                "IDE & Tools: Anaconda - Spyder, Jupyter Notebook"
            ]
        },
        
    };

    const projects = Object.entries(experienceItems);
    const totalProjects = projects.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
    };

    return (
        <Box sx={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '2rem',
            color: 'white'
        }}>
            {/* Project Content */}
            <Box sx={{
                minHeight: '300px',
                padding: '2rem',
                borderRadius: '8px',
                // backgroundColor: 'rgba(30, 30, 30, 0.8)',
                mb: 2,
                textAlign: 'left'
            }}>
                <Typography variant="h5" gutterBottom>
                    <b>{projects[currentIndex][0]}</b>
                </Typography>
                <ul className="job-description">
                    {projects[currentIndex][1].desc.map((descItem, i) => (
                        <li key={i}>{descItem}</li>
                    ))}
                </ul>
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                mt: 2
            }}>
                <IconButton 
                    onClick={handlePrev}
                    sx={{ 
                        color: 'white',
                        backgroundColor: '#a78bfa',
                        '&:hover': { backgroundColor: '#8b5cf6' }
                    }}
                >
                    <ChevronLeft />
                </IconButton>
                
                {projects.map((_, index) => (
                    <Button
                        key={index}
                        variant={currentIndex === index ? "contained" : "outlined"}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            minWidth: '40px',
                            color: 'white',
                            borderColor: '#a78bfa',
                            backgroundColor: currentIndex === index ? '#a78bfa' : 'transparent',
                            '&:hover': {
                                backgroundColor: currentIndex === index ? '#8b5cf6' : 'rgba(167, 139, 250, 0.1)'
                            }
                        }}
                    >
                        {index + 1}
                    </Button>
                ))}
                
                <IconButton 
                    onClick={handleNext}
                    sx={{ 
                        color: 'white',
                        backgroundColor: '#a78bfa',
                        '&:hover': { backgroundColor: '#8b5cf6' }
                    }}
                >
                    <ChevronRight />
                </IconButton>
            </Box>
        </Box>
    );
};

export default PetProjectList;
