const FacebookFooter = ({ className = "", color = "#231f20" }) => {
  return (
    <svg
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180.87 180.87"
    >
      <path
        fill="current"
        d="M99.29,70.9v7.91h28.73l-7.72,22.37h-21.01v55.19h-25.38v-55.19h-21.06v-22.37h21.06v-8.18c0-30.24,12.61-46.13,39.34-46.13,8.19,0,10.24,1.31,14.74,2.39v22.14c-5.04-.9-6.46-1.35-11.67-1.35-6.21,0-9.49,1.73-12.51,5.2-3.02,3.46-4.53,9.47-4.53,18.02m81.58,72.73V37.24c0-20.57-16.67-37.24-37.24-37.24H37.24C16.67,0,0,16.67,0,37.24v106.39c0,20.57,16.67,37.24,37.24,37.24h106.39c20.57,0,37.24-16.67,37.24-37.24"
      />
    </svg>
  );
};

const Facebook = {
  Footer: FacebookFooter,
};

export default Facebook;
