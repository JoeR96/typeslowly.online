import * as React from 'react';
import { Grid,Box } from '@mui/material';
import { motion } from "framer-motion";
import {homeImages,FFImages,AMImages} from '../data'

  
const Layout = () => {
    const imageCollection = [homeImages,FFImages,AMImages]
const [index,setIndex] = React.useState(0);
const [currentImages, setCurrentImages] = React.useState(imageCollection[index]);


  React.useEffect(() => {
    
    setCurrentImages(imageCollection[index])
    return () => {
      
    }
  }, [index])

    return (  
        
        <Box sx={{ width: '100%' }}
        >
            <Grid container 
                      style={{margin: '0%'}}
                               >
                            {currentImages.map((x,index)  => {
                            return( 
                            
                                    <Grid 
                                    item
                                    xs={3} 
                                    md={3} 
                                    xl={3} 
                                    lg={3}
                                  >
                                       <motion.img src={x}

                                        whileHover={{
                                           opacity:1,
                                   
                                           scale: 1.5,
                                           textShadow: "0px 0px 4px gray"
                                         }}
                                       style={{display:'block',
                                         border:'5px red',
                                         margin: '0 auto',
                                         padding: '0%',
                                         width:'100%'
                                   }}
                                   onClick={() => setIndex(index)}

                                       ></motion.img>
                                     
                                   </Grid> 
                            )
                            })}
                </Grid>
            </Box>
    )       
}

export default Layout
