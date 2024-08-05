import styles from "./day1.module.scss";
export default function Day1() {
  return (
    <div className={styles.day1}>
      Day1
      <svg
        className="z-10 "
        viewBox="0 0 1920 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="tearUp">
            <path
              d="M 1920.86 65.976 L 1920 26.433 C 1915.21 28.97 1910.85 31.929 1909.58 35.593 C 1892.83 35.734 1874.81 32.211 1886.35 40.384 C 1883.68 45.457 1868.19 43.907 1860.73 43.203 C 1855.24 39.398 1841.86 33.056 1838.2 34.607 C 1833.13 24.178 1819.9 48.135 1816.8 52.503 C 1817.08 49.262 1794.98 37.707 1791.88 40.525 C 1802.58 45.739 1791.88 51.376 1768.79 55.744 C 1773.86 65.75 1756.12 52.081 1744.99 53.631 C 1743.16 43.203 1724.02 63.636 1720.07 56.026 C 1713.32 63.354 1693.89 75.191 1695.29 65.045 C 1690.37 62.65 1675.72 55.603 1670.23 61.663 C 1675.86 56.872 1645.31 39.116 1645.31 47.712 C 1645.31 56.308 1620.53 66.595 1620.53 45.88 C 1620.53 65.609 1595.89 42.216 1595.89 42.357 C 1595.89 44.048 1570.41 56.026 1570.41 52.926 C 1570.41 40.807 1546.62 30.097 1546.62 39.539 C 1546.62 48.417 1521.27 41.512 1521.27 42.639 C 1521.27 56.872 1496.63 48.558 1496.63 39.68 C 1496.63 34.043 1469.74 29.533 1469.74 46.444 C 1469.74 49.685 1447.22 39.68 1447.22 32.07 C 1447.22 28.547 1425.96 4.45 1425.96 13.187 C 1425.96 13.187 1399.77 6.563 1399.77 11.214 C 1399.77 1.772 1374.71 -1.892 1374.71 0.927 C 1374.71 -5.556 1348.66 24.46 1348.66 22.206 C 1348.66 20.233 1324.3 22.206 1324.3 20.937 C 1324.3 23.615 1297.27 19.951 1297.27 17.132 C 1297.27 34.888 1285.3 51.799 1285.3 45.175 C 1285.3 30.52 1262.78 49.544 1262.78 53.772 C 1262.78 47.712 1238.28 56.167 1238.28 51.517 C 1238.28 37.002 1214.2 56.59 1214.2 46.726 C 1214.2 38.834 1189.85 46.585 1189.85 51.094 C 1189.85 49.826 1166.19 63.636 1166.19 59.549 C 1166.19 67.159 1140.85 53.208 1140.85 55.744 C 1140.85 56.59 1118.32 74.064 1118.32 79.137 C 1118.32 80.123 1092.7 58.563 1092.7 71.668 C 1092.7 81.251 1067.78 66.032 1067.78 72.091 C 1067.78 77.446 1041.87 57.435 1041.87 80.264 C 1041.87 77.869 1018.78 59.408 1018.78 63.072 C 1018.78 59.549 992.875 53.349 992.875 47.43 C 992.875 52.08 962.464 38.975 962.464 48.698 C 962.464 31.224 934.024 25.447 934.024 41.512 C 934.024 35.593 907.695 42.498 907.695 46.585 C 907.695 39.116 882.775 44.189 882.775 44.471 C 882.775 33.902 857.432 36.438 857.432 35.452 C 857.432 47.712 832.934 45.457 832.934 50.389 C 832.934 47.289 805.902 27.42 805.902 36.579 C 805.902 33.761 780.559 36.157 780.559 40.384 C 780.559 56.872 756.061 47.712 756.061 48.98 C 756.061 50.812 733.675 69.414 733.675 67.863 C 733.675 71.105 708.05 59.831 708.05 68.991 C 708.05 68.991 679.188 37.989 679.188 52.644 C 679.188 55.04 657.928 86.183 657.928 78.996 C 657.928 73.923 633.007 78.714 633.007 86.042 C 633.007 93.37 606.679 86.465 606.679 87.874 C 606.679 97.879 579.787 78.714 579.787 81.674 C 579.787 84.351 553.318 79.56 553.318 73.923 C 553.318 77.023 527.694 78.996 527.694 83.224 C 527.694 85.197 501.647 75.332 501.647 76.6 C 501.647 79.278 475.6 65.186 475.6 86.324 C 475.6 83.787 449.976 81.815 449.976 69.273 C 449.976 60.958 423.366 85.76 423.366 87.169 C 423.366 106.475 397.882 81.814 397.882 73.359 C 397.882 86.465 371.554 68.145 371.554 78.996 C 371.554 76.319 346.07 57.435 346.07 68.145 C 346.07 75.755 321.291 74.064 321.291 72.373 C 321.291 77.869 296.089 83.505 296.089 83.787 C 296.089 110.28 271.591 90.411 271.591 83.365 C 271.591 75.473 248.219 57.576 248.219 61.24 C 248.219 44.894 223.158 57.435 223.158 69.273 C 223.158 55.744 198.237 82.801 198.237 76.178 C 198.237 70.541 174.021 64.481 174.021 70.541 C 174.021 63.777 147.27 69.273 149.523 70.118 C 151.071 75.332 120.801 69.836 122.772 67.582 C 133.05 66.031 100.808 57.154 96.866 60.113 C 90.953 47.853 65.469 49.403 70.397 57.717 C 66.314 64.481 39.986 48.276 44.209 44.753 C 38.014 43.766 23.935 41.511 16.614 47.712 C 15.628 45.739 7.321 49.685 0.2820000000000003 54.053 L 0 120 L 1920 120 L 1920.86 65.976 Z"
              fill="red"
            />
            <rect y="120" width="100%" height="260px"></rect>
            <path
              transform="translate(0,380)  rotate(180 960 60)"
              d="M 1920.86 65.976 L 1920 26.433 C 1915.21 28.97 1910.85 31.929 1909.58 35.593 C 1892.83 35.734 1874.81 32.211 1886.35 40.384 C 1883.68 45.457 1868.19 43.907 1860.73 43.203 C 1855.24 39.398 1841.86 33.056 1838.2 34.607 C 1833.13 24.178 1819.9 48.135 1816.8 52.503 C 1817.08 49.262 1794.98 37.707 1791.88 40.525 C 1802.58 45.739 1791.88 51.376 1768.79 55.744 C 1773.86 65.75 1756.12 52.081 1744.99 53.631 C 1743.16 43.203 1724.02 63.636 1720.07 56.026 C 1713.32 63.354 1693.89 75.191 1695.29 65.045 C 1690.37 62.65 1675.72 55.603 1670.23 61.663 C 1675.86 56.872 1645.31 39.116 1645.31 47.712 C 1645.31 56.308 1620.53 66.595 1620.53 45.88 C 1620.53 65.609 1595.89 42.216 1595.89 42.357 C 1595.89 44.048 1570.41 56.026 1570.41 52.926 C 1570.41 40.807 1546.62 30.097 1546.62 39.539 C 1546.62 48.417 1521.27 41.512 1521.27 42.639 C 1521.27 56.872 1496.63 48.558 1496.63 39.68 C 1496.63 34.043 1469.74 29.533 1469.74 46.444 C 1469.74 49.685 1447.22 39.68 1447.22 32.07 C 1447.22 28.547 1425.96 4.45 1425.96 13.187 C 1425.96 13.187 1399.77 6.563 1399.77 11.214 C 1399.77 1.772 1374.71 -1.892 1374.71 0.927 C 1374.71 -5.556 1348.66 24.46 1348.66 22.206 C 1348.66 20.233 1324.3 22.206 1324.3 20.937 C 1324.3 23.615 1297.27 19.951 1297.27 17.132 C 1297.27 34.888 1285.3 51.799 1285.3 45.175 C 1285.3 30.52 1262.78 49.544 1262.78 53.772 C 1262.78 47.712 1238.28 56.167 1238.28 51.517 C 1238.28 37.002 1214.2 56.59 1214.2 46.726 C 1214.2 38.834 1189.85 46.585 1189.85 51.094 C 1189.85 49.826 1166.19 63.636 1166.19 59.549 C 1166.19 67.159 1140.85 53.208 1140.85 55.744 C 1140.85 56.59 1118.32 74.064 1118.32 79.137 C 1118.32 80.123 1092.7 58.563 1092.7 71.668 C 1092.7 81.251 1067.78 66.032 1067.78 72.091 C 1067.78 77.446 1041.87 57.435 1041.87 80.264 C 1041.87 77.869 1018.78 59.408 1018.78 63.072 C 1018.78 59.549 992.875 53.349 992.875 47.43 C 992.875 52.08 962.464 38.975 962.464 48.698 C 962.464 31.224 934.024 25.447 934.024 41.512 C 934.024 35.593 907.695 42.498 907.695 46.585 C 907.695 39.116 882.775 44.189 882.775 44.471 C 882.775 33.902 857.432 36.438 857.432 35.452 C 857.432 47.712 832.934 45.457 832.934 50.389 C 832.934 47.289 805.902 27.42 805.902 36.579 C 805.902 33.761 780.559 36.157 780.559 40.384 C 780.559 56.872 756.061 47.712 756.061 48.98 C 756.061 50.812 733.675 69.414 733.675 67.863 C 733.675 71.105 708.05 59.831 708.05 68.991 C 708.05 68.991 679.188 37.989 679.188 52.644 C 679.188 55.04 657.928 86.183 657.928 78.996 C 657.928 73.923 633.007 78.714 633.007 86.042 C 633.007 93.37 606.679 86.465 606.679 87.874 C 606.679 97.879 579.787 78.714 579.787 81.674 C 579.787 84.351 553.318 79.56 553.318 73.923 C 553.318 77.023 527.694 78.996 527.694 83.224 C 527.694 85.197 501.647 75.332 501.647 76.6 C 501.647 79.278 475.6 65.186 475.6 86.324 C 475.6 83.787 449.976 81.815 449.976 69.273 C 449.976 60.958 423.366 85.76 423.366 87.169 C 423.366 106.475 397.882 81.814 397.882 73.359 C 397.882 86.465 371.554 68.145 371.554 78.996 C 371.554 76.319 346.07 57.435 346.07 68.145 C 346.07 75.755 321.291 74.064 321.291 72.373 C 321.291 77.869 296.089 83.505 296.089 83.787 C 296.089 110.28 271.591 90.411 271.591 83.365 C 271.591 75.473 248.219 57.576 248.219 61.24 C 248.219 44.894 223.158 57.435 223.158 69.273 C 223.158 55.744 198.237 82.801 198.237 76.178 C 198.237 70.541 174.021 64.481 174.021 70.541 C 174.021 63.777 147.27 69.273 149.523 70.118 C 151.071 75.332 120.801 69.836 122.772 67.582 C 133.05 66.031 100.808 57.154 96.866 60.113 C 90.953 47.853 65.469 49.403 70.397 57.717 C 66.314 64.481 39.986 48.276 44.209 44.753 C 38.014 43.766 23.935 41.511 16.614 47.712 C 15.628 45.739 7.321 49.685 0.2820000000000003 54.053 L 0 120 L 1920 120 L 1920.86 65.976 Z"
              fill="red"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
