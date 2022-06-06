const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default async function getLocation(): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // @ts-ignore
        const crd = pos.coords;
        resolve([crd.latitude, crd.longitude]);
      },
      reject,
      options,
    );
  });
}
