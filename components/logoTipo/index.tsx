import { View, Image } from "react-native";
import Styles from "./style";

const LogoBear = () =>{
    return (
        <View style={Styles.container}>
            <Image style={Styles.bearLogo}
                source={require('../../public/images/teddy.png')}
            />

        </View>
    )
}


export default LogoBear;