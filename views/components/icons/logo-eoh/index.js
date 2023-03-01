import clsx from "clsx";

const LogoEOH = ({ className = "", color = "#010101" }) => {
  return (
    <svg
      className={clsx("transition-all duration-300 w-40 xl:w-80", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1500 413.86"
      fill={color}
    >
      <filter id="filterData" fill="current">
        <feGaussianBlur result="blur" stdDeviation="13" />
        <feDiffuseLighting surfaceScale="300">
          <feDistantLight azimuth="90" elevation="100" />
        </feDiffuseLighting>
        <feComposite result="composite" operator="in" in2="SourceGraphic" />
      </filter>
      <g>
        <path
          fill="current"
          d="M619.05,0l-1.17,12.49h5.31l.76-1.69c.59-1.31,1.95-2.51,2.86-2.51h20.01V54.38c0,1.27-.67,2.41-1.65,2.86l-1.69,.76v5.02h17.19v-5.02l-1.69-.76c-.99-.45-1.66-1.6-1.66-2.86V8.29h20.01c.91,0,2.27,1.2,2.86,2.51l.76,1.69h5.31l-1.18-12.49h-66.03Z"
        />
        <path
          fill="current"
          d="M752.15,5.03l1.69,.76c.99,.44,1.65,1.59,1.65,2.86V27.41l-5.68-.02c-10.91-.04-30.83-.12-38.32,0V8.65c0-1.27,.66-2.41,1.65-2.86l1.69-.76V0h-17.19V5.03l1.69,.76c.99,.44,1.65,1.59,1.65,2.86V54.38c0,1.27-.67,2.41-1.65,2.86l-1.69,.76v5.02h17.19v-5.02l-1.69-.76c-.99-.45-1.66-1.6-1.66-2.86v-18.73c4.45-.05,13.89-.02,23.03,0,8.78,.04,17.11,.06,20.97,.02v18.71c0,1.27-.66,2.41-1.65,2.86l-1.69,.76v5.02h17.19v-5.02l-1.69-.77c-.99-.44-1.65-1.59-1.65-2.86V8.65c0-1.27,.66-2.41,1.65-2.86l1.69-.76V0h-17.19V5.03Z"
        />
        <path
          fill="current"
          d="M833.3,52.23c-.59,1.31-1.95,2.51-2.86,2.51h-30.97v-19.09h14.2c.91,0,2.27,1.2,2.86,2.51l.76,1.69h5.03V23.17h-5.02l-.76,1.69c-.59,1.31-1.96,2.51-2.86,2.51h-14.2V8.29h30.97c.91,0,2.27,1.2,2.86,2.51l.76,1.69h5.31L838.19,0h-52.57V5.03l1.69,.76c.99,.44,1.65,1.59,1.65,2.86V54.38c0,1.27-.67,2.41-1.65,2.86l-1.69,.76v5.02h52.57l1.17-12.48h-5.31l-.76,1.69Z"
        />
      </g>
      <g>
        <path d="M167.39,138.73c-14.02-8.24-31.12-12.42-50.83-12.42H0v6.27l1.9,.84c5.17,2.33,8.51,7.87,8.51,14.12v142.46c0,6.25-3.34,11.79-8.51,14.11l-1.91,.85v6.26H116.59c19.18-.18,36.06-4.49,50.16-12.81,14.15-8.34,25.03-19.67,32.35-33.66,7.27-13.96,10.95-29.43,10.95-45.99s-3.59-32.35-10.68-46.33c-7.14-14.09-17.89-25.42-31.97-33.7Zm-48.82,158.03H31.72V140.76H118.83c14.72,.17,27.52,3.74,38.02,10.62,10.51,6.91,18.52,16.33,23.81,27.99,5.35,11.83,8.07,25.08,8.07,39.4s-2.77,27.62-8.22,39.51c-5.4,11.77-13.41,21.24-23.8,28.12-10.4,6.88-23.23,10.36-38.14,10.36Z" />
        <path d="M399.23,290.03l-77.6-170.26h-6.14l-82.17,170.28c-1.33,2.84-3.65,6.29-5.63,8.38-1.65,1.74-4.93,4.22-6.98,5.29l-2.62,1.27v6.24h40.57v-6.29l-1.85-.84c-1.76-.83-3.52-2-5.07-3.36-2.94-2.58-3.85-7-2.2-10.74,1-2.26,1.89-4.21,1.89-4.21l7.28-14.75c2.59-5.25,7.71-8.52,13.36-8.52h90.8l13.93,30.07c1.33,2.91,.99,6.27-.86,8.53-.12,.15-.24,.28-.37,.41-1.1,1.09-2.33,1.96-3.67,2.57l-1.86,.87v6.26h44.45v-6.26l-1.87-.87c-2.02-.94-8.18-3.78-13.39-14.06Zm-42.7-40.24h-86.63l45.82-91.66,40.81,91.66Z" />
        <path d="M540.99,132.56l5.5,2.49c1.56,.71,2.72,2.06,3.18,3.72,.46,1.66,.15,3.42-.83,4.83l-54.62,78.44-56.14-80.68c-.96-1.37-1.25-3.08-.81-4.7,.4-1.46,1.33-2.59,2.42-3.11l2.21-.73v-6.5h-42.13v6.26l1.9,.86c4.71,2.12,8.75,5.48,11.7,9.71l66.16,95.07v51.8c0,6.25-3.34,11.79-8.51,14.11l-1.91,.85v6.26h42.12v-6.26l-1.9-.86c-5.17-2.33-8.52-7.87-8.52-14.12v-53.88l61.56-88.41c4.34-6.22,10.29-11.15,17.17-14.25l2.01-.82v-6.33h-40.57v6.25Z" />
        <path d="M818.47,128.04l-82.94,141.08-80.42-137.52-2.97-5.28h-34.11v6.35l2.02,.82c6.12,2.46,12.63,8.22,12.63,14.06v142.46c0,5.84-6.51,11.61-12.62,14.06l-2.03,.8v6.36h43.76v-6.36l-2.02-.8c-6.13-2.46-12.64-8.22-12.64-14.06V160.18l84.47,144.52,85.38-146.08v131.39c0,6.2-3.79,11.71-9.64,14.06l-2.03,.8v6.36h44.77v-6.36l-2.02-.8c-5.87-2.36-9.66-7.88-9.66-14.06V147.54c0-6.2,3.79-11.71,9.65-14.06l2.03-.8v-6.36h-27.4l-4.22,1.72Z" />
        <path d="M1060.78,290.03l-77.6-170.26h-6.14l-82.17,170.28c-1.34,2.85-3.65,6.29-5.63,8.38-1.65,1.74-4.93,4.22-6.98,5.29l-2.62,1.27v6.24h40.57v-6.29l-1.85-.84c-1.76-.83-3.52-2-5.07-3.36-2.94-2.58-3.85-7-2.2-10.74,1-2.26,1.89-4.21,1.89-4.21l7.28-14.75c2.59-5.25,7.71-8.52,13.35-8.52h90.8l13.93,30.07c1.33,2.91,.99,6.27-.86,8.53-.12,.15-.24,.28-.37,.41-1.1,1.09-2.33,1.96-3.67,2.57l-1.86,.87v6.26h44.45v-6.26l-1.87-.87c-2.02-.94-8.18-3.78-13.39-14.06Zm-42.7-40.24h-86.63l45.82-91.66,40.81,91.66Z" />
        <path d="M1397.33,196.76c13.16-8.66,28.07-18.49,41.7-28.41,18.27-13.29,38.16-25.05,59.11-34.95l1.85-.87v-6.22h-52.6l.19,6.31,1.86,.84c1.49,.68,2.51,2.05,2.74,3.68,.22,1.61-.39,3.19-1.63,4.23-17.68,14.82-39.76,29.35-61.11,43.4l-.45,.3c-9.18,6.04-17.84,11.75-25.89,17.3-4.74,3.25-8.88,6.19-12.65,8.98-5.98,4.41-10.95,8.4-15.1,12.12v-75.94c0-6.25,3.34-11.79,8.5-14.11l1.91-.85v-6.27h-42.13v6.27l1.9,.84c5.17,2.33,8.51,7.87,8.51,14.12v142.47c0,6.25-3.34,11.79-8.5,14.11l-1.91,.85v6.27h42.13v-6.27l-1.9-.84c-5.17-2.33-8.51-7.87-8.51-14.12v-37.31c0-6,2.46-11.79,6.74-15.88,4.17-3.97,9.59-8.44,16.56-13.61l108.08,88.01h33.28v-4.16l-.58-2.07-1.42-.92c-9.31-4.16-17.9-9.41-25.52-15.62l-95.76-77.98c6.43-4.36,13.17-8.81,19.73-13.12l.9-.59Z" />
        <path d="M1264.99,304.08c-9.31-4.16-17.9-9.41-25.52-15.62l-48.62-39.59,17.31-.58c7.32-1.21,14.27-3.67,20.71-7.34,9.58-5.44,17.27-12.97,22.84-22.4,5.53-9.38,8.35-19.74,8.38-30.81-.03-11.06-2.85-21.42-8.39-30.81-5.57-9.41-13.25-16.95-22.83-22.39-9.57-5.46-20.16-8.23-31.45-8.23h-95.3v6.27l1.9,.84c5.17,2.33,8.51,7.87,8.51,14.12v142.46c0,6.25-3.34,11.79-8.5,14.11l-1.91,.85v6.26h42.14v-6.26l-1.9-.84c-5.17-2.33-8.52-7.87-8.52-14.12v-40.82h25.64l76.22,62.06h31.32v-4.16l-.58-2.07-1.42-.92Zm-131.18-163h51.3c.87,.03,1.73,.11,2.59,.19l1.95,.18c.41,.04,.81,.08,1.2,.14l1.74,.23v-.03c.8,.12,1.6,.25,2.42,.41,6.52,.98,12.44,2.8,17.59,5.4,8.14,4.15,14.35,9.75,18.46,16.64,3.87,6.51,5.95,13.93,6.18,22.08l.02,.6c.01,.24,.02,.48,.02,.86l-.05,1.37c-.23,8.13-2.3,15.55-6.18,22.06-4.11,6.9-10.31,12.49-18.45,16.64-5.16,2.61-11.08,4.43-17.56,5.39l-.76,.1c-1.85,.26-3.75,.46-5.68,.59-1.97,.13-3.99,.21-6.07,.21h-48.7l-.03-93.08Z" />
      </g>
      <g>
        <path
          fill="current"
          d="M358.28,413.24h-27.13v-34.49h26.71v5.6h-20.49v8.66h17.63v5.6h-17.63v9.02h20.9v5.6Z"
        />
        <path
          fill="current"
          d="M424.35,395.97c0,10.58-8.3,17.27-19.55,17.27h-14.11v-34.49h14.11c11.25,0,19.55,6.69,19.55,17.22Zm-6.33,0c0-6.95-5.18-11.57-13.22-11.57h-7.88v23.18h7.88c8.04,0,13.22-4.62,13.22-11.62Z"
        />
        <path
          fill="current"
          d="M491.08,405.93l-.16,.16c-.57,.78-1.19,1.56-1.92,2.18-.1,.16-.16,.26-.26,.31-2.85,2.75-6.69,4.36-10.58,5.03l-.99,.16c-.57,0-1.19,.05-1.71,.1h-1.45c-11.05-.16-19.08-7.47-19.08-17.89s8.25-17.84,19.55-17.84c7.56,0,14.01,3.83,17.55,9.94l-7.29,.04c-2.44-2.72-6.08-4.27-10.27-4.27-7.78,0-13.17,4.98-13.17,12.14,0,2.33,.52,4.25,1.45,6.02,2.23,3.63,6.43,5.96,11.15,6.17h.57c3.53,0,7.16-1.19,9.8-3.63l.05-.1c1.3-1.4,2.23-3.01,2.8-4.83l-13.59-.05v-5.5h20.23l.1,.94c.05,.36,.1,.83,.1,1.76-.16,3.42-1.14,6.48-2.9,9.18Z"
        />
        <path
          fill="current"
          d="M551.69,413.24h-27.13v-34.49h26.71v5.6h-20.49v8.66h17.63v5.6h-17.63v9.02h20.9v5.6Z"
        />
        <path fill="current" d="M598.16,402.09h-16.8v-5.08h16.8v5.08Z" />
        <path
          fill="current"
          d="M627.73,395.97c0-10.53,8.25-17.84,19.55-17.84s19.5,7.31,19.5,17.84-8.25,17.89-19.5,17.89-19.55-7.31-19.55-17.89Zm32.67,0c0-7.21-5.34-12.14-13.12-12.14s-13.17,4.98-13.17,12.14,5.39,12.19,13.17,12.19,13.12-4.98,13.12-12.19Z"
        />
        <path
          fill="current"
          d="M729.69,413.24h-5.29l-19.03-23.81v23.81h-6.22v-34.49h5.34l18.98,23.76v-23.76h6.22v34.49Z"
        />
        <path fill="current" d="M778.6,402.09h-16.8v-5.08h16.8v5.08Z" />
        <path
          fill="current"
          d="M842.19,413.24h-6.28v-14.62h-19.09v14.62h-6.22v-34.49h6.22v14.26h19.09v-14.26h6.28v34.49Z"
        />
        <path
          fill="current"
          d="M876.48,397.58v-18.83h6.43v18.83c0,7.62,2.64,10.58,9.28,10.58s9.23-2.9,9.23-10.58v-18.83h6.43v18.83c0,9.29-3.53,16.29-15.66,16.29s-15.72-6.79-15.72-16.29Z"
        />
        <path
          fill="current"
          d="M975.8,395.97c0,10.58-8.3,17.27-19.55,17.27h-14.11v-34.49h14.11c11.25,0,19.55,6.69,19.55,17.22Zm-6.33,0c0-6.95-5.18-11.57-13.22-11.57h-7.88v23.18h7.88c8.04,0,13.22-4.62,13.22-11.62Z"
        />
        <path
          fill="current"
          d="M1005.52,408.99l3.63-4.46c3.58,2.44,8.14,3.63,12.55,3.63,4.82,0,8.3-1.61,8.3-4.67s-3.99-3.84-7.88-4.46l-.52-.05c-.16-.05-.31-.05-.47-.1-10.89-1.81-14.16-4.62-14.16-9.8,0-8.51,8.3-10.94,15.3-10.94,4.77,0,10.11,1.87,14.32,4.2l-3.84,4.41c-3.68-2.02-7-2.9-10.58-2.9-5.81,0-8.82,1.87-8.82,4.93,0,2.44,2.07,3.58,8.92,4.51,4.98,.78,14.16,2.02,14.16,10.11,0,6.22-5.7,10.47-14.78,10.47-6.38,0-12.91-2.64-16.13-4.87Z"
        />
        <path
          fill="current"
          d="M1066.88,395.97c0-10.53,8.25-17.84,19.55-17.84s19.5,7.31,19.5,17.84-8.25,17.89-19.5,17.89-19.55-7.31-19.55-17.89Zm32.67,0c0-7.21-5.34-12.14-13.12-12.14s-13.17,4.98-13.17,12.14,5.39,12.19,13.17,12.19,13.12-4.98,13.12-12.19Z"
        />
        <path
          fill="current"
          d="M1168.85,413.24h-5.29l-19.03-23.81v23.81h-6.22v-34.49h5.34l18.98,23.76v-23.76h6.22v34.49Z"
        />
      </g>
    </svg>
  );
};

export default LogoEOH;