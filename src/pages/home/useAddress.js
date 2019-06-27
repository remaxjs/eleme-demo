import React from 'react';
import request from '../../lib/request';

export default function useAddress() {
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    my.getLocation({
      success: async location => {
        const res = await request.get(
          `/restapi/bgs/poi/reverse_geo_coding?latitude=${location.latitude}&longitude=${location.longitude}`,
        );
        setAddress(res.name);
      },
    });
  }, []);

  return address;
}
