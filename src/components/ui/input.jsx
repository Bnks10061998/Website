
// import React from 'react';

// export const Input = React.forwardRef(({ className = '', ...props }, ref) => {
//   return (
//     <input
//       ref={ref}
//       className={
//         `border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ` +
//         className
//       }
//       {...props}
//     />
//   );
// });


import React from 'react';

export const Input = React.forwardRef(({ className = '', icon: Icon, ...props }, ref) => {
  return (
    <div className={`relative w-full ${className}`}>
      {Icon && (
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-blue-500">
          <Icon />
        </div>
      )}
      <input
        ref={ref}
        className={`w-full border border-gray-300 rounded-md px-10 py-2 
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition duration-300
        `}
        {...props}
      />
    </div>
  );
});
