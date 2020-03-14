import React, {Component} from 'react'
import '../App.css'

export default class MainSvg extends Component {



constructor(props){
  super(props);
    this.state = {
      isBlinking: false
    };
    this.blinkingInterval = false;
    }

 componentDidMount() {
   if (!this.blinkingInterval) {
      this.blinkingInterval = setInterval(() => {
       this.setState({
          isBlinking: !this.state.isBlinking
         });
       }, 800);
    }
  }

  componentWillUnmount() {
      clearInterval(this.blinkingInterval);
      this.blinkingInterval = false;
    }

    render(){
      return(

<svg viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-6288" y="-18553" width="13256" height="37787">
<path d="M0 0H680V680H0V0Z" fill="#C4C4C4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6644 18994C6638.48 18994 6634 18998.5 6634 19004V19229.9H6624V19233.9H6634V19234H6958V19233.9H6968V19229.9H6958V19004C6958 18998.5 6953.52 18994 6948 18994H6644Z" fill="#C4C4C4"/>
<path d="M-6288 -18553H-6188V-18453H-6288V-18553Z" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0)">
<path d="M288 158.098C289.195 153.638 290.792 149.393 292.741 145.392M300.829 132.547C313.599 116.449 332.99 106.546 353.76 105.865C360.535 105.642 367.457 106.401 374.345 108.247C382.304 110.379 389.578 113.792 396.005 118.204M403.687 124.31C406.923 127.275 409.863 130.526 412.476 134.01" stroke="#111B2A"/>
<path d="M637.385 178.443C641.485 180.566 645.289 183.036 648.779 185.798M659.59 196.452C672.576 212.378 678.09 233.441 674.302 253.874C673.066 260.539 670.84 267.138 667.561 273.469C663.771 280.785 658.877 287.159 653.19 292.49M645.579 298.684C641.988 301.209 638.183 303.383 634.219 305.188" stroke="#F3C25D"/>
<path d="M340.164 464C340.722 468.583 340.827 473.117 340.514 477.557M337.812 492.493C331.983 512.198 317.698 528.629 298.687 537.023C292.485 539.761 285.781 541.643 278.703 542.505C270.524 543.501 262.501 543.054 254.891 541.364M245.484 538.57C241.374 537.03 237.433 535.113 233.707 532.857" stroke="#00B48F"/>
<path d="M52.6895 407.043C49.2388 403.975 46.1604 400.645 43.4578 397.109M35.6028 384.12C26.938 365.488 26.7795 343.716 35.4821 324.845C38.3211 318.689 42.103 312.841 46.8402 307.513C52.3149 301.354 58.6267 296.382 65.4519 292.615M74.3538 288.486C78.4552 286.922 82.6788 285.752 86.9647 284.979" stroke="#00B48F"/>
<circle cx="599.5" cy="392.5" r="69" stroke="#111B2A"/>
<rect x="68" y="158" width="544" height="352" rx="8" fill="#00122C"/>
<path d="M310 206V216" stroke="#8C98AB"/>
<path d="M76 268V278" stroke="#8C98AB"/>
<path d="M612 268V277.5" stroke="#445669"/>
<path d="M232 268V278" stroke="#8C98AB"/>
<path d="M154 268V278" stroke="#8C98AB"/>
<path d="M310 268V278" stroke="#8C98AB"/>
<path d="M388 268V278" stroke="#8C98AB"/>
<path d="M466 268V277.5" stroke="#8C98AB"/>
<path d="M544 268V277.5" stroke="#8C98AB"/>
<path d="M76 330V340" stroke="#8C98AB"/>
<path d="M154 330V340" stroke="#8C98AB"/>
<path d="M232 330V340" stroke="#8C98AB"/>
<path d="M310 330V340" stroke="#8C98AB"/>
<path d="M388 330V340" stroke="#8C98AB"/>
<path d="M466 330V339.5" stroke="#8C98AB"/>
<path d="M544 330V339.5" stroke="#8C98AB"/>
<path d="M76 392V401.5" stroke="#8C98AB"/>
<path d="M154 392V401.5" stroke="#8C98AB"/>
<path d="M232 392V401.5" stroke="#8C98AB"/>
<path d="M310 392V402" stroke="#8C98AB"/>
<path d="M388 392V402" stroke="#8C98AB"/>
<path d="M466 392V401.5" stroke="#8C98AB"/>
<path d="M544 392V401.5" stroke="#8C98AB"/>
<path d="M76 454V463.5" stroke="#8C98AB"/>
<path d="M154 454V463.5" stroke="#8C98AB"/>
<path d="M232 454V463.5" stroke="#8C98AB"/>
<path d="M310 454V464" stroke="#8C98AB"/>
<path d="M388 454V464" stroke="#8C98AB"/>
<path d="M388 206V216" stroke="#8C98AB"/>
<path d="M466 206V215.5" stroke="#8C98AB"/>
<path d="M543 206.5V216" stroke="#8C98AB"/>
<circle cx="155" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="77" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="233" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="311" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="389" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="467" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="545" cy="312" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="311" cy="374" r="4.5" stroke="#00B48F"/>
<circle cx="155" cy="374" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="77" cy="374" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="233" cy="374" r="2" fill={this.state.isBlinking && "#00B48F"}/>
<circle cx="311" cy="374" r="2" fill={this.state.isBlinking && "#F3C25D"}/>
<circle cx="389" cy="374" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="467" cy="374" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="545" cy="374" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="155" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="77" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="233" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="311" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="389" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="467" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="545" cy="436" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="155" cy="501" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="77" cy="501" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="233" cy="501" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="311" cy="501" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<circle cx="389" cy="501" r="2" fill={this.state.isBlinking && "#8C98AB"}/>
<path d="M68 198.5H612" stroke="#55657D"/>
<path d="M68 260.5H612" stroke="#55657D"/>
<path d="M68 322.5H612" stroke="#55657D"/>
<path d="M68 384.5H612" stroke="#55657D"/>
<path d="M68 446.5H612" stroke="#55657D"/>
<path d="M146.5 260V510" stroke="#55657D"/>
<path d="M224.5 260V510" stroke="#55657D"/>
<path d="M302.5 198V510" stroke="#55657D"/>
<path d="M380.5 198V510" stroke="#55657D"/>
<path d="M458.5 198V510" stroke="#55657D"/>
<path d="M536 199L536 445" stroke="#8C98AB"/>
<path d="M608 178.5H571M168 178.5H146M209.5 178.5H188M184 178.5H172" stroke="#8C98AB"/>
<path d="M86.95 182.1C88.65 182.1 89.87 181.23 90.08 179.51H88.78C88.64 180.52 87.94 181.02 86.95 181.02C85.63 181.02 84.86 180.07 84.86 178.46V178.38C84.86 176.78 85.68 175.8 86.94 175.8C87.97 175.8 88.5 176.29 88.65 177.24H90C89.84 175.56 88.57 174.74 86.93 174.74C84.94 174.74 83.46 176.24 83.46 178.39V178.47C83.46 180.67 84.71 182.1 86.95 182.1ZM92.5509 182.1C93.3509 182.1 93.8109 181.81 94.1509 181.36V182H95.3409V178.57C95.3409 177.14 94.4209 176.66 93.2509 176.66C92.0809 176.66 91.1109 177.17 91.0109 178.39H92.1809C92.2409 177.87 92.5509 177.57 93.1809 177.57C93.8909 177.57 94.1309 177.92 94.1309 178.62V178.89H93.4809C91.9809 178.89 90.8009 179.33 90.8009 180.55C90.8009 181.64 91.5909 182.1 92.5509 182.1ZM92.8409 181.23C92.2409 181.23 92.0009 180.94 92.0009 180.5C92.0009 179.86 92.5909 179.65 93.5109 179.65H94.1309V180.17C94.1309 180.84 93.5809 181.23 92.8409 181.23ZM96.7578 182H97.9678V174.35H96.7578V182ZM101.743 182.1C103.083 182.1 103.973 181.5 104.143 180.4H102.973C102.883 180.91 102.503 181.2 101.773 181.2C100.873 181.2 100.373 180.64 100.333 179.65H104.163V179.3C104.163 177.43 102.993 176.66 101.693 176.66C100.203 176.66 99.0927 177.74 99.0927 179.36V179.44C99.0927 181.09 100.203 182.1 101.743 182.1ZM100.353 178.84C100.473 178.03 100.963 177.54 101.693 177.54C102.443 177.54 102.903 177.94 102.963 178.84H100.353ZM105.243 182H106.453V178.92C106.453 178.09 107.003 177.67 107.683 177.67C108.403 177.67 108.723 178.03 108.723 178.82V182H109.933V178.71C109.933 177.27 109.193 176.66 108.143 176.66C107.283 176.66 106.703 177.09 106.453 177.6V176.77H105.243V182ZM113.287 182.1C114.057 182.1 114.727 181.64 115.007 181.12V182H116.217V174.35H115.007V177.57C114.717 177.05 114.187 176.66 113.337 176.66C111.977 176.66 110.987 177.72 110.987 179.39V179.47C110.987 181.17 111.977 182.1 113.287 182.1ZM113.587 181.14C112.807 181.14 112.227 180.59 112.227 179.44V179.36C112.227 178.23 112.747 177.61 113.637 177.61C114.517 177.61 115.047 178.18 115.047 179.33V179.41C115.047 180.58 114.427 181.14 113.587 181.14ZM119.026 182.1C119.826 182.1 120.286 181.81 120.626 181.36V182H121.816V178.57C121.816 177.14 120.896 176.66 119.726 176.66C118.556 176.66 117.586 177.17 117.486 178.39H118.656C118.716 177.87 119.026 177.57 119.656 177.57C120.366 177.57 120.606 177.92 120.606 178.62V178.89H119.956C118.456 178.89 117.276 179.33 117.276 180.55C117.276 181.64 118.066 182.1 119.026 182.1ZM119.316 181.23C118.716 181.23 118.476 180.94 118.476 180.5C118.476 179.86 119.066 179.65 119.986 179.65H120.606V180.17C120.606 180.84 120.056 181.23 119.316 181.23ZM123.202 182H124.412V179.28C124.412 178.17 125.052 177.83 126.112 177.82V176.69C125.232 176.7 124.742 177.09 124.412 177.75V176.77H123.202V182Z"  fill="white"/>
<path d="M84 246.5H145" stroke="#00B48F"/>
<path d="M84 213.5C107.822 213.5 121.178 213.5 145 213.5M84 220.5H145M84 227.5H145" stroke="#445669"/>
<g filter="url(#filter0_d)">
<rect x="410" y="110" width="240" height="361" rx="4" fill="white"/>
</g>
<path d="M439 150.5H459" stroke="#00B48F"/>
<path d="M429 186.5H459" stroke="#C5CCD6"/>
<path d="M426 307H456" stroke="#00B48F" strokeWidth="4"/>
<path d="M429 162.5H483" stroke="#111B2A"/>
<path d="M429 174.5H468" stroke="#C5CCD6"/>
<path d="M600 150.5L634 150.5" stroke="#C5CCD6"/>
<path d="M583 186.5L634 186.5" stroke="#C5CCD6"/>
<path d="M580 162.5H634" stroke="#C5CCD6"/>
<path d="M592.5 174.5H634" stroke="#C5CCD6"/>
<rect x="426" y="326" width="16" height="1" fill="#C5CCD6"/>
<rect x="458" y="326" width="56" height="1" fill="#C5CCD6"/>
<rect x="530" y="326" width="29" height="1" fill="#C5CCD6"/>
<rect x="611" y="326" width="23" height="1" fill="#C5CCD6"/>
<rect x="426" y="345" width="16" height="1" fill="#C5CCD6"/>
<rect x="458" y="345" width="56" height="1" fill="#C5CCD6"/>
<rect x="530" y="345" width="29" height="1" fill="#C5CCD6"/>
<rect x="610" y="345" width="24" height="1" fill="#C5CCD6"/>
<rect x="426" y="364" width="16" height="1" fill="#C5CCD6"/>
<rect x="458" y="364" width="56" height="1" fill="#C5CCD6"/>
<rect x="530" y="364" width="29" height="1" fill="#C5CCD6"/>
<rect x="619" y="364" width="15" height="1" fill="#C5CCD6"/>
<rect x="426" y="383" width="16" height="1" fill="#C5CCD6"/>
<rect x="458" y="383" width="56" height="1" fill="#C5CCD6"/>
<rect x="530" y="383" width="29" height="1" fill="#C5CCD6"/>
<rect x="611" y="383" width="23" height="1" fill="#C5CCD6"/>
<rect x="426" y="402" width="16" height="1" fill="#C5CCD6"/>
<rect x="458" y="402" width="56" height="1" fill="#C5CCD6"/>
<rect x="426" y="421" width="208" height="1" fill="#C5CCD6"/>
<rect x="426" y="326" width="208" height="1" fill="#C5CCD6"/>
<rect x="530" y="402" width="29" height="1" fill="#C5CCD6"/>
<rect x="605" y="402" width="29" height="1" fill="#C5CCD6"/>
<rect x="605" y="440" width="29" height="2" rx="1" fill="#00122C"/>
<rect x="426" y="440" width="18" height="2" fill="#00B887"/>
<rect x="602" y="437" width="35" height="8" rx="4" stroke="#00B887" strokeWidth="2"/>
<path stroke-width=".3" stroke="green" fill="#000" fill-rule="nonezero" d="M430.25 134.1C431.83 134.1 432.88 133.13 432.88 131.89C432.88 130.46 432.01 129.98 430.33 129.75C429.09 129.57 428.85 129.28 428.85 128.7C428.85 128.15 429.27 127.76 430.08 127.76C430.9 127.76 431.33 128.08 431.46 128.83H432.68C432.54 127.46 431.62 126.76 430.08 126.76C428.59 126.76 427.59 127.64 427.59 128.81C427.59 130.15 428.4 130.67 430.11 130.9C431.27 131.09 431.6 131.34 431.6 132C431.6 132.66 431.04 133.1 430.25 133.1C429.04 133.1 428.75 132.5 428.66 131.78H427.38C427.48 133.13 428.3 134.1 430.25 134.1ZM435.848 134.09C436.218 134.09 436.478 134.03 436.668 133.96V133C436.498 133.07 436.318 133.1 436.078 133.1C435.698 133.1 435.478 132.89 435.478 132.43V129.68H436.628V128.77H435.478V127.62H434.268V128.77H433.568V129.68H434.268V132.54C434.268 133.53 434.808 134.09 435.848 134.09ZM439.468 133.23C438.868 133.23 438.628 132.94 438.628 132.5C438.628 131.86 439.218 131.65 440.138 131.65H440.758V132.17C440.758 132.84 440.208 133.23 439.468 133.23ZM439.178 134.1C439.978 134.1 440.438 133.81 440.778 133.36V134H441.968V130.57C441.968 129.14 441.048 128.66 439.878 128.66C438.708 128.66 437.738 129.17 437.638 130.39H438.808C438.868 129.87 439.178 129.57 439.808 129.57C440.518 129.57 440.758 129.92 440.758 130.62V130.89H440.108C438.608 130.89 437.428 131.33 437.428 132.55C437.428 133.64 438.218 134.1 439.178 134.1ZM445.135 134.09C445.505 134.09 445.765 134.03 445.955 133.96V133C445.785 133.07 445.605 133.1 445.365 133.1C444.985 133.1 444.765 132.89 444.765 132.43V129.68H445.915V128.77H444.765V127.62H443.555V128.77H442.855V129.68H443.555V132.54C443.555 133.53 444.095 134.09 445.135 134.09ZM449.346 134.1C450.686 134.1 451.576 133.5 451.746 132.4H450.576C450.486 132.91 450.106 133.2 449.376 133.2C448.476 133.2 447.976 132.64 447.936 131.65H451.766V131.3C451.766 129.43 450.596 128.66 449.296 128.66C447.806 128.66 446.696 129.74 446.696 131.36V131.44C446.696 133.09 447.806 134.1 449.346 134.1ZM447.956 130.84C448.076 130.03 448.566 129.54 449.296 129.54C450.046 129.54 450.506 129.94 450.566 130.84H447.956ZM452.847 134H454.057V130.87C454.057 130.07 454.607 129.67 455.207 129.67C455.797 129.67 456.137 130 456.137 130.77V134H457.347V130.87C457.347 130.07 457.897 129.67 458.497 129.67C459.097 129.67 459.427 130 459.427 130.77V134H460.637V130.69C460.637 129.25 459.857 128.66 458.897 128.66C458.247 128.66 457.527 128.95 457.127 129.6C456.867 128.95 456.327 128.66 455.647 128.66C454.877 128.66 454.307 129.08 454.057 129.57V128.77H452.847V134ZM464.327 134.1C465.667 134.1 466.557 133.5 466.727 132.4H465.557C465.467 132.91 465.087 133.2 464.357 133.2C463.457 133.2 462.957 132.64 462.917 131.65H466.747V131.3C466.747 129.43 465.577 128.66 464.277 128.66C462.787 128.66 461.677 129.74 461.677 131.36V131.44C461.677 133.09 462.787 134.1 464.327 134.1ZM462.937 130.84C463.057 130.03 463.547 129.54 464.277 129.54C465.027 129.54 465.487 129.94 465.547 130.84H462.937ZM467.827 134H469.037V130.92C469.037 130.09 469.587 129.67 470.267 129.67C470.987 129.67 471.307 130.03 471.307 130.82V134H472.517V130.71C472.517 129.27 471.777 128.66 470.727 128.66C469.867 128.66 469.287 129.09 469.037 129.6V128.77H467.827V134ZM475.691 134.09C476.061 134.09 476.321 134.03 476.511 133.96V133C476.341 133.07 476.161 133.1 475.921 133.1C475.541 133.1 475.321 132.89 475.321 132.43V129.68H476.471V128.77H475.321V127.62H474.111V128.77H473.411V129.68H474.111V132.54C474.111 133.53 474.651 134.09 475.691 134.09Z" />
<g filter="url(#filter1_d)">
<rect x="5" y="374" width="240" height="179" rx="4" fill="white"/>
</g>
<rect x="21" y="490" width="16" height="1" fill="#C5CCD6"/>
<rect x="21" y="471" width="16" height="1" fill="#00122C"/>
<rect x="21" y="452" width="16" height="1" fill="#C5CCD6"/>
<rect x="21" y="433" width="16" height="1" fill="#C5CCD6"/>
<rect x="21" y="414" width="16" height="1" fill="#C5CCD6"/>
<rect x="53" y="490" width="56" height="1" fill="#C5CCD6"/>
<rect x="53" y="471" width="56" height="1" fill="#C5CCD6"/>
<rect x="53" y="452" width="56" height="1" fill="#C5CCD6"/>
<rect x="53" y="433" width="56" height="1" fill="#C5CCD6"/>
<rect x="53" y="414" width="56" height="1" fill="#C5CCD6"/>
<rect x="125" y="490" width="29" height="1" fill="#00122C"/>
<rect x="125" y="471" width="29" height="1" fill="#C5CCD6"/>
<rect x="125" y="452" width="29" height="1" fill="#C5CCD6"/>
<rect x="125" y="433" width="29" height="1" fill="#C5CCD6"/>
<rect x="125" y="414" width="29" height="1" fill="#C5CCD6"/>
<rect x="170" y="490" width="59" height="1" fill="#C5CCD6"/>
<rect x="170" y="471" width="59" height="1" fill="#C5CCD6"/>
<rect x="21" y="528" width="16" height="1" fill="#C5CCD6"/>
<rect x="21" y="509" width="16" height="1" fill="#C5CCD6"/>
<rect x="53" y="528" width="56" height="1" fill="#C5CCD6"/>
<rect x="53" y="509" width="56" height="1" fill="#C5CCD6"/>
<rect x="125" y="528" width="29" height="1" fill="#C5CCD6"/>
<rect x="125" y="509" width="29" height="1" fill="#C5CCD6"/>
<rect x="170" y="528" width="59" height="1" fill="#C5CCD6"/>
<rect x="170" y="509" width="59" height="1" fill="#C5CCD6"/>
<rect x="170" y="452" width="59" height="1" fill="#00122C"/>
<rect x="170" y="433" width="59" height="1" fill="#C5CCD6"/>
<rect x="170" y="414" width="59" height="1" fill="#C5CCD6"/>
<rect x="19.5" y="469.5" width="19" height="4" rx="2" stroke="#00B48F"/>
<rect x="123.5" y="488.5" width="32" height="4" rx="2" stroke="#00B48F"/>
<rect x="168.5" y="450.5" width="62" height="4" rx="2" stroke="#00B48F"/>
<path d="M22.25 398H23.59V391.9H25.58V390.85H20.26V391.9H22.25V398ZM26.1985 398H27.4085V395.28C27.4085 394.17 28.0485 393.83 29.1085 393.82V392.69C28.2285 392.7 27.7385 393.09 27.4085 393.75V392.77H26.1985V398ZM31.7355 397.23C31.1355 397.23 30.8955 396.94 30.8955 396.5C30.8955 395.86 31.4855 395.65 32.4055 395.65H33.0255V396.17C33.0255 396.84 32.4755 397.23 31.7355 397.23ZM31.4455 398.1C32.2455 398.1 32.7055 397.81 33.0455 397.36V398H34.2355V394.57C34.2355 393.14 33.3155 392.66 32.1455 392.66C30.9755 392.66 30.0055 393.17 29.9055 394.39H31.0755C31.1355 393.87 31.4455 393.57 32.0755 393.57C32.7855 393.57 33.0255 393.92 33.0255 394.62V394.89H32.3755C30.8755 394.89 29.6955 395.33 29.6955 396.55C29.6955 397.64 30.4855 398.1 31.4455 398.1ZM35.6223 398H36.8323V394.92C36.8323 394.09 37.3823 393.67 38.0623 393.67C38.7823 393.67 39.1023 394.03 39.1023 394.82V398H40.3123V394.71C40.3123 393.27 39.5723 392.66 38.5223 392.66C37.6623 392.66 37.0823 393.09 36.8323 393.6V392.77H35.6223V398ZM43.4963 398.1C44.8363 398.1 45.5863 397.49 45.5863 396.43C45.5863 395.32 44.8563 395.02 43.6263 394.83C42.7963 394.69 42.5463 394.54 42.5463 394.16C42.5463 393.79 42.8563 393.54 43.3763 393.54C43.9363 393.54 44.2063 393.76 44.3063 394.24H45.4263C45.2963 393.06 44.4463 392.66 43.3763 392.66C42.3963 392.66 41.4163 393.18 41.4163 394.23C41.4163 395.21 41.9263 395.6 43.3063 395.82C44.0763 395.95 44.4263 396.11 44.4263 396.54C44.4263 396.98 44.1363 397.21 43.4863 397.21C42.7763 397.21 42.5063 396.9 42.4463 396.37H41.3063C41.3563 397.48 42.1463 398.1 43.4963 398.1ZM48.3077 397.23C47.7077 397.23 47.4677 396.94 47.4677 396.5C47.4677 395.86 48.0577 395.65 48.9777 395.65H49.5977V396.17C49.5977 396.84 49.0477 397.23 48.3077 397.23ZM48.0177 398.1C48.8177 398.1 49.2777 397.81 49.6177 397.36V398H50.8077V394.57C50.8077 393.14 49.8877 392.66 48.7177 392.66C47.5477 392.66 46.5777 393.17 46.4777 394.39H47.6477C47.7077 393.87 48.0177 393.57 48.6477 393.57C49.3577 393.57 49.5977 393.92 49.5977 394.62V394.89H48.9477C47.4477 394.89 46.2677 395.33 46.2677 396.55C46.2677 397.64 47.0577 398.1 48.0177 398.1ZM54.4846 398.1C55.9046 398.1 56.8146 397.25 56.9046 396.05H55.7946C55.7246 396.79 55.1746 397.17 54.5346 397.17C53.6446 397.17 53.0846 396.57 53.0846 395.43V395.35C53.0846 394.27 53.6746 393.63 54.5046 393.63C55.1446 393.63 55.6046 393.92 55.7046 394.62H56.8746C56.7346 393.18 55.6446 392.66 54.4846 392.66C53.0246 392.66 51.8446 393.71 51.8446 395.37V395.45C51.8446 397.12 52.9846 398.1 54.4846 398.1ZM59.7266 398.09C60.0966 398.09 60.3566 398.03 60.5466 397.96V397C60.3766 397.07 60.1966 397.1 59.9566 397.1C59.5766 397.1 59.3566 396.89 59.3566 396.43V393.68H60.5066V392.77H59.3566V391.62H58.1466V392.77H57.4466V393.68H58.1466V396.54C58.1466 397.53 58.6866 398.09 59.7266 398.09ZM62.258 391.91C62.658 391.91 62.978 391.61 62.978 391.22C62.978 390.82 62.658 390.52 62.258 390.52C61.858 390.52 61.538 390.82 61.538 391.22C61.538 391.61 61.858 391.91 62.258 391.91ZM61.668 398H62.878V392.77H61.668V398ZM66.6828 398.1C68.2228 398.1 69.3728 397.04 69.3728 395.41V395.33C69.3728 393.73 68.2228 392.66 66.6928 392.66C65.1528 392.66 64.0028 393.74 64.0028 395.36V395.44C64.0028 397.03 65.1428 398.1 66.6828 398.1ZM66.6928 397.16C65.7728 397.16 65.2428 396.49 65.2428 395.42V395.34C65.2428 394.26 65.7928 393.61 66.6928 393.61C67.5928 393.61 68.1328 394.27 68.1328 395.35V395.42C68.1328 396.49 67.5928 397.16 66.6928 397.16ZM70.4661 398H71.6761V394.92C71.6761 394.09 72.2261 393.67 72.9061 393.67C73.6261 393.67 73.9461 394.03 73.9461 394.82V398H75.1561V394.71C75.1561 393.27 74.4161 392.66 73.3661 392.66C72.5061 392.66 71.9261 393.09 71.6761 393.6V392.77H70.4661V398ZM78.3401 398.1C79.6801 398.1 80.4301 397.49 80.4301 396.43C80.4301 395.32 79.7001 395.02 78.4701 394.83C77.6401 394.69 77.3901 394.54 77.3901 394.16C77.3901 393.79 77.7001 393.54 78.2201 393.54C78.7801 393.54 79.0501 393.76 79.1501 394.24H80.2701C80.1401 393.06 79.2901 392.66 78.2201 392.66C77.2401 392.66 76.2601 393.18 76.2601 394.23C76.2601 395.21 76.7701 395.6 78.1501 395.82C78.9201 395.95 79.2701 396.11 79.2701 396.54C79.2701 396.98 78.9801 397.21 78.3301 397.21C77.6201 397.21 77.3501 396.9 77.2901 396.37H76.1501C76.2001 397.48 76.9901 398.1 78.3401 398.1Z" fill={this.state.isBlinking && "#00122C"}/>
<circle cx="431" cy="150" r="2" fill={this.state.isBlinking && "#F3C25D"}/>
<path d="M313.5 370L428 153.5" stroke="#00B48F"/>
<circle cx="431" cy="150" r="4.5" stroke="#00B48F"/>
<circle cx="225" cy="395" r="2" fill={this.state.isBlinking && "#F3C25D"}/>
<circle cx="225" cy="395" r="4.5" stroke="#00B48F"/>
<path d="M229.5 394L306.5 375.5" stroke="#00B48F"/>
</g>
</g>
<defs>
<filter id="filter0_d" x="407" y="108" width="246" height="367" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.172549 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="2" y="372" width="246" height="185" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.172549 0 0 0 0.13 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="680" height="680" fill="white"/>
</clipPath>
</defs>
</svg>



    )
  }
}
