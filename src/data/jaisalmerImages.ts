// Client Jaisalmer Photography Manifest
// Verified photo identification and location mapping

export interface ClientPhoto {
  id: string;
  title: string;
  originalName: string;
  url: string;
  width: number;
  height: number;
  category: 'hero' | 'architecture' | 'fort' | 'temples' | 'havelis' | 'desert' | 'culture' | 'gallery';
  locationName: string;
}

export const CLIENT_JAISALMER_PHOTOS: ClientPhoto[] = [
  {
    id: "client-photo-1",
    title: "Gadisar Lake Ghats & Temples",
    originalName: "20200723_182902_001-HDR.JPG",
    url: "/images/jaisalmer/web_20200723_182902_001-HDR.JPG",
    width: 1920,
    height: 1440,
    category: "gallery",
    locationName: "Gadisar Lake"
  },
  {
    id: "client-photo-2",
    title: "Jaisalmer Fort (Sonar Qila) Aerial",
    originalName: "DJI_0002.jpg",
    url: "/images/jaisalmer/web_DJI_0002.jpg",
    width: 1920,
    height: 1440,
    category: "fort",
    locationName: "Jaisalmer Fort"
  },
  {
    id: "client-photo-3",
    title: "Gadisar Lake & Water Chhatris",
    originalName: "DJI_0065.JPG",
    url: "/images/jaisalmer/web_DJI_0065.JPG",
    width: 1920,
    height: 1440,
    category: "gallery",
    locationName: "Gadisar Lake"
  },
  {
    id: "client-photo-4",
    title: "Gadisar Lake Central Chhatri at Dusk",
    originalName: "DJI_0438.JPG",
    url: "/images/jaisalmer/web_DJI_0438.JPG",
    width: 1920,
    height: 1440,
    category: "gallery",
    locationName: "Gadisar Lake"
  },
  {
    id: "client-photo-5",
    title: "Jaisalmer Fort Bastions & Ramparts",
    originalName: "DJI_0661-Edit-Edit.JPG",
    url: "/images/jaisalmer/web_DJI_0661.JPG",
    width: 1920,
    height: 1440,
    category: "fort",
    locationName: "Jaisalmer Fort"
  },
  {
    id: "client-photo-6",
    title: "Jaisalmer Fort Illuminated at Night",
    originalName: "DJI_0727-Enhanced-NR-Edit.jpg",
    url: "/images/jaisalmer/web_DJI_0727.jpg",
    width: 1920,
    height: 1080,
    category: "fort",
    locationName: "Jaisalmer Fort"
  },
  {
    id: "client-photo-7",
    title: "Jaisalmer Fort Night Cityscape",
    originalName: "DJI_0731-Enhanced-NR-Edit.jpg",
    url: "/images/jaisalmer/web_DJI_0731.jpg",
    width: 1920,
    height: 1137,
    category: "fort",
    locationName: "Jaisalmer Fort"
  },
  {
    id: "client-photo-8",
    title: "Sam Sand Dunes Aerial Camel Safari",
    originalName: "DJI_0742-Enhanced-NR-Edit.jpg",
    url: "/images/jaisalmer/web_DJI_0742.jpg",
    width: 1920,
    height: 1080,
    category: "desert",
    locationName: "Sam Sand Dunes"
  },
  {
    id: "client-photo-9",
    title: "Sam Sand Dunes Golden Hour",
    originalName: "DJI_0742.JPG",
    url: "/images/jaisalmer/web_DJI_0742.jpg",
    width: 1920,
    height: 1080,
    category: "desert",
    locationName: "Sam Sand Dunes"
  },
  {
    id: "client-photo-10",
    title: "Gadisar Lake Temple on Embankment",
    originalName: "DSC03564-Edit-Edit.JPG",
    url: "/images/jaisalmer/web_DSC03564.JPG",
    width: 1920,
    height: 1280,
    category: "gallery",
    locationName: "Gadisar Lake"
  },
  {
    id: "client-photo-11",
    title: "Sam Sand Dunes Camel Silhouette at Sunset",
    originalName: "DSC_0273.JPG",
    url: "/images/jaisalmer/web_DSC_0273.JPG",
    width: 1920,
    height: 1277,
    category: "desert",
    locationName: "Sam Sand Dunes"
  },
  {
    id: "client-photo-12",
    title: "Gadisar Lake Pavilion & Rainbow Sky",
    originalName: "DSC_1927.JPG",
    url: "/images/jaisalmer/web_DSC_1927.JPG",
    width: 1920,
    height: 1282,
    category: "gallery",
    locationName: "Gadisar Lake"
  },
  {
    id: "client-photo-13",
    title: "Sam Sand Dunes Rippled Sand Formations",
    originalName: "DSC_7552.JPG",
    url: "/images/jaisalmer/web_DSC_7552.JPG",
    width: 1920,
    height: 1282,
    category: "desert",
    locationName: "Sam Sand Dunes"
  },
  {
    id: "client-photo-14",
    title: "Jaisalmer Fort Palace (Raj Mahal) Facade",
    originalName: "Jaisalmer fort -17.jpg",
    url: "/images/jaisalmer/web_Jaisalmer_fort_-17.jpg",
    width: 1920,
    height: 1246,
    category: "fort",
    locationName: "Jaisalmer Fort Palace"
  },
];
