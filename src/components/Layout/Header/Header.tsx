import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../UI/buttons/Button/Button.tsx";
import  {SearchForm}  from "../../SearchForm/SearchForm.tsx";

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.header}>
        <div className={styles.linksBlock}>
          <Link to={"/"}>
            <div className={styles.logo}>
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="155"
                  height="37"
                  viewBox="0 0 155 37"
                  fill="none"
                >
                  <g clip-path="url(#clip0_748_686)">
                    <path
                      d="M41.5278 24.0001V23.1041L42.9998 22.7521V14.0481L41.5278 13.6961V12.8001H46.4238C47.6718 12.8001 48.6638 13.0188 49.3998 13.4561C50.1358 13.8828 50.5038 14.5708 50.5038 15.5201C50.5038 16.0961 50.2958 16.6188 49.8798 17.0881C49.4638 17.5468 48.9731 17.8454 48.4078 17.9841V18.0321C49.2931 18.1921 49.9971 18.5228 50.5198 19.0241C51.0425 19.5148 51.3038 20.1228 51.3038 20.8481C51.3038 21.7974 50.8985 22.5601 50.0878 23.1361C49.2771 23.7121 48.2531 24.0001 47.0158 24.0001H41.5278ZM45.6078 22.8641H46.1678C47.8211 22.8641 48.6478 22.1921 48.6478 20.8481C48.6478 20.1974 48.4451 19.6908 48.0398 19.3281C47.6451 18.9654 47.0478 18.7841 46.2478 18.7841H45.6078V22.8641ZM45.6078 17.6161H45.8318C46.3971 17.6161 46.8718 17.4454 47.2558 17.1041C47.6505 16.7628 47.8478 16.2828 47.8478 15.6641C47.8478 14.5121 47.1438 13.9361 45.7358 13.9361H45.6078V17.6161ZM52.2309 24.0001V23.1041L53.7029 22.7521V14.0481L52.2309 13.6961V12.8001H60.7269V16.0801H59.7829L59.1429 14.0321H56.3109V17.7441L59.2869 17.4721V19.0561L56.3109 18.8161V22.7681H59.1749L60.2629 20.5441H61.2069L60.7269 24.0001H52.2309ZM61.621 24.0001V23.1041L63.1891 22.7361L67.0131 12.7201H68.4051L71.9891 22.7361L73.5251 23.1041V24.0001H68.1011V23.1041L69.2371 22.8321L68.5491 20.9121H65.1891L64.4691 22.7841L65.8131 23.1041V24.0001H61.621ZM65.6211 19.8081H68.1491L66.9011 16.4001L65.6211 19.8081ZM72.8767 13.6961V12.8001H78.4287V13.6961L76.9567 14.0481V19.8081C76.9567 21.8561 77.8047 22.8801 79.5007 22.8801C80.3327 22.8801 80.9993 22.6241 81.5007 22.1121C82.0127 21.5894 82.2687 20.8214 82.2687 19.8081V14.0481L80.7967 13.6961V12.8001H85.0527V13.6961L83.5807 14.0481V19.8081C83.5807 21.2374 83.1487 22.3361 82.2847 23.1041C81.4313 23.8614 80.3487 24.2401 79.0367 24.2401C77.6713 24.2401 76.546 23.8614 75.6607 23.1041C74.786 22.3361 74.3487 21.2374 74.3487 19.8081V14.0481L72.8767 13.6961ZM85.4456 16.1921V12.8001H95.2856V16.1921H94.3096L93.6536 14.0321H91.6696V22.7521L93.1416 23.1041V24.0001H87.5896V23.1041L89.0616 22.7521V14.0321H87.0616L86.4056 16.1921H85.4456ZM95.4964 13.6961V12.8001H100.745V13.6961L99.7044 13.9041L101.993 17.2641L104.041 14.0161L102.857 13.6961V12.8001H106.937V13.6961L105.465 14.0481L102.585 18.6241V22.7521L104.057 23.1041V24.0001H98.5044V23.1041L99.9764 22.7521V18.6081L96.7924 14.0161L95.4964 13.6961ZM107.387 24.0001V23.1041L108.859 22.7521V14.0481L107.387 13.6961V12.8001H112.283C113.531 12.8001 114.523 13.0188 115.259 13.4561C115.995 13.8828 116.363 14.5708 116.363 15.5201C116.363 16.0961 116.155 16.6188 115.739 17.0881C115.323 17.5468 114.833 17.8454 114.267 17.9841V18.0321C115.153 18.1921 115.857 18.5228 116.379 19.0241C116.902 19.5148 117.163 20.1228 117.163 20.8481C117.163 21.7974 116.758 22.5601 115.947 23.1361C115.137 23.7121 114.113 24.0001 112.875 24.0001H107.387ZM111.467 22.8641H112.027C113.681 22.8641 114.507 22.1921 114.507 20.8481C114.507 20.1974 114.305 19.6908 113.899 19.3281C113.505 18.9654 112.907 18.7841 112.107 18.7841H111.467V22.8641ZM111.467 17.6161H111.691C112.257 17.6161 112.731 17.4454 113.115 17.1041C113.51 16.7628 113.707 16.2828 113.707 15.6641C113.707 14.5121 113.003 13.9361 111.595 13.9361H111.467V17.6161ZM118.344 18.4001C118.344 16.6721 118.819 15.2694 119.768 14.1921C120.728 13.1041 122.093 12.5601 123.864 12.5601C125.613 12.5601 126.968 13.0934 127.928 14.1601C128.899 15.2268 129.384 16.6401 129.384 18.4001C129.384 20.1494 128.899 21.5628 127.928 22.6401C126.968 23.7068 125.613 24.2401 123.864 24.2401C122.115 24.2401 120.755 23.7121 119.784 22.6561C118.824 21.5894 118.344 20.1708 118.344 18.4001ZM123.864 23.1361C124.792 23.1361 125.496 22.7254 125.976 21.9041C126.456 21.0721 126.696 19.9041 126.696 18.4001C126.696 16.8961 126.451 15.7334 125.96 14.9121C125.48 14.0801 124.781 13.6641 123.864 13.6641C122.936 13.6641 122.232 14.0801 121.752 14.9121C121.272 15.7334 121.032 16.8961 121.032 18.4001C121.032 19.9041 121.267 21.0721 121.736 21.9041C122.216 22.7254 122.925 23.1361 123.864 23.1361ZM130.735 18.4001C130.735 16.6721 131.209 15.2694 132.159 14.1921C133.119 13.1041 134.484 12.5601 136.255 12.5601C138.004 12.5601 139.359 13.0934 140.319 14.1601C141.289 15.2268 141.775 16.6401 141.775 18.4001C141.775 20.1494 141.289 21.5628 140.319 22.6401C139.359 23.7068 138.004 24.2401 136.255 24.2401C134.505 24.2401 133.145 23.7121 132.174 22.6561C131.215 21.5894 130.735 20.1708 130.735 18.4001ZM136.255 23.1361C137.183 23.1361 137.887 22.7254 138.367 21.9041C138.847 21.0721 139.087 19.9041 139.087 18.4001C139.087 16.8961 138.841 15.7334 138.351 14.9121C137.871 14.0801 137.172 13.6641 136.255 13.6641C135.327 13.6641 134.623 14.0801 134.143 14.9121C133.663 15.7334 133.423 16.8961 133.423 18.4001C133.423 19.9041 133.657 21.0721 134.127 21.9041C134.607 22.7254 135.316 23.1361 136.255 23.1361ZM142.825 24.0001V23.1041L144.297 22.7521V14.0481L142.825 13.6961V12.8001H148.377V13.6961L146.905 14.0481V22.7521L148.377 23.1041V24.0001H142.825ZM147.257 18.4161L150.713 14.0161L149.737 13.6961V12.8001H153.897V13.6961L152.377 14.0481L149.689 17.3921L153.113 22.4321L154.617 23.1041V24.0001H150.905L147.257 18.4161Z"
                      fill="#E19192"
                    />
                    <path
                      d="M21 37C28.732 37 35 30.732 35 23C35 15.268 28.732 9 21 9C13.268 9 7 15.268 7 23C7 30.732 13.268 37 21 37Z"
                      fill="#FFD12C"
                    />
                    <path
                      d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                      fill="#E19192"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_748_686">
                      <rect width="155" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            </div>
          </Link>
        </div>
		<SearchForm/>
        <div className={styles.headerButtons}>
          {/* <Link to="/login">
            <Button children={"Увійти"} />
          </Link> */}
          <div className={styles.buttonBusiness}>
            <Button children={"Для бізнесу"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
