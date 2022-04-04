import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { SCREEN_NAMES } from "../../constants/screenNames";
import { RootStackParamList } from "../../navigations/RootStack.props";

export type Props = {
    route: RouteProp<RootStackParamList, SCREEN_NAMES.PROFILE_SCREEN>,
    navigation: StackNavigationProp<RootStackParamList, SCREEN_NAMES.PROFILE_SCREEN>,
};