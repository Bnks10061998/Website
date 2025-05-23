// import React from 'react';

// export const Button = ({ variant = 'primary', className = '', children, ...props }) => {
//   const baseStyles =
//     'px-4 py-2 rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';

//   const variants = {
//     primary:
//       'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary:
//       'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
//     danger:
//       'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
//   };

//   return (
//     <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };



import React from 'react';

export const Button = ({ variant = 'primary', className = '', children, icon: Icon, ...props }) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:from-blue-700 hover:to-blue-600 focus:ring-blue-500',
    secondary:
      'bg-gradient-to-r from-gray-300 to-gray-200 text-gray-900 shadow-sm hover:from-gray-400 hover:to-gray-300 focus:ring-gray-400',
    danger:
      'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md hover:from-red-700 hover:to-red-600 focus:ring-red-500',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};
