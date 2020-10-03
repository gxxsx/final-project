import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Card,
  ListItem,
  Icon,
  SafeAreaView,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackground,
} from "@react-navigation/stack";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Main_Screen}
        />
        <Stack.Screen
          name="Info Feed"
          options={{ headerShown: false }}
          component={Info_Feed}
        />
        <Stack.Screen
          name="Getting Started"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed1}
        />
        <Stack.Screen
          name="Pandemic Trend?"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed2}
        />
        <Stack.Screen
          name="My First Plant"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed3}
        />
        <Stack.Screen
          name="Pro-tips On Gardening"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed4}
        />
        <Stack.Screen
          name="Blooming Family"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed5}
        />
        <Stack.Screen
          name="About Plantastic"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={Feed6}
        />
        <Stack.Screen
          name="About Guzman"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={bry_info}
        />
        <Stack.Screen
          name="About Rosario"
          options={{ headerStyle: { backgroundColor: "#DEFFF4" } }}
          component={ken_info}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main_Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.Main_Title}>Plantastic!</Text>
      <Image style={styles.logo} source={require("./assets/plant.png")} />

      <View style={[{ justifyContent: "center", width: "90%", margin: 10 }]}>
        <Text style={styles.Sub_Title}>
          Gardening may be a fun and relaxing way to get in touch with nature,
          but did you know that it also has plenty of health benefits? Gardening
          is an activity that’s good for both the mind and body. Plus, you get
          to eat the delicious fruits, vegetables and herbs that you grow. So,
          grab your tools and get in the dirt!
        </Text>
      </View>

      <View style={[{ width: "98%", height: 60 }]}>
        <Button
          color="#00C22D"
          title="Get Started."
          onPress={function () {
            navigation.navigate("Info Feed");
          }}
        />
      </View>
    </View>
  );
}

