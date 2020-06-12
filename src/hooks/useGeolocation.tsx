import { useState, useEffect } from 'react';

export const useGeoLocation = () => {
  const [geolocation, setGeolocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [error, setError] = useState({});

  const onChange = ({ coords }: any) => {
    setGeolocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error: any) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...geolocation, error };
};
