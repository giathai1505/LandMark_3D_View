import { useEffect, useRef } from "react";
import {} from "@esri/react-arcgis";
import { loadModules } from "esri-loader";
import { ConvertObject } from "../../../assets/function/ConvertObject";

const Building = (props) => {
  const layerRef = useRef();

  useEffect(() => {
    if (!props.data) return;
    loadModules(["esri/layers/GeoJSONLayer"])
      .then(([GeoJSONLayer]) => {
        const result = ConvertObject(
          props.data,
          props.numOfFloor,
          props.height
        );
        const blob = new Blob([JSON.stringify(result)], {
          type: "application/json",
        });

        //URL reference to the blob
        const url = URL.createObjectURL(blob);
        const layer = new GeoJSONLayer({
          url,
          renderer: {
            type: "simple",
            symbol: {
              type: "polygon-3d",
              symbolLayers: [
                {
                  type: "extrude",
                  size: 5.6,
                  material: {
                    color: "rgb(137,207,240)",
                  },
                  edges: {
                    type: "solid",
                    color: [50, 50, 50, 1],
                  },
                },
              ],
            },
          },
        });
        layerRef.current = layer;
        props.map.layers.add(layer);
      })
      .catch((err) => console.log(err));

    return function cleanup() {
      props.map.layers.remove(layerRef.current);
    };
  }, []);

  return null;
};

export default Building;