function Info_Feed({ navigation }) {
  return (
    <View style={styles.Info_Container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 21, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>Getting Started</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              style={styles.img_info}
              source={require("./assets/getting-started.jpg")}
            />
          </View>
          <Text style={styles.Sub_Title}>
            A small information before becoming a Plantito/Plantita!
          </Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("Getting Started");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>Pandemic Trend?</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              style={styles.img_info}
              source={require("./assets/pandemic-trend.jpeg")}
            />
          </View>
          <Text style={styles.Sub_Title}>
            How gardening and related hobbies became a trend during pandemic?
          </Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("Pandemic Trend?");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>My First Plant</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              style={styles.img_info}
              source={require("./assets/my-first-plant.png")}
            />
          </View>
          <Text style={styles.Sub_Title}>Let's start with the basics.</Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("My First Plant");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>Pro-tips On Gardening</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              style={styles.img_info}
              source={require("./assets/pro-tips.jpg")}
            />
          </View>
          <Text style={styles.Sub_Title}>
            Wonderful life-hacks to ease up them gardenings
          </Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("Pro-tips On Gardening");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>Blooming Family</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image
              style={styles.img_info}
              source={require("./assets/blooming-family.jpg")}
            />
          </View>
          <Text style={styles.Sub_Title}>
            Become a bonafide plantito/plantita? Here's what next.
          </Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("Blooming Family");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#DEFFF4",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.Info_Title}>About Plantastic</Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Image style={styles.logo} source={require("./assets/plant.png")} />
          </View>
          <Text style={styles.Sub_Title}>About Us.</Text>
          <Button
            color="#00C22D"
            title="View"
            onPress={function () {
              navigation.navigate("About Plantastic");
            }}
          />
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed1({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            What Is Gardening?
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed1-1.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Gardening is the practice of growing and cultivating plants as
            part of horticulture. In gardens, ornamental plants are often grown
            for their flowers, foliage, or overall appearance; useful plants,
            such as root vegetables, leaf vegetables, fruits, and herbs, are
            grown for consumption, for use as dyes, or for medicinal or cosmetic
            use. Gardening is considered by many people to be a relaxing
            activity.
            {"\n"}
            {"\n"}
            {"\t"}
            {"\t"}Gardening ranges in scale from fruit orchards, to long
            boulevard plantings with one or more different types of shrubs,
            trees, and herbaceous plants, to residential back gardens including
            lawns and foundation plantings, and to container gardens grown
            inside or outside. Gardening may be very specialized, with only one
            type of plant grown, or involve a variety of plants in mixed
            plantings. It involves an active participation in the growing of
            plants, and tends to be labor-intensive, which differentiates it
            from farming or forestry.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            What Does It Take To Be A Gardener?
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed1-2.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}There isn't much needed to be a gardener. However, if you will
            be taking a career out of it, you will be needing an associate's
            degree includes courses in plant culture, use of plants, pests and
            weeds, and plant nutrition. Bachelor's and master's degree programs
            delve further into the study of gardening, horticulture, and
            landscaping and usually include courses on plant physiology, plant
            diseases, and plant maintenance if you want to be a full-time and
            professional gardener.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Gardening As A Hobby
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed1-3.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Gardening is a great exercise for both the body and the mind.
            Apart from the obvious weight loss benefits, studies have proved
            that gardening decreases the chances of depression, lowers blood
            pressure and decreases cholesterol levels in blood. Gardening is
            also helpful when it comes to stress. It is a hobby that you should
            concentrate when you’re seeking relaxation and it would surely
            deliver just that.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed2({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Going Green While In Quarantine
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed2-1.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Even before the pandemic, indoor plants have been an exchange
            of conversation of plant lovers in social media. But as people stuck
            indoors, it seems like everyone is trying to bring nature in by
            filling their homes with different mixture of plants and turning to
            urban home gardening.
            {"\n"}
            {"\n"}
            {"\t"}
            {"\t"}Social media feeds seem to have grown greener over the course
            of the quarantine period — with stay at home folks flexing their
            potted plants and proudly calling themselves “plantitos” and
            “plantitas.”
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Plantito and Plantita Celebrities
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed2-2.png")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Even celebrities are the factors on the trend of gardening,
            having thousands followers being influenced to enter the world of
            gardening. Celebrities like Rocco Nacino, Solenn Heussaff, Aubrey
            Miles and Pauline Luna-Sotto are the most influential plantitos and
            plantitas during this quarantine. According to them that having many
            plants at home really reduces stress, anxiety, and a great passtime
            while being at home. It also adds more aesthetic on your homes.
            {"\n"}
            {"\n"}
            {"\t"}
            {"\t"}A cheeky portmanteau of plants and the tito and tita
            generation, the newly minted labels refer to those who acquired a
            green thumb in the last months, either by growing it the
            Instagram-worthy succulents or the sustainable fruits and vegetable
            plants.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed3({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Beginners guide to be the best plantita or plantito
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed3-1.jpeg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}Every day is a good day to start practicing a sustainable
            lifestyle; and a passion project like starting your own mini garden
            can be one step towards it. Plantitas and plantitos are becoming a
            popular term these days, with Filipinos on the lookout for new
            gardening tips and succulent vendors. It may have very well started
            as just an aesthetic for some, but subconsciously, in the manner of
            doing so, this eco-friendly pastime factors in on a bigger, greener
            advocacy.
            {"\t"}
            {"\n"}
            {"\n"}
            {"\t"}So, if you are one of those who are interested in green
            living, here are some ways how you can start your plant project
            today.
            {"\t"}
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Start with succulents and cacti
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed3-2.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}To many, taking care of succulents and cacti is the
            introduction to becoming a plantita or plantito. That is because it
            is easy to take care of, needing only minimum watering and
            maintenance, affordable, and does not take up plenty of space. They
            also make for a cute addition to any windowsill or work desk. Not to
            mention the said benefits of having one in the room, such as
            purifying the air and improving humidity. If you are interested to
            start a plant project, getting a succulent or cactus may be a good
            first step.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Go for vertical gardening
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed3-3.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}Another trend that beginners can get into is vertical
            gardening. This is ideal for people who have limited space as you
            only need a wall, a ledge in a balcony, or even a small part of the
            rooftop, and you can already grow a vertical garden. Edible plants,
            individually-potted herbs like basil, chives, cilantro, dill, and
            mint, as well as garden vegetables such as peas, squash, tomatoes,
            and pole beans, are good for this type of set up.
            {"\t"}
            {"\n"}
            {"\n"}
            {"\t"}
            Some have been taking it a step further in the green direction by
            using whatever plastic waste they have at home, like soda or water
            bottles, and using it as pots for their vegetables.
            {"\t"}
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed4({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            5 Tips For Easy Plant Care
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Plant care isn’t always the easiest when you’re unsure of
            where to start. Once you learn plant care basics and find a routine,
            you’ll notice all the wonderful benefits of being a plant parent.
            Research has shown that plants can help you breathe happier and
            boost your mood just by having them around. Whether you’re decking
            out your room or office with houseplants, we’ve highlighted some top
            plant care tips to assist you in taking care of your new plant
            babies. Following these plant care instructions will come to you as
            second nature very soon!
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            #1 Feel the Soil to Know How Often to Water Your Plants
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed4-1.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}For potted plants at home, you may be unsure of how often to
            water them. For most plants, the golden rule is to see if the first
            inch or so of soil is dry. If dry, this is an indication that the
            plant needs water. If there are leaves that have shriveled or are
            dry/discolored, the plant might need a little extra water than a
            regular routine.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            #2 Smaller Plants Are the Fastest Growing Plants
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed4-2.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}When buying your chosen plant, it’s always better to purchase
            a smaller plant over a larger one. This is because a smaller plant
            will be able to get more established in its home and have a larger
            ratio of roots to top growth. A larger plant will not continue to
            grow until its roots catch up with the top growth.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            #3 Don’t Repot Your Plants by Pulling Them!
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed4-3.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}Pulling a plant out will not only ruin the stems, leaves, and
            blossoms but will also tear roots. Damaged roots need to heal before
            they can fully take in nutrients, so pulling your plant out of its
            pot is never a good plan. Check out our guide on repotting a plant
            to guarantee no damage to your plant.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            #4 Dust Your Plants!
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed4-4.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}Plants that collect too much dust on their leaves can’t get
            the sunlight they may need to survive, especially green plants and
            plants with big leaves. A few times per year, use a wet cloth and
            lightly wipe down the leaves of your plants on both sides.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            #5 Houseplants Love Stability
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed4-5.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}We recommend scoping out where you’ll put your plant in your
            house before picking one out. Plants thrive once they are used to
            their surroundings and finding a spot with the right amount of light
            is important. Temperature is also important. Fluctuating
            temperatures will shock your plant and therefore lead to the plant
            not being able to develop and maybe even die. Most plants prefer
            temperatures of 27º–37ºC.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed5({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Expanding your home garden
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_info}
            source={require("./assets/feed5-1.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}Now you have put home gardening into practice, there are ways
            to use your home gardening skills either for profit or just a
            regular activity. Expanding your home garden is a start, adding more
            plants to take care of is a huge responsibility to shoulder so you
            will be needing extra effort and time to take care of so many
            plants. You can try to grow some vegetable and fruit plants, so your
            ingredients will be fresh and you can save up some money by not
            buying them anymore in supermarket or groceries. You can also grow
            orchids which are more challenging types of flowers and can use them
            as a decoration on your home.
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Making Some Profits With Your Plants
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.img_feed}
            source={require("./assets/feed5-2.jpg")}
          />
        </View>

        <View
          style={{
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}Due to high demand of plants this quarantine, making a
            business out of plant selling is not a bad idea. It can be a great
            source of some cash during this time, and who knows that if you can
            make it big why not make it a full-time business. To cope with the
            varied lockdowns in the country that forced people to stay home for
            the past six months, a new wave of “plantitos” and “plantitas”—or
            people between the age of 22 and 38 who have turned to
            gardening—have kept themselves busy by caring for plants and finding
            new ornamentals for their collection.
            {"\n"}
            {"\n"}
            {"\t"}But these quarantine trinkets have also given rise to
            irregularities in what was formerly a niche community of gardeners,
            with prices of plants being jacked up by as much as 3,000 percent,
            and with plant sellers reporting cases of theft.
            {"\t"}
          </Text>
        </View>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function Feed6({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            About Plantastic{"\n"}
          </Text>
          <Text style={{ fontSize: 24, textAlign: "center", color: "#000" }}>
            Plantastic is a small guide dedicated to gardening. Due to rising
            popularity of people taking gardening as a hobby or a starter
            business during the pandemic. We have taken the initiative to launch
            a platform for people who would like to be into the gardening trend.
            {"\n"}
            {"\n"}
            We started with five small articles, as a pilot test of the app to
            ensure that the vision of the app as a dedicated platform for the
            gardeners would be achieved in the near future.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.Sub_Title}>
            Plantastic is a mobile app created by students as a project. All
            assets and contents of the app belong to their rightful owners, and
            was used under the copyright fair use policy as an educative project
          </Text>
        </View>

        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 32, textAlign: "center" }}>Created By:</Text>
        </View>

        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("./assets/brycircle.png")}
            />
          </View>
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Bryan Joel Guzman
          </Text>
          <Text style={{ fontSize: 24, textAlign: "center", color: "#000" }}>
            Computer Science Student
          </Text>
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}
          </Text>
          <View style={[{ width: "98%", height: 60 }]}>
            <Button
              color="#00C22D"
              title="More Info About Guzman"
              onPress={function () {
                navigation.navigate("About Guzman");
              }}
            />
          </View>
        </View>

        <View style={{ padding: 20, backgroundColor: "#C9FFED" }}></View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            margin: 1,
            width: 450,
            heigth: 200,
            backgroundColor: "#FFF",
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: {
              width: 30,
              height: 30,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 5,
          }}
        >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("./assets/kencircle.png")}
          />
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            Kenneth Edison Rosario
          </Text>
          <Text style={{ fontSize: 24, textAlign: "center", color: "#000" }}>
            Computer Science Student
          </Text>
          <Text style={styles.feed_text}>
            {"\t"}
            {"\t"}
          </Text>
          <View style={[{ width: "98%", height: 60 }]}>
            <Button
              color="#00C22D"
              title="More Info About Rosario"
              onPress={function () {
                navigation.navigate("About Rosario");
              }}
            />
          </View>
        </View>

        <View style={{ padding: 40, backgroundColor: "#C9FFED" }}></View>
      </ScrollView>
    </View>
  );
}

