export const ConvertObject = (array, numFloor, height) => {
  const obj = {
    type: "FeatureCollection",
    features: [],
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
  };

  for (let i = 0; i < numFloor; i++) {
    let newLayer = array.map((item) => {
      if (i === 0) return item;
      return [...item, i * height];
    });
    let newObj = {
      type: "Feature",
      geometry: {
        type: "MultiPolygon",
        coordinates: [[newLayer]],
      },
      properties: {
        "Building Height": 13.0,
        "Built Area": 9310.83,
        "Gross Floor Area": 37243.3,
        Name: "Building",
        "Number of Storeys": 4,
        "Ground to Sea Elevation": -99999.0,
        "Eave to Sea Elevation": -99986.0,
        "Land Use": "Residential",
        "First Storey Height": 4.0,
        "Other Storeys Height": 3.0,
        GIS_uuid: 1000048,
        Modelur_uid: 1000048,
      },
      id: i + 1,
    };

    obj.features.push(newObj);
  }

  return obj;
};
