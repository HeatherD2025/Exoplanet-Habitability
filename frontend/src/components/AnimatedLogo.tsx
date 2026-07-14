import "../App.css";

export default function AnimatedLogo() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="animated-logo-container"
      aria-label="Habitability App Spaceship Logo"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
    >
      {/* 1. BACK FLAMES */}
      <g transform="matrix(0.772687,0.634787,-0.634787,0.772687,187.498149,-13.429149)">
        <g className="back-flames">
          {/* Left Back Flame */}
          <g transform="matrix(1,0,0,-1,-9.5,490.864957)">
            <path
              d="M52.5,220c0,0 17.5,24.15 17.5,34.5c0,9.659 -7.841,17.5 -17.5,17.5c-9.659,0 -17.5,-7.841 -17.5,-17.5c0,-10.35 17.5,-34.5 17.5,-34.5Z"
              style={{ fill: "#f07838" }}
            />
          </g>
          {/* Right Back Flame */}
          <g transform="matrix(1,0,0,-1,54.5,490.864957)">
            <path
              d="M52.5,220c0,0 17.5,24.15 17.5,34.5c0,9.659 -7.841,17.5 -17.5,17.5c-9.659,0 -17.5,-7.841 -17.5,-17.5c0,-10.35 17.5,-34.5 17.5,-34.5Z"
              style={{ fill: "#f07838" }}
            />
          </g>
        </g>
      </g>

      {/* 2. FRONT FLAME */}
      {/* Outer group handles Affinity's rotation & translation layout */}
      <g transform="matrix(0.772687,0.634787,-0.634787,0.772687,86.565132,188.197053)">
        {/* Inner group safely applies your CSS animations */}
        <g className="front-flame">
          <path
            d="M25,63c0,0 20.529,-28.33 20.529,-40.471c0,-11.33 -9.199,-20.529 -20.529,-20.529c-11.33,0 -20.529,9.199 -20.529,20.529c0,12.141 20.529,40.471 20.529,40.471Z"
            style={{ fill: "#ba4c40" }}
          />
        </g>
      </g>

      {/* 3. SPACESHIP BODY */}
      <g transform="matrix(0.772687,0.634787,-0.634787,0.772687,127.46965,-54.804564)">
        <g className="spaceship-body">
          {/* Main Cabin / Center Hull */}
          <g transform="matrix(0.999841,0.017814,-0.017814,0.999841,0.709286,-2.624155)">
            <path
              d="M176.341,50.491c5.039,22.215 1.3,72.979 1.796,100.808c0.393,22.055 1.179,66.165 1.179,66.165l-56.94,1.015c-0.266,-14.942 -0.632,-44.829 -1.14,-63.99c-0.451,-16.997 -1.606,-33.977 -1.908,-50.974c-0.306,-17.164 -1.718,-26.57 0.073,-52.01c0.329,-4.671 17.516,-27.961 22.232,-33.578c5.226,-6.224 5.859,-8.473 11.635,-0.851c1.79,2.363 21.601,26.92 23.074,33.414Z"
              style={{ fill: "#5c6b8a" }}
            />
          </g>

          {/* Engine Shrouds / Nozzles */}
          <g transform="matrix(1,0,0,0.966691,0,2.965234)">
            <path
              d="M142,66.726l0,14.549c0,4.264 -3.462,7.726 -7.726,7.726l-13.549,0c-1.264,0 -2.726,0.538 -2.726,-3.726c0,0 0,-20.285 1,-24.549c0.289,-1.231 0.462,-1.726 1.726,-1.726l13.549,0c4.264,0 7.726,3.462 7.726,7.726Z"
              style={{ fill: "#ababab" }}
            />
          </g>

          <g transform="matrix(1,0,0,1,64.173188,-20)">
            <path d="M55,172l26,68l-52,0l26,-68Z" style={{ fill: "#a2b8d2" }} />
          </g>

          <g transform="matrix(1,0,0,1,121.122467,-20.17585)">
            <path d="M55,172l26,68l-52,0l26,-68Z" style={{ fill: "#a2b8d2" }} />
          </g>

          <g transform="matrix(1,0,0,1,101.647828,4)">
            <path d="M46,145l10,71l-20,0l10,-71Z" style={{ fill: "#a2b8d2" }} />
          </g>
        </g>
      </g>
    </svg>
  );
}
