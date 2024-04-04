import { LayerColor } from './layer.model';

export interface OperationalLayerOptions {
  /* if true markers will be clustered */
  enableClustering: boolean;
  /* url to the mapserver containing the required features*/
  url?: string;
  /* layerid of the layer on the provided mapserver url */
  layerId?: number;
  /* if markers are passed by marker array this name will be used to view in layermanagement */
  name?: string;
  /* option to pass custom markers */
  markers?: OperationalMarker[]
  /* set visibility of layer */
  isVisible?: boolean;
  /* show tooltip with value*/
  showTooltip?: boolean;
  /* propertyvalue to show in the tooltip, if not provided will fallback to default displayfield of */
  tooltipField?: string;
  /* an optional expression to filter features server side (mapserver) */
  where?: string;
  /* the minimum active zoomlevel to show the ESRI feature layer */
  minZoom?: number;
  /* the maximum active zoomlevel to show the ESRI feature layer */
  maxZoom?: number;
  /* style options that will be passed to ESRI feature layer, more info https://leafletjs.com/reference.html#path */
  layerColor?: LayerColor;
}


export interface OperationalMarker {
  /* coordinates used to place marker on map */
  coordinate: OperationalMarkerCoordinate;
  color?: string;
  /* Streamline icon class e.g. 'ai-pin'. You have to provide valid icon class otherwise marker won't be visible */
  icon: string;
  /* icon size in pixels, default: 40px */
  size?: string;
  /* Provide additional data, this data object will be returned after filter actions (filter layer) */
  data: any;
}

export interface OperationalMarkerCoordinate {
  lat: number;
  lon: number;
}
