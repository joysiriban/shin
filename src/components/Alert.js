import React from 'react';
import PropTypes from 'prop-types';
import { AlertStatus } from '../constants/alertStatus';

const Alert = ({ state, children }) => {
  const getBackgroundState = (status) => {
    let classes = 'border-t-4 rounded-b px-4 py-3 shadow-md';
    switch(status) {
      case AlertStatus.SUCCESS:
        classes = classes + ' bg-teal-100 border-teal-600 text-teal-800';
        break;
      case AlertStatus.INFO:
        classes = classes + ' bg-blue-100 border-blue-500 text-blue-900';
        break;
      case AlertStatus.ERROR:
        classes = classes + ' bg-red-100 border-red-600 text-red-800';
        break;
      case AlertStatus.WARNING:
        classes = classes + ' bg-orange-200 border-orange-600 text-orange-800';
        break;
      default:
        break;
    }
    return classes;
  };

  const getSvgState = (status) => {
    let classes = 'fill-current h-6 w-6 mr-4';
    switch(status) {
      case AlertStatus.SUCCESS:
        classes = classes + ' text-teal-500';
        break;
      case AlertStatus.INFO:
        classes = classes + ' text-blue-500';
        break;
      case AlertStatus.ERROR:
        classes = classes + ' text-red-500';
        break;
      case AlertStatus.WARNING:
        classes = classes + ' text-orange-500';
        break;
      default:
        break;
    }
    return classes;
  }

  return (
    <div className={getBackgroundState(state)} role="alert">
      <div className="flex">
        <div className="py-1"><svg className={getSvgState(state)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div>
          <p className="font-bold">Form {state}</p>
          <p className="text-sm">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  state: PropTypes.string.isRequired
}

export default Alert;
