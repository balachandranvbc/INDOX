import React from 'react';
import { Clock } from 'lucide-react';

const VestingSchedule = () => {
  const schedules = [
    {
      phase: 'Initial Release',
      percentage: '10%',
      duration: 'At TGE',
      details: 'Initial token generation event release'
    },
    {
      phase: 'Team & Advisors',
      percentage: '15%',
      duration: '24 months',
      details: '6-month cliff, then linear vesting over 18 months'
    },
    {
      phase: 'Ecosystem Growth',
      percentage: '30%',
      duration: '36 months',
      details: 'Linear vesting for ecosystem development and rewards'
    },
    {
      phase: 'Market Making',
      percentage: '45%',
      duration: '48 months',
      details: 'Strategic release for market stability'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-purple-500" />
        <h3 className="text-2xl font-bold text-white">Vesting Schedule</h3>
      </div>

      <div className="space-y-6">
        {schedules.map((schedule, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500" />
            {index !== schedules.length - 1 && (
              <div className="absolute left-1 top-2 w-[1px] h-[calc(100%+1.5rem)] bg-purple-500/30" />
            )}
            <div className="mb-2">
              <span className="text-white font-semibold">{schedule.phase}</span>
              <span className="text-purple-500 ml-2">({schedule.percentage})</span>
            </div>
            <div className="text-gray-400 text-sm">{schedule.duration}</div>
            <div className="text-gray-500 text-sm">{schedule.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VestingSchedule;