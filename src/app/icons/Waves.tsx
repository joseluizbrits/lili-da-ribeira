function Waves({ rotate }: { rotate?: boolean }) {
  const deg = rotate ? "180deg" : "0deg";

  return (
    <svg
      style={{ rotate: deg }}
      width="375"
      height="200"
      viewBox="0 0 375 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_167_65)">
        <path
          d="M496.787 122.772C394.373 64.9417 335.073 121.616 316.189 138.08C284.101 166.045 139.089 244.682 -17.2637 162.741L-2.65619 23.2686L754 23.2686C754 23.2686 641.129 220.572 496.787 122.772Z"
          fill="#4C9696"
        />
        <path
          d="M490.513 99.505C385.808 41.6737 325.406 98.3492 306.168 114.813C273.477 142.778 125.622 221.416 -34.2134 139.474L-19.6486 -4.71928e-06L752.869 -4.71928e-06C752.869 -4.71928e-06 638.126 197.306 490.513 99.505Z"
          fill="#80BFBF"
        />
      </g>
      <defs>
        <clipPath id="clip0_167_65">
          <rect width="375" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Waves;
