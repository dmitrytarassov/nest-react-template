import dynamic from 'next/dynamic';

const ReactAdmin = dynamic(() => import('../../admin/AdminNoSsrPage'), {
  ssr: false,
});

const AdminPage = () => <ReactAdmin />;

export default dynamic(() => Promise.resolve(AdminPage), {
  ssr: false,
});
