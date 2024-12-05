import React from 'react';

const Table = () => {
  const data = [
    {
      app: 'Web App',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
    {
      app: 'iOS App',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
    {
      app: 'Android App',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
    {
      app: 'Work Timelines',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
    {
      app: 'Work Progress',
      team: '500',
      business: '1000',
      enterprises: 'Unlimited',
    },
    {
      app: 'Work Statuses',
      team: '35',
      business: '50',
      enterprises: 'Unlimited',
    },
    {
      app: 'Work Templates',
      team: '40',
      business: '75',
      enterprises: 'Unlimited',
    },
    {
      app: 'Work Types',
      team: '30',
      business: '45',
      enterprises: 'Unlimited',
    },
    {
      app: 'Inbox Triage',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
    {
      app: 'Notes On Timeline',
      team: '✓',
      business: '✓',
      enterprises: '✓',
    },
  ];

  return (
    <div className="px-4 py-8 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare Plans</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left text-lg">App</th>
              <th className="px-6 py-4 text-center text-lg">TEAM</th>
              <th className="px-6 py-4 text-center text-lg">BUSINESS</th>
              <th className="px-6 py-4 text-center text-lg">ENTERPRISES</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="px-6 py-4 text-left text-md">{row.app}</td>
                <td className="px-6 py-4 text-center text-md">{row.team}</td>
                <td className="px-6 py-4 text-center text-md">{row.business}</td>
                <td className="px-6 py-4 text-center text-md">{row.enterprises}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
