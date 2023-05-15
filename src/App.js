import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./section/Home";
import { AnimatePresence } from "framer-motion";
import About from "./section/About";
import Shop from "./section/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./section/Banner";
import NewArrival from "./section/NewArrival";
import Footer from "./section/Footer";
import Loader from "./components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import RegisterPage from "./section/RegisterPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Survey from "./components/Survey";
import SurveyTwo from "./components/SurveyTwo";
import SurveyThree from "./components/SurveyThree";
import GlobalStateProvider from "./section/GlobalState";
import SurveyFour from "./components/SurveyFour";
import LastSurvey from "./components/LastSurvey.";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
    
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies I want to watch to update the scroll.
              //  Basically, I would want to watch page/location changes
              //  For example, on Next.js I would want to watch properties like `router.asPath` (I may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />

          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <BrowserRouter>
              {/* I have imported "GlobalStateProvider" and wrapped the "Switch" component with it. 
              Now the entire application can access the "selectedOption" state and "updateSelectedOption" function. */}
              <GlobalStateProvider> 
                <Switch>
                  <Route path="/home" exact component={Home} />
                  <Route path="/register" exact component={RegisterPage} />
                  <Route path="/about" exact component={About}/>
                  <Route path="/shop" exact component={Shop}/>
                  <Route path="/banner" exact component={Banner}/>
                  <Route path="/new-arrival" exact component={NewArrival} />
                  <Route path="/footer" exact component={Footer} />
                  <Route path="/survey" exact component={Survey}/>
                  <Route path="/survey-two" exact component={SurveyTwo}/>
                  <Route path="/survey-three" exact component={SurveyThree} />
                  <Route path="/survey-four" exact component={SurveyFour} />
                  <Route path="/last-survey" exact component={LastSurvey} />
                </Switch>
                </GlobalStateProvider>
              </BrowserRouter>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
