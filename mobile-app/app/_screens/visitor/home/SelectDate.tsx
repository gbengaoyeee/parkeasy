import { View, Text, StyleSheet, SafeAreaView, LayoutChangeEvent, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Calendar from "react-native-calendar-range-picker";
import Button from "@/components/shared/Button";
import TimeSlider from "@/components/shared/TimeSlider";
import { createDateWithTime } from "@/app/utils/reusable";

interface RouteParams {
  startDate: string;
  endDate: string;
  startTime: number;
  endTime: number;
  onUpdate: (startDate: Date, endDate: Date, startTime: number, endTime: number) => void;
}

const SelectDate = () => {
  const route = useRoute();
  const param = route.params as RouteParams;
  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();

  const [startTime, setStartTime] = useState([param.startTime]);
  const [endTime, setEndTime] = useState([param.endTime]);
  const [startDate, setStartDate] = useState<string>(param.startDate);
  const [endDate, setEndDate] = useState<string>(param.endDate);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color={Colors.light["primary-3"]} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSave = () => {
    if (!startDate || !endDate) {
      return;
    }
    param.onUpdate(
      new Date(`${startDate}T00:00:00`),
      new Date(`${endDate}T00:00:00`),
      startTime[0],
      endTime[0]
    );
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCalendarContainer}>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          onChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          disabledBeforeToday
        />
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.slider}>
          <Text>Start: </Text>
          <TimeSlider values={startTime} onValuesChange={(values) => setStartTime(values)} />
        </View>
        <View style={styles.slider}>
          <Text>End:</Text>
          <TimeSlider values={endTime} onValuesChange={(values) => setEndTime(values)} />
        </View>
      </View>

      <Button style={styles.button} disabled={!startDate || !endDate} onPress={handleSave}>
        <Text style={{ color: "white" }}>Save</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  mainCalendarContainer: {
    flexGrow: 4,
    height: 100,
    marginBottom: 10,
  },
  timeContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexGrow: 0,
    height: 60,
    marginBottom: 15,
  },
  slider: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 24,
    paddingHorizontal: 15,
  },
});
export default SelectDate;
