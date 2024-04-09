import React from 'react';

function DashboardIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className}>
      <path
        d="M11.25 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V13.75C2.5 15.1307 3.61929 16.25 5 16.25H11.25C12.6307 16.25 13.75 15.1307 13.75 13.75V5C13.75 3.61929 12.6307 2.5 11.25 2.5Z"
        fill="currentColor"
      />
      <path
        d="M25 2.5H18.75C17.3693 2.5 16.25 3.61929 16.25 5V8.75C16.25 10.1307 17.3693 11.25 18.75 11.25H25C26.3807 11.25 27.5 10.1307 27.5 8.75V5C27.5 3.61929 26.3807 2.5 25 2.5Z"
        fill="currentColor"
      />
      <path
        d="M11.25 18.75H5C3.61929 18.75 2.5 19.8693 2.5 21.25V25C2.5 26.3807 3.61929 27.5 5 27.5H11.25C12.6307 27.5 13.75 26.3807 13.75 25V21.25C13.75 19.8693 12.6307 18.75 11.25 18.75Z"
        fill="currentColor"
      />
      <path
        d="M25 13.75H18.75C17.3693 13.75 16.25 14.8693 16.25 16.25V25C16.25 26.3807 17.3693 27.5 18.75 27.5H25C26.3807 27.5 27.5 26.3807 27.5 25V16.25C27.5 14.8693 26.3807 13.75 25 13.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DashboardIcon;