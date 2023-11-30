import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';


const RatingComponent = ({ n }) => {
    const integerN = Math.floor(n);
    const starImages = [];
  
    // Generate an array of star images based on the integer value of n
    for (let i = 0; i < integerN; i++) {
      starImages.push(
        <Image
          key={i}
          source={require('./assets/starimg.png')}
          style={styles.starImage}
        />
      );
    }

    return (
        <View style={styles.container}>
          {starImages.map((starImage, index) => (
            <React.Fragment key={index}>{starImage}</React.Fragment>
          ))}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      starImage: {
        width: 30,
        height: 30,
        marginRight: 5, // Add spacing between stars as needed
      },
    });
    
    

    
    
    




    // <View style={styles.container}>

    /**
     * 
     * Receive a list of integers from 1 to 5, get avg and display img
     * 
     * if 1.5, display 1 star
     * 
     */
  



    //  const RatingComponent = ({n}) => {
    //     const integerN = Math.floor(n);
    
    
    //   return (
    //     <View>
    //       {/* <Text> THIS IS A TEST</Text> */}
         
    //       <Image source={require("./assets/starimg.png")} 
          
    //       style={{
    //         width: 30,
    //         height: 30
    //       }}
          
    //       /> 
          
    
    //     </View>
    
    //   );
    // };
    

export default RatingComponent;
