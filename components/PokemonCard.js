import {View,Text,StyleSheet,Platform,Image} from 'react-native';


const getTypeDetails = (type) =>{
	switch(type.toLowerCase()){
      case "electric":
      	return {borderColor:"#FFD700",emoji:"⚡"};
      case "water":
      	return {borderColor:"#6493EA",emoji:"💧"};
      case "fire":
      	return {borderColor:"#FF5733",emoji:"🔥"};
      case "grass":
      	return {borderColor:"#66CC66",emoji:"🌾"};
      default:
      	return {borderColor:"#A0A0A0",emoji:"❓"};
	}
}
export default function PokemonCard({
	name,
	image,
	type,
	hp,
	moves,
	weaknesses
}){
	const {borderColor,emoji} = getTypeDetails(type);

	return <View style={styles.cardContainer}>
     <View style={styles.nameContainer}>
     <Text style={[styles.name,{fontWeight:900}]}>{name}</Text>
     <Text style={[styles.hp,{fontWeight:100}]}>❤{hp}</Text>
     </View>
     <Image source={image} style={styles.image} resizeMode='contain' accessibilityLabel={`${name} pokemon`}  />
     <View style={styles.typeContainer}>
     <View style={[styles.badge,{borderColor}]}>
     <Text style={styles.typeEmoji}>{emoji}</Text>
     <Text style={styles.typeText}>{type}</Text>
     </View>
     </View>
     <View style={styles.movesContainer}>
     <Text style={[styles.movesText,{fontWeight:200}]}><Text style={{fontWeight:900,color:borderColor}}>Moves:</Text> {moves.join(", ")}</Text>
     </View>
     <View style={styles.weaknessContainer}>
     <Text style={[styles.weaknessText,{fontWeight:200}]}><Text style={{fontWeight:900,color:borderColor}}>Weaknesses:</Text> {weaknesses.join(", ")}</Text>
     </View>
	</View>
}

const styles = StyleSheet.create({
	cardContainer:{
		backgroundColor:'white',
		borderRadius:16,
		padding:16,
		margin:16,
        borderWidth:2,
        borderColor:"black",
		...Platform.select({
          ios:{
          	shadowOffset: {width:2,height:2},
          	shadowColor:"white",
          	shadowOpacity:0.3,
          	shadowRadius:4,
          },
          android:{
          	elevation:5,
          }
		})
	},
	image:{
		width:"100%",
		height:300,
		
		marginBottom:16
	},
	nameContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginBottom:32
	},
	name:{
     fontSize:30,
    
	},
	hp:{
       fontSize:22
	},
	typeContainer:{
        marginBottom:40,
        alignItems:"center",

	},
	badge:{
		flexDirection:'row',
		alignItems:"center",
		paddingVertical:6,
		paddingHorizontal:12,
		borderRadius:20,
		borderWidth:4
        
	},
	typeEmoji:{
		marginRight:12,
		fontSize:30
	},
	typeText:{
		fontSize:22,
		fontWeight:"bold"
	},
	movesContainer:{
		marginBottom:16,

	},
	movesText:{
		fontSize:22,
		
	},
	weaknessContainer:{
       marginBottom:8
	},
	weaknessText:{
      fontSize:22
	}
})