function bry_info({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          margin: 10,
          width: 500,
          height: 700,
          backgroundColor: "#FFF",
          shadowColor: "#000",
          borderRadius: 20,
          shadowOffset: {
            width: 30,
            height: 30,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 5,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="contain"
          source={require("./assets/Slide1.jpg")}
        />
      </View>
    </View>
  );
}

function ken_info({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 10,
          margin: 10,
          width: 500,
          height: 700,
          backgroundColor: "#FFF",
          shadowColor: "#000",
          borderRadius: 20,
          shadowOffset: {
            width: 30,
            height: 30,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 5,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          resizeMode="contain"
          source={require("./assets/Slide2.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9FFED",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "#C9FFED",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  img_about: {
    width: "99%",
    marginBottom: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  Main_Title: {
    fontSize: 70,
    justifyContent: "center",
    margin: 30,
  },
  Sub_Title: {
    color: "#818282",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "justify",
    marginBottom: 50,
  },
  Button_Style: {
    width: "90%",
    margin: 10,
  },
  Info_Container: {
    flex: 1,
    backgroundColor: "#C9FFED",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  Info_Title: {
    color: "#818282",
    fontSize: 45,
    justifyContent: "center",
    textAlign: "justify",
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: "#C9FFED",
    marginHorizontal: 10,
  },
  img_info: {
    justifyContent: "center",
    alignItems: "center",
    width: "99%",
    height: 370,
  },
  img_feed: {
    justifyContent: "center",
    alignItems: "center",
    width: "99%",
  },
  feed_text: {
    color: "#000",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "left",
  },
});
