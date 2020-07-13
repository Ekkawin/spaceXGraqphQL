import React from 'react';
import { Button } from 'antd';
export const ContentBlock = (prop) => {
  const data = prop.data;
  const date =
    data.launch_date_local.substring(0, 10) +
    data.launch_date_local.substring(11, 16);
  return (
    <div className="text-gray-900 bg-spacexitems w-9/12 h-40 mt-16 px-6">
      <div className="grid grid-cols-2 h-20">
        <div className="flex items-center">
          <div className="text-4xl text-white">
            Mission:{' '}
            <span
              className={
                data.launch_success ? 'text-green-600' : 'text-red-600'
              }
            >
              {data.mission_name}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="launchdetailbutton"
            onClick={() => console.log('onclick')}
          >
            Luanch Detail
          </Button>
        </div>
      </div>
      <div className="text-white">
        Date:<span>{date}</span>
      </div>
    </div>
  );
};