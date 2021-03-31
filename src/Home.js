import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './style.css'
import ReactAudioPlayer from 'react-audio-player';

<ReactAudioPlayer
    src="imp.ogg"
    autoPlay
    controls
/>

export default function Home(props) {
    const classes = useStyles();

    return (
        <body>
        <div class="container">
            <div class="credits">
                <div class="headings">
                    <h1>EPISODE IV</h1>
                    <h2>A New Hope</h2>
                </div>
                <p>Amid a galactic civil war, Rebel Alliance spies have stolen plans to the Galactic Empire's Death Star, a massive space station capable of destroying an entire planet. Imperial Senator Princess Leia of Alderaan, secretly one of the Rebellion's leaders, has obtained its schematics, but her starship is intercepted by an Imperial Star Destroyer under the command of the ruthless Darth Vader. Before she is captured, Leia hides the plans in the memory of astromech droid R2-D2, who flees in an escape pod to the desert planet Tatooine accompanied by protocol droid C-3PO.</p>
                 </div>
        </div>
        </body>
    );

}


const useStyles = makeStyles(theme => ({
    main: {
        margin: "0 px",
        "& p": {
            margin: "12px 0 24px"
        }
    }
}));
