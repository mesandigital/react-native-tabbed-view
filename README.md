# React Native Starter UI Kit (Tabbed Application)

React Native Tabbed View For iOS and Android Apps

Tabbed applications are used to support user interfaces where multiple screens can be accessed in no particular order.


## Dependencies Used

1) <a href="https://github.com/aksonov/react-native-router-flux">React Native Router</a><br>
2) <a href="https://github.com/oblador/react-native-vector-icons">React Native Vector Icons</a>

## Installation

```sh
npm install
react-native link
```

## Setting the tabs for each section

```javascript
  let iconColor = (Platform.OS === "ios") ? "#9A9A9A" : "rgba(255,255,255,.8)";
  let iconSelectedColor = (Platform.OS === "ios") ? "#2D303C" : "#fff";

  let FirstIcon = {type: Icons.Entypo, name: "home", title: "Home", size: 20, color: iconColor, selected: iconSelectedColor};

  .....

  <Scene key="tab1" initial title="First" icon={TabIcon} iconInfo={FirstIcon}>
        <Scene key="first_view" component={First} title={FirstIcon.title}/>
  </Scene>

```

## Demo

<a href="https://appetize.io/app/7h0ut69mh9mjt0ze785dzrphh8?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3" target="_blank">iOS</a>
<br/>
<a href="https://appetize.io/app/gwj25t5mgqxn8y99um9z8vpzk8?device=nexus5&scale=75&orientation=portrait&osVersion=7.0" target="_blank">Android</a>


## Screenshots

<img src="https://github.com/eandmdigital/react-native-tabbed-view/blob/master/screenshots/iOS.png" alt="iOS" height="500" width="300" align="left" style="border: 1px solid black;">

<img src="https://github.com/eandmdigital/react-native-tabbed-view/blob/master/screenshots/Android.png" alt="Android" height="500" width="300" align="left" style="border: 1px solid black;">
