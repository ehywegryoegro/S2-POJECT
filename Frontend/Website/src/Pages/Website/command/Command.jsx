import React from 'react';

const orders = [
  {
    id: '000001',
    email: 'kuhlman.jermey@yahoo.com',
    address: '089 Kutch Green Apt. 448',
    date: '14/02/2024',
    book: "Don't Make Me Think",
    status: 'Completed',
  },
  {
    id: '000002',
    email: 'rusty.botsford@wilfrid.io',
    address: '543 Weimann Mountain',
    date: '14/02/2024',
    book: 'The Design of EveryDay Things',
    status: 'Processing',
  },
  {
    id: '000003',
    email: 'cora_haley@quinn.biz',
    address: '042 Mylene Throughway',
    date: '14/02/2024',
    book: "Don't Make Me Think",
    status: 'Rejected',
  },
  {
    id: '000004',
    email: 'lockman.marques@hotmail.com',
    address: '8587 Frida Ports',
    date: '14/02/2024',
    book: 'Rich Dad Poor Dad',
    status: 'Completed',
  },
];

const Command = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="p-6">
        <h1 className="text-4xl font-medium mb-4">Orders</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white">
            <thead>
              <tr className="bg-[#F2EDA2]/25">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Book</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <>
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-4">{order.id}</td>
                    <td className="px-4 py-4">{order.email}</td>
                    <td className="px-4 py-4">{order.address}</td>
                    <td className="px-4 py-4">{order.date}</td>
                    <td className="px-4 py-4">{order.book}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`block mx-auto text-center py-1 w-28 rounded text-white ${
                          order.status === 'Completed'
                            ? 'bg-[#00B69B]'
                            : order.status === 'Processing'
                            ? 'bg-[#6226EF]'
                            : 'bg-[#EF3826]'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                  {index < orders.length - 1 && (
                    <tr key={`spacer-${order.id}`} className="h-2 bg-[#F2EDA2]/25">
                      <td colSpan="6"></td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Command;
