import React , {useEffect, useState} from "react";
import {Image ,StyleSheet,Dimensions, View ,ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'

var {width} = Dimensions.get('window');

const Banner = () => {
    const [bannerData , setBannerData] = useState([]);
     useEffect(()=> {
         setBannerData([
                 "https://di-uploads-pod25.dealerinspire.com/jaguarofnaperville/uploads/2021/07/Jaguar-EV-Service.jpg",
                 "https://www.vwfsfleet.co.uk/app/uploads/2019/04/ev-smr-header.jpg",
                 "https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/chuttersnap-xjlshl0hiik-unsplash.jpg?itok=V3jZ1PqR",
                 "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/eVeUoEPaiK2joSNd25XwhYWaJWIZ56vQZU0NNABS.jpg",
                 "https://di-uploads-pod11.dealerinspire.com/brazosvalleyvolkswagen/uploads/2021/03/ID.4_reserve-banner-1600x500.png"
         ])
         return () => {
             setBannerData([])
         }
     },[])

     return (
         <ScrollView>
         <View style={styles.container}>
               <View style={styles.swiper}>
                   <Swiper showsButtons={false}
                   style={{height:170}}
                   autoplay={true}
                   autoplayTimeout={4}
                   dotColor={'white'}
                   >
                        {
                            bannerData.map((item)=> {
                               return (
                                   <Image 
                                     key={item}
                                     resizeMode= 'center'
                                     source={{uri:item}}
                                     style={styles.imageBanner}
                                   />        
                               )
                            })
                        }
                   </Swiper>
               </View>
         </View>
         </ScrollView>

     )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    swiper:{
        width:width,
        alignItems:"center",
        marginTop:10
    },
    imageBanner: {
        height: 155 ,
        width:width - 15,
        borderRadius:10,
        marginTop:5,
        marginHorizontal:8
    }
})

export default Banner 

