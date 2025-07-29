import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import angular from "./images/angular.jpg";
import bootstrap from "./images/bootstrap5.png";
import cCsharp from "./images/ccsharp.png";
import kompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>

      <Container maxWidth={"lg"}>
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item size={{xs:12,md:6,lg:3}}>
            <Course
              image={angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur ipsam quam esse, deleniti suscipit ullam, praesentium maxime sequi minus excepturi rerum adipisci! Aliquid et dolore nesciunt distinctio, sed quo?"
            ></Course>
          </Grid>
          <Grid item size={{xs:12,md:6,lg:3}} >
            <Course
              image={bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur ipsam quam esse, deleniti suscipit ullam, praesentium maxime sequi minus excepturi rerum adipisci! Aliquid et dolore nesciunt distinctio, sed quo?"
            ></Course>
          </Grid>
          <Grid item size={{xs:12,md:6,lg:3}} >
            <Course
              image={cCsharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur ipsam quam esse, deleniti suscipit ullam, praesentium maxime sequi minus excepturi rerum adipisci! Aliquid et dolore nesciunt distinctio, sed quo?"
            ></Course>
          </Grid>
          <Grid item size={{xs:12,md:6,lg:3}}>
            <Course
              image={kompleWeb}
              title="KompleWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur ipsam quam esse, deleniti suscipit ullam, praesentium maxime sequi minus excepturi rerum adipisci! Aliquid et dolore nesciunt distinctio, sed quo?"
            ></Course>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
