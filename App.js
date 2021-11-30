import React from 'react';
import {StyleSheet, Text, View, Linking, SafeAreaView} from 'react-native';
import {
  NativeRouter,
  Route,
  Link,
  Routes,
  useNavigate,
} from 'react-router-native';

import {
  CornershopThemeProvider,
  TextLink,
  Button,
  ArIcon,
  PointIcon,
  PlusOnlyIcon,
  ArrowNextIcon,
  ArrowPrevIcon,
  Pagination,
  MobilePageContainer,
  Progress,
} from '@capgemini-aie/cornershop-component-library';

const About = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <TextLink onPress={() => navigate('/')}>Home</TextLink>
      </View>
      <View style={styles.container}>
        <Text>
          This is About page and on this page I TextLink is used as Text and
        </Text>
      </View>
    </SafeAreaView>
  );
};

const SmallButtons = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView>
      <View style={styles.center}>
        <Pagination dots={5} activeDot={0} />
        <View style={styles.container}>
          <Button small onPress={() => alert('clicked')}>
            Primary
          </Button>
        </View>
        {/* <View style={styles.container}>
          <Button small disabled>
            Primary Disabled
          </Button>
        </View>
        <View style={styles.container}>
          <Button small onPress={() => alert('clicked')} secondary>
            Secondary
          </Button>
        </View>
        <View style={styles.container}>
          <Button small secondary disabled>
            Secondary Disabled
          </Button>
        </View>*/}
      </View>
    </SafeAreaView>
  );
};

const onClick = () => alert('clicked');

const Home = () => {
  const navigate = useNavigate();
  return (
    <SafeAreaView>
      <View style={styles.nav}>
        <TextLink
          onPress={() => navigate('/about')}
          iconLeft={<ArrowPrevIcon size={10} link />}
          iconRight={<ArrowNextIcon size={10} link />}>
          About Us
        </TextLink>
        <TextLink onPress={() => navigate('/small-buttons')}>
          Small Buttons
        </TextLink>
        <TextLink onPress={() => navigate('/flex')}>Flex</TextLink>
        <TextLink onPress={() => Linking.openURL('https://www.google.co.uk')}>
          Google
        </TextLink>
      </View>
      <View style={styles.container}>
        <Button onPress={() => alert('clicked')}>Primary</Button>
      </View>
      <View style={styles.container}>
        <Button disabled>Primary Disabled</Button>
      </View>
      <View style={styles.container}>
        <Button onPress={() => alert('clicked')} secondary>
          Secondary
        </Button>
      </View>
      <View style={styles.container}>
        <Button secondary disabled>
          Secondary
        </Button>
      </View>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Button size={64} round={true} onPress={onClick}>
            <ArIcon size={64} />
          </Button>
          <Button size={64} round transparent onPress={onClick}>
            <PointIcon size={48} />
          </Button>
          <Button size={88} round onPress={onClick}>
            <PlusOnlyIcon size={64} secondary />
          </Button>
        </View>
      </View>
      <View style={styles.container}>
        <Progress showSteps={true} active dots={5} activeDot={2} />
      </View>
    </SafeAreaView>
  );
};

const Flex = () => {
  return (
    <>
      <MobilePageContainer />
    </>
  );
};

export const theme = {
  colors: {
    primary: '#00D6BE',
    primary400: '#00CBAD',
    primary200: '#73E3D1',
    primary100: '#AFEDE3',
    primary50: '#DFF8F5',
    secondary: '#FFFFFF',
    secondary900: 'pink',
    secondary800: '#262626',
    secondary600: '#555555',
    secondary200: '#D9D9D9',
    secondary50: '#F5F5F5',
    error: '#FE4745',
    link: '#008D6D',
  },
  button: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    fontWeightBold: 900,
    fontWeightNormal: 500,
    lineHeight: '18px',
  },
};

const App = () => (
  <NativeRouter>
    <CornershopThemeProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/small-buttons" element={<SmallButtons />} />
        <Route exact path="/flex" element={<Flex />} />
      </Routes>
    </CornershopThemeProvider>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    padding: 20,
  },
});

export default App;
