import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { NewsDetail } from "../../../components/homescreen/detail/detail";

export default function DetailNews({ navigation }) {
  return (
    <SafeAreaView>
      <NewsDetail />
    </SafeAreaView>
  );
}
