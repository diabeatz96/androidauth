import {useCurrentFrame, Video, Series} from "remotion";
import video from "../public/videos/Video1.mp4";


export const VideoPlay = () => {
    const frame = useCurrentFrame();

    return (
        <div style={{flex: 1, backgroundColor: 'white'}}>

            <div
                style={{
                    textAlign: "center",
                    fontSize: "7em",
                    color: "red",
                    textAlignLast: "center"
                }}
            >
                The current frame is {frame}.
            </div>


            {/*

               <Series>
                <Series.Sequence durationInFrames={652 - 360} name = "Intro">
                    <Video src={video}
                           startFrom={360} // 360 frame
                           endAt={652} // 652 frame
                    />
                </Series.Sequence>
                  <Series.Sequence durationInFrames={1049 - 772} name = "Intro">
                    <Video src={video}
                           startFrom={772} // 360 frame
                           endAt={1049} // 652 frame
                    />
                 </Series.Sequence>
               <Series.Sequence durationInFrames={1478 - 1115} name = "Intro">
                    <Video src={video}
                           startFrom={1115} // 360 frame
                           endAt={1478} // 652 frame
                    />
                </Series.Sequence>
            </Series>


            */}

            <Series>
                <Series.Sequence durationInFrames={652 - 400} name = "Intro">
                    <Video src={video}
                           startFrom={360} // 360 frame
                           endAt={652} // 652 frame
                    />
                </Series.Sequence>
                <Series.Sequence durationInFrames={1049 - 774} name = "Intro">
                    <Video src={video}
                           startFrom={772} // 360 frame
                           endAt={1049} // 652 frame
                    />
                </Series.Sequence>
                <Series.Sequence durationInFrames={1478 - 1115} name = "Intro">
                    <Video src={video}
                           startFrom={1115} // 360 frame
                           endAt={1478} // 652 frame
                    />
                </Series.Sequence>
            </Series>


        </div>


    );
};