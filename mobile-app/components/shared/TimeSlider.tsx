import Colors from "@/constants/Colors";
import MultiSlider, {MultiSliderProps} from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";
import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";

interface TimeSliderProps extends MultiSliderProps {

}

const TIME = { min: 0, max: 47 };
const SliderPad = 12;
const TimeSlider = (props: TimeSliderProps) => {
  const { min, max } = TIME;
  const [width, setWidth] = useState(280);
  const [selected, setSelected] = useState<number[]>([min]);

  if (!selected) {
    setSelected([min]); // we are only selected min, since it is single slider
  }

  // Callbacks
  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width - SliderPad * 2);
  };
  const onValuesChangeFinish = (values: number[]) => {
    console.log({ values });
    setSelected(values);
  };

  function convertToAmPmTime(time: number): string {
    if (time < 0 || time > 49) {
      throw new Error("Time must be within 0 to 49");
    }

    // Calculate the number of whole hours and the remainder
    const hours = Math.floor(time / 2);
    const isHalfPast = time % 2 !== 0;

    // Determine the hour for AM/PM format
    let hourForAmPm = hours % 12;
    if (hourForAmPm === 0) hourForAmPm = 12; // Adjust for 12 AM/PM

    // Determine whether it's AM or PM
    const suffix = hours >= 12 ? "PM" : "AM";

    // Construct the time string
    const minutes = isHalfPast ? "30" : "00";
    return `${hourForAmPm}:${minutes} ${suffix}`;
  }

  return (
    <View onLayout={onLayout} style={styles.container}>
      <MultiSlider
        {...props}
        min={min}
        max={max}
        allowOverlap
        // values={selected}
        sliderLength={width}
        // onValuesChangeFinish={onValuesChangeFinish}
        // onValuesChange={onValuesChangeFinish}
        // enableLabel={true}
        customMarker={() => (
          <View style={styles.marker}>
            <Text style={styles.markerText}>{convertToAmPmTime(props.values ? props.values[0] : 0)}</Text>
          </View>
        )}
        markerOffsetY={5}
        trackStyle={{
          height: 10,
          borderRadius: 8,
        }}
        selectedStyle={{
          backgroundColor: Colors.light["primary-3"],
        }}
        unselectedStyle={{
          backgroundColor: "#ffffff",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    alignItems: "center",
  },
  marker: {
    width: 70,
    height: 24,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderColor: Colors.light["primary-3"],
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  markerText: {
    color: Colors.light["primary-3"],
  },
});

export default TimeSlider;
