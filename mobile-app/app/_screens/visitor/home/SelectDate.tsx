import { View, Text, StyleSheet, SafeAreaView, LayoutChangeEvent } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { VisitorHomeStackParamList } from "./VisitorHomeNavigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Calendar from "react-native-calendar-range-picker";
import Button from "@/components/shared/Button";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import TimeSlider from "@/components/shared/TimeSlider";

const SelectDate = () => {
  const navigation = useNavigation<NavigationProp<VisitorHomeStackParamList>>();
  const [startTime, setStartTime] = useState([17]);
  const [endTime, setEndTime] = useState([19]);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  function convertStepToHoursMinutes(step: number): { hours: number; minutes: number } {
    if (step < 0 || step > 47) {
      throw new Error("Step must be within 0 to 47");
    }

    const hours = Math.floor(step / 2);
    const minutes = (step % 2) * 30;
    return { hours, minutes };
  }

  function createDateWithTime(dateString: string, timeStep: number): Date {
    // Convert the date string to a Date object
    const date = new Date(`${dateString}T00:00:00`);
    // Validate the date
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string format");
    }

    // Convert step to hours and minutes
    const { hours, minutes } = convertStepToHoursMinutes(timeStep);

    // Set the hours and minutes on the date
    date.setHours(hours, minutes, 0, 0);

    return date;
  }

  //   function createDateFromTime(date: string, timeStep: number) {
  //     const startDate = createDateWithTime(date, startStep);
  //     return { startDate, endDate };
  //   }

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
    if (!startDate || !endDate) return;
    const d1 = createDateWithTime(startDate, startTime[0]);
    const d2 = createDateWithTime(endDate, endTime[0]);
    console.log({ d1, d2 });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCalendarContainer}>
        <Calendar
          onChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
            console.log({ startDate, endDate });
          }}
          disabledBeforeToday
        />
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.slider}>
          <Text>Start {startTime}</Text>
          <TimeSlider values={startTime} onValuesChange={(values) => setStartTime(values)} />
        </View>
        <View style={styles.slider}>
          <Text>End {endTime}</Text>
          <TimeSlider values={endTime} onValuesChange={(values) => setEndTime(values)} />
        </View>
      </View>

      <Button style={styles.button} disabled={!startDate || !endDate} onPress={handleSave}>
        <Text>Save</Text>
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
    // backgroundColor: "red",
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
