export const base64ToXml = (base64: string): string => {
    const binaryString = atob(base64);
    const parser = new DOMParser();
    const xml = parser.parseFromString(binaryString, "text/xml");
    return new XMLSerializer().serializeToString(xml);
  };
  
  export const xmlToBase64 = (xmlString: string): string => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    return btoa(new XMLSerializer().serializeToString(xmlDoc));
  };
  