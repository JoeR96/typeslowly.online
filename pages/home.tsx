import * as React from 'react';
import { Grid,Box } from '@mui/material';
import { motion } from "framer-motion";
import {homeImages,FFImages,AMImages,LSImages,LogoImages,LF,PortraitImages,TPImages} from '../data'
import Image from 'next/image';
  
const Layout = () => {
  const imageCollection = React.useMemo(() => [homeImages,FFImages,AMImages,LSImages,LogoImages,LF,PortraitImages,TPImages], []);

const [index,setIndex] = React.useState(0);
const [currentImages, setCurrentImages] = React.useState(imageCollection[index]);


  React.useEffect(() => {
    if(index < imageCollection.length)
    {
        setCurrentImages(imageCollection[index])
    }    
    return () => {
      
    }
  }, [imageCollection,index])

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
                                    key={index}
                              
                                  >
                                <div>
                                  <img src={"http://d7dhx22ybeiu9.cloudfront.net/" + x}
                                    // width={400}
                                    // height={400}
                                    key={index}
                                    // whileHover={{
                                    //    opacity:1,

                                    //    scale: 1.5,
                                    //    textShadow: "0px 0px 4px gray"
                                    //  }}
                                    style={{
                                      display: 'block',
                                      border: '5px red',
                                      margin: '0 auto',
                                      padding: '0%',
                                      width: '100%'
                                    }}
                                    onClick={() => setIndex(index)}

                                  ></img>
                               </div>
                                     
                                   </Grid> 
                            )
                            })}
                </Grid>
            </Box>
    )       
}

export default Layout
