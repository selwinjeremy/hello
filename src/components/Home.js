import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import desk from '../images/green.jpeg'
import family from '../images/Family.JPG'
import leftFace from '../images/jer-mya.jpeg'
import rightFace from '../images/jer-almafi.jpeg'

const Home = forwardRef(({ }, ref) => {
    return (
        <div ref={ref}>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(${desk})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: 4,

                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
                        borderRadius: 3,
                        padding: 4,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h1" component="h1" sx={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>
                        Welcome to My Portfolio!
                    </Typography>
                    <Typography variant="h4" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "white" }}>
                        Keep scrolling to learn more about me! 🙂
                    </Typography>
                    <Box
                    sx={{

                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 4,
                        gap: 6, // Adjust the spacing between images as needed
                    }}
                >
                    <Box
                        component="img"
                        src={leftFace}
                        alt="Image 1"
                        sx={{
                            width: 150, // Adjust the size as needed
                            height: 150,
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                    <Box
                        component="img"
                        src={family}
                        alt="Image 2"
                        sx={{
                            width: 150, // Adjust the size as needed
                            height: 150,
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                    <Box
                        component="img"
                        src={rightFace}
                        alt="Image 3"
                        sx={{
                            width: 150, // Adjust the size as needed
                            height: 150,
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                </Box>

                
            </Box>

        </div>
    );
});

export default Home;