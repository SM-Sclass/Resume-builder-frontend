import React , {useState} from 'react'
import Sidebar from '../components/Sidebar';
import PropTypes from 'prop-types';
import Header from '../components/HeaderComp/Header';

const Defaultlayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="outerdeflayout">
      <div className="innerdeflayout">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="mainlayout">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default Defaultlayout