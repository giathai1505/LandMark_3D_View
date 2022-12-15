import { Scene } from "@esri/react-arcgis";
import React, { useEffect, useState } from "react";
import ArcGisAPI from "../../api/arcGisAPI";
import { ConvertFaceArray } from "../../assets/function/ConvertFaceArray";
import Header from "../../components/Header";
import Building from "./Building";
import CommentImg from "../../assests/comments.png";
import CommentPanel from "./Comment";

const BaDView = () => {
  const [landMarkData, setLandMarkData] = useState([]);
  const [isShowPanel, setIsShowPanel] = useState(false);

  const getData = async () => {
    try {
      const result = await ArcGisAPI.getData();
      setLandMarkData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col relative">
        <div className="fixed bottom-20 right-20 z-10 cursor-pointer">
          <img
            src={CommentImg}
            alt=""
            className="w-12 "
            onClick={() => setIsShowPanel(true)}
          />
        </div>
        <Scene
          style={{
            width: "100vw",
            height: "calc(100vh - 60px)",
            marginTop: "80px",
            overflow: "hidden",
          }}
          mapProperties={{ basemap: "topo-vector", ground: "world-elevation" }}
          viewProperties={{
            camera: {
              position: [106.72222137451173, 10.78961379262691, 300],
              heading: 0,
              tilt: 75,
              fov: 120,
            },
            popup: { defaultPopupTemplateEnabled: true },
          }}
        >
          {landMarkData.map((item) => {
            return item.Body.map((item) => {
              const newArray = ConvertFaceArray(item.Face[0].Node);
              return (
                <Building
                  data={newArray}
                  height={item.Height}
                  numOfFloor={item.NumOfFloors}
                />
              );
            });
          })}
        </Scene>
        <CommentPanel
          isShow={isShowPanel}
          hideCommentPanel={() => setIsShowPanel(false)}
        />
      </div>
    </div>
  );
};

export default BaDView;